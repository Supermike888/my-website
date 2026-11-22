const coursePanel = document.getElementById('lesson-panel');
const courseStorageKey = 'english-situations-course-v1';
let courseState = { history: {}, result: null };
try {
  const stored = JSON.parse(localStorage.getItem(courseStorageKey));
  if (stored && stored.history && typeof stored.history === 'object') courseState = stored;
} catch {
  // Storage is optional, for example when opening a local file.
}
let session;
let currentAnswer = '';
let answered = false;

function escapeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
}

function persistCourse() {
  try { localStorage.setItem(courseStorageKey, JSON.stringify(courseState)); }
  catch { /* The lesson remains usable without storage. */ }
}

function shuffleCourse(items) {
  const result = items.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function frameCourse(title, body, focus = true) {
  coursePanel.innerHTML = '<h2 tabindex="-1">' + escapeText(title) + '</h2>' + body;
  if (focus) coursePanel.querySelector('h2').focus();
}

function bindCourse(id, action) {
  document.getElementById(id).addEventListener('click', action);
}

function showCourseHome() {
  frameCourse('Выберите ситуацию', '<p>Пять направлений, 45 вариантов заданий. В каждом уроке шесть заданий и два упражнения со своими фразами. Смешанная практика содержит девять заданий по разным темам.</p>' +
    '<p>При повторе часть вопросов обновляется. В банке каждого направления есть задания с выбором перевода, сборкой из слов и самостоятельным вводом. В смешанной практике объяснение времени появляется после ответа.</p>' +
    '<div class="course-cards">' + courseTopics.map(topic =>
      '<button data-topic="' + topic.id + '"><strong>' + topic.title + '</strong><br>' + topic.intro + '</button>'
    ).join('') + '<button class="primary" data-topic="mixed"><strong>Ситуации и истории · смешанная практика</strong><br>Выбирайте форму по контексту.</button></div>' +
    '<div class="actions"><a href="index.html">Первый пробный урок</a>' +
    (courseState.result ? '<button id="last-result">Последний результат</button>' : '') + '</div>', false);
  coursePanel.querySelectorAll('[data-topic]').forEach(button =>
    button.addEventListener('click', () => beginCourse(button.dataset.topic)));
  if (courseState.result) bindCourse('last-result', () => showCourseResult(courseState.result));
}

function selectCourseQuestions(mode, history) {
  const previous = new Set(history || []);
  function pick(topic, type, count) {
    const pool = courseBank.filter(question => question.topic === topic && question.type === type);
    const fresh = shuffleCourse(pool.filter(question => !previous.has(question.id)));
    const repeated = shuffleCourse(pool.filter(question => previous.has(question.id)));
    return fresh.concat(repeated).slice(0, count);
  }
  if (mode !== 'mixed') {
    return ['choice', 'tiles', 'write'].flatMap(type => pick(mode, type, 2));
  }
  const topics = shuffleCourse(courseTopics);
  return shuffleCourse(Array.from({length: 9}, (_, index) =>
    pick(topics[index % topics.length].id, ['choice', 'tiles', 'write'][index % 3], 1)[0]));
}

function beginCourse(mode) {
  const topic = courseTopics.find(item => item.id === mode);
  const selected = selectCourseQuestions(mode, courseState.history[mode]);
  session = { mode, title: topic ? topic.title : 'Ситуации и истории',
    questions: selected, answers: [], startedAt: Date.now(),
    practiceTopics: topic ? [topic] : shuffleCourse(courseTopics).slice(0, 2) };
  courseState.history[mode] = selected.map(question => question.id);
  persistCourse();
  if (!topic) { showCourseQuestion(); return; }
  frameCourse(topic.title, '<p>' + topic.guide + '</p><p>В уроке будут и задания на различение конструкций. Обращайте внимание на ситуацию.</p><div class="actions"><button class="primary" id="begin-questions">К заданиям</button><button id="menu">К выбору урока</button></div>');
  bindCourse('begin-questions', showCourseQuestion);
  bindCourse('menu', showCourseHome);
}

function normalizeCourse(text) {
  return text.toLowerCase().replace(/[’‘]/g, "'")
    .replace(/\b(i'm)\b/g, 'i am')
    .replace(/\b(isn't)\b/g, 'is not').replace(/\b(aren't)\b/g, 'are not')
    .replace(/\b(wasn't)\b/g, 'was not').replace(/\b(weren't)\b/g, 'were not')
    .replace(/\b(don't)\b/g, 'do not').replace(/\b(doesn't)\b/g, 'does not')
    .replace(/\b(didn't)\b/g, 'did not').replace(/\b(haven't)\b/g, 'have not')
    .replace(/\b(hasn't)\b/g, 'has not').replace(/\b(hadn't)\b/g, 'had not')
    .replace(/\b(i|you|we|they)'ve\b/g, '$1 have')
    .replace(/\b(he|she|it)'s\s+(?=already|sent|been|finished)/g, '$1 has ')
    .replace(/\b(he|she|it)'s\b/g, '$1 is')
    .replace(/\b(i|you|we|they|he|she|it)'d\b/g, '$1 had')
    .replace(/[.,!?]/g, '').replace(/\s+/g, ' ').trim();
}

function acceptedCourseAnswers(question) {
  const main = normalizeCourse(question.answer);
  const accepted = [main];
  const time = main.match(/ (now|yesterday|this week|last year|last month|on mondays|on sundays)$/);
  if (time) accepted.push(time[1] + ' ' + main.slice(0, -time[0].length));
  if (main.includes(' usually ')) {
    accepted.push('usually ' + main.replace(' usually ', ' '));
    accepted.push(main.replace(' usually ', ' ') + ' usually');
  }
  return accepted;
}

function isCourseCorrect(question, answer) {
  return acceptedCourseAnswers(question).includes(normalizeCourse(answer));
}

function showCourseQuestion() {
  const question = session.questions[session.answers.length];
  currentAnswer = '';
  answered = false;
  const typeNames = {choice:'Выберите перевод', tiles:'Соберите перевод', write:'Напишите перевод'};
  let input;
  if (question.type === 'choice') {
    input = '<div class="options">' + shuffleCourse([question.answer, ...question.distractors]).map(option =>
      '<button lang="en" data-choice="' + escapeText(option) + '">' + escapeText(option) + '</button>').join('') + '</div>';
  } else if (question.type === 'tiles') {
    input = '<p>Нажимайте на слова по порядку. Нажатие на слово в ответе возвращает его в набор.</p><p>Ваш перевод</p><div class="options" id="built" aria-label="Ваш перевод"></div><p>Доступные слова</p><div class="options" id="bank"></div><div class="actions"><button id="reset-words">Очистить</button></div>';
  } else {
    input = '<label for="written">Ваш ответ по-английски</label><input type="text" id="written" lang="en" autocomplete="off" spellcheck="false"><p class="progress">Учитываются сокращения, регистр, знаки препинания и несколько вариантов положения обстоятельства времени. Следуйте опорным словам.</p>';
  }
  frameCourse('Задание ' + (session.answers.length + 1) + ' из ' + session.questions.length,
    '<p class="progress">' + typeNames[question.type] + '</p><p><strong>' + escapeText(session.mode === 'mixed' ? question.prompt.replace(/ с Present Perfect| с Past Perfect для более раннего события| Используйте Present Perfect\./g, '') : question.prompt) + '</strong></p>' + input +
    '<div id="course-feedback" aria-live="polite"></div><div class="actions"><button class="primary" id="check-course" disabled>Проверить</button><button id="leave-course">К выбору урока</button></div>');
  const check = document.getElementById('check-course');
  if (question.type === 'choice') {
    coursePanel.querySelectorAll('[data-choice]').forEach(button => button.addEventListener('click', () => {
      if (answered) return;
      currentAnswer = button.dataset.choice;
      check.disabled = false;
      coursePanel.querySelectorAll('[data-choice]').forEach(item => {
        item.classList.toggle('correct', item === button);
        item.setAttribute('aria-pressed', item === button ? 'true' : 'false');
      });
    }));
  } else if (question.type === 'tiles') {
    const words = shuffleCourse(question.answer.replace(/[.,!?]/g, '').split(' ').map(word => word === 'I' ? word : word.toLowerCase()).concat(question.distractors));
    const selected = [];
    const tiles = words.map((word, index) => {
      const tile = document.createElement('button');
      tile.lang = 'en';
      tile.textContent = word;
      tile.addEventListener('click', () => {
        if (answered) return;
        const position = selected.indexOf(index);
        if (position < 0) selected.push(index);
        else selected.splice(position, 1);
        renderTiles();
        tile.focus();
      });
      return tile;
    });
    function renderTiles() {
      document.getElementById('built').replaceChildren(...selected.map(index => tiles[index]));
      document.getElementById('bank').replaceChildren(...tiles.filter((_, index) => !selected.includes(index)));
      currentAnswer = selected.map(index => words[index]).join(' ');
      check.disabled = !currentAnswer;
    }
    bindCourse('reset-words', () => { if (!answered) { selected.length = 0; renderTiles(); } });
    renderTiles();
  } else {
    const written = document.getElementById('written');
    written.addEventListener('input', () => { currentAnswer = written.value.trim(); check.disabled = !currentAnswer; });
    written.addEventListener('keydown', event => { if (event.key === 'Enter' && currentAnswer && !answered) check.click(); });
  }
  check.onclick = () => {
    if (answered) {
      if (session.answers.length === session.questions.length) showCoursePractice();
      else showCourseQuestion();
      return;
    }
    if (!currentAnswer) return;
    answered = true;
    const correct = isCourseCorrect(question, currentAnswer);
    session.answers.push({ text: currentAnswer, correct });
    const feedback = document.getElementById('course-feedback');
    feedback.innerHTML = '<div class="feedback"><strong>' + (correct ? 'Верно' : 'Сверьте с образцом') + '</strong><p>Ваш ответ — <span lang="en">' + escapeText(currentAnswer) + '</span></p>' +
      (!correct ? '<p>Образец — <span lang="en">' + escapeText(question.answer) + '</span></p>' : '') +
      '<p>' + escapeText(question.explanation) + '</p></div>';
    coursePanel.querySelectorAll('[data-choice], #built button, #bank button, #reset-words, #written').forEach(element => { element.disabled = true; });
    check.textContent = session.answers.length === session.questions.length ? 'К своим фразам' : 'Дальше';
    check.focus();
  };
  bindCourse('leave-course', showCourseHome);
}

function showCoursePractice() {
  const tasks = session.mode === 'mixed'
    ? session.practiceTopics.map(topic => ({prompt: topic.practice[0], sample: topic.samples[0], guide: topic.guide}))
    : session.practiceTopics[0].practice.map((prompt, index) => ({prompt, sample:session.practiceTopics[0].samples[index], guide:session.practiceTopics[0].guide}));
  session.tasks = tasks;
  frameCourse('Примените к своей жизни',
    '<p>Напишите свои фразы. После ввода откройте образцы, найдите смысловое различие и исправьте форму, если нужно. Эти ответы сохранятся в результате для самопроверки.</p>' +
    tasks.map((task, index) => '<label for="own-' + index + '">' + (index + 1) + '. ' + task.prompt + '</label><textarea id="own-' + index + '" lang="en"></textarea><details><summary>Разбор и образец</summary><p lang="en">' + task.sample + '</p><p>' + task.guide + '</p></details>').join('') +
    '<div class="actions"><button class="primary" id="finish-course">Посмотреть результат</button></div>');
  bindCourse('finish-course', () => {
    const result = { mode:session.mode, title:session.title, questions:session.questions,
      answers:session.answers, practice:tasks.map((task, index) => ({...task, text:document.getElementById('own-' + index).value.trim()})),
      seconds:Math.max(1, Math.round((Date.now() - session.startedAt) / 1000)), completedAt: new Date().toISOString() };
    courseState.result = result;
    persistCourse();
    showCourseResult(result);
  });
}

function showCourseResult(result) {
  const score = result.answers.filter(answer => answer.correct).length;
  frameCourse(result.title + ' · Результат',
    '<p><strong>' + score + ' из ' + result.answers.length + ' правильных · ' + Math.round(score / result.answers.length * 100) + '% · ' + Math.floor(result.seconds / 60) + ' мин ' + result.seconds % 60 + ' сек</strong></p>' +
    '<p>' + escapeText(new Date(result.completedAt).toLocaleString('ru-RU')) + '</p><h3>Ваши ответы и разбор</h3><ol>' +
    result.questions.map((question, index) => '<li><strong>' + escapeText(question.prompt) + '</strong><p lang="en">' + escapeText(result.answers[index].text) + '</p><p>' + (result.answers[index].correct ? 'Верно.' : 'Образец — ' + escapeText(question.answer)) + ' ' + escapeText(question.explanation) + '</p></li>').join('') +
    '</ol><h3>Свои фразы · самопроверка</h3>' +
    result.practice.map(task => '<p><strong>' + escapeText(task.prompt) + '</strong></p><p lang="en">' + escapeText(task.text || '—') + '</p><p>Образец — <span lang="en">' + escapeText(task.sample) + '</span></p><p>' + escapeText(task.guide) + '</p>').join('') +
    '<p>Через день или два попробуйте передать те же ситуации с другими действиями без подсказок. Затем откройте смешанную практику.</p>' +
    '<div class="actions"><button id="retry-course" class="primary">Новый набор</button><button id="mixed-course">Смешанная практика</button><button id="menu-course">Выбрать урок</button><button id="print-course">PDF / Печать</button></div>');
  bindCourse('retry-course', () => beginCourse(result.mode));
  bindCourse('mixed-course', () => beginCourse('mixed'));
  bindCourse('menu-course', showCourseHome);
  bindCourse('print-course', () => window.print());
}

showCourseHome();

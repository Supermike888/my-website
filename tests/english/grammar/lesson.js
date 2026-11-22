const questions = [
  {
    prompt: 'I usually ___ from home on Fridays.',
    options: ['work', 'am working'],
    correct: 0,
    explanation: 'Здесь речь о привычке: по пятницам я обычно работаю дома. Для регулярного действия подходит Present Simple.'
  },
  {
    prompt: 'Can I call you back? I ___ to a client.',
    options: ['talk', 'am talking'],
    correct: 1,
    explanation: 'Разговор уже идёт, поэтому человек просит перезвонить. Для действия в процессе подходит Present Continuous.'
  },
  {
    prompt: 'Our office is being renovated, so we ___ from home this week.',
    options: ['are working', 'work'],
    correct: 0,
    explanation: 'Работа из дома — временная ситуация на эту неделю. Она не обязана происходить ровно в момент разговора.'
  },
  {
    prompt: 'Maya ___ the sales figures every Monday before the team meeting.',
    options: ['is checking', 'checks'],
    correct: 1,
    explanation: 'Это регулярное действие. В Present Simple с Maya (she) к глаголу добавляем -s: checks.'
  },
  {
    prompt: 'Как сказать «обычно я езжу на работу на автобусе, но на этой неделе хожу пешком»?',
    options: [
      'I usually take the bus, but this week I’m walking to work.',
      'I’m usually taking the bus, but this week I walk to work.'
    ],
    correct: 0,
    explanation: 'I take the bus описывает привычку. I’m walking to work описывает временное изменение, даже если ты сейчас сидишь дома.'
  },
  {
    prompt: 'Она обычно читает короткие статьи.',
    words: ['short', 'reads', 'they', 'articles', 'usually', 'writes', 'she', 'long', 'books', 'read'],
    translations: ['she usually reads short articles', 'usually she reads short articles', 'she reads short articles usually'],
    explanation: 'She — «она», usually — «обычно», short articles — «короткие статьи». Reads означает «читает», а writes — «пишет». В Present Simple с she нужна форма reads, с окончанием -s.'
  },
  {
    prompt: 'Сейчас мы пишем отчёт.',
    words: ['report', 'writing', 'now', 'we', 'letter', 'are', 'reading', 'a', 'write', 'is', 'often'],
    translations: ['we are writing a report now', 'now we are writing a report', 'we are now writing a report'],
    explanation: 'Writing — «пишем», reading — «читаем». A report — «отчёт», a letter — «письмо». С we действие в процессе выражаем формой are writing. Now передаёт «сейчас».'
  },
  {
    prompt: 'Как сказать «обычно она готовит дома, но сегодня ужинает в ресторане»?',
    options: [
      'She usually cooks at home, but today she is having dinner at a restaurant.',
      'She usually cook at home, but today she has dinner at a restaurant.'
    ],
    correct: 0,
    explanation: 'Привычка выражена формой cooks: с she добавляем -s. Сегодняшнее изменение выражено формой is having dinner. Have dinner означает «ужинать».'
  },
  {
    prompt: 'Сейчас он читает интересную книгу.',
    words: ['boring', 'she', 'book', 'reading', 'now', 'an', 'he', 'writes', 'interesting', 'is', 'read', 'are'],
    translations: ['he is reading an interesting book now', 'now he is reading an interesting book', 'he is now reading an interesting book'],
    explanation: 'He — «он», interesting — «интересную», book — «книгу». Reading означает «читает», writes — «пишет». Для действия сейчас с he нужна конструкция is reading. Перед interesting нужен артикль an.'
  }
];

const alternatives = [
  {
    "prompt": "My brother usually ___ dinner at home.",
    "options": [
      "cooks",
      "is cooking"
    ],
    "correct": 0,
    "explanation": "Usually обозначает привычку. С my brother (he) нужна форма cooks."
  },
  {
    "prompt": "Please be quiet. The baby ___.",
    "options": [
      "sleeps",
      "is sleeping"
    ],
    "correct": 1,
    "explanation": "Просьба соблюдать тишину относится к происходящему сейчас: is sleeping."
  },
  {
    "prompt": "Our kitchen is being repaired, so we ___ out this week.",
    "options": [
      "are eating",
      "eat"
    ],
    "correct": 0,
    "explanation": "На этой неделе мы временно едим вне дома. Для временной ситуации подходит are eating."
  },
  {
    "prompt": "Anna ___ her parents every Sunday.",
    "options": [
      "is visiting",
      "visits"
    ],
    "correct": 1,
    "explanation": "Every Sunday описывает регулярное действие. С Anna (she) используем visits."
  },
  {
    "prompt": "Как сказать «обычно я пью кофе, но сегодня пью чай»?",
    "options": [
      "I usually drink coffee, but today I’m drinking tea.",
      "I usually drinking coffee, but today I drink tea."
    ],
    "correct": 0,
    "explanation": "Drink описывает привычку с I. Am drinking описывает сегодняшнее изменение. Coffee — кофе, tea — чай."
  },
  {
    "prompt": "Он обычно покупает свежий хлеб.",
    "words": [
      "fresh",
      "buys",
      "she",
      "bread",
      "usually",
      "sells",
      "he",
      "old",
      "buy"
    ],
    "translations": [
      "he usually buys fresh bread",
      "usually he buys fresh bread",
      "he buys fresh bread usually"
    ],
    "explanation": "He — он, buys — покупает, fresh bread — свежий хлеб. Sells означает «продаёт». С he в Present Simple нужна форма buys."
  },
  {
    "prompt": "Сейчас они готовят ужин.",
    "words": [
      "dinner",
      "cooking",
      "now",
      "they",
      "breakfast",
      "are",
      "eating",
      "cook",
      "is",
      "often"
    ],
    "translations": [
      "they are cooking dinner now",
      "now they are cooking dinner",
      "they are now cooking dinner"
    ],
    "explanation": "They — они. Cooking dinner означает «готовят ужин», eating — «едят», breakfast — «завтрак». Для действия сейчас используем are cooking."
  },
  {
    "prompt": "Как сказать «обычно он работает дома, но на этой неделе работает в офисе»?",
    "options": [
      "He usually works at home, but this week he is working in the office.",
      "He usually work at home, but this week he working in the office."
    ],
    "correct": 0,
    "explanation": "С he привычка выражена формой works. Для временного изменения нужны is и working."
  },
  {
    "prompt": "Сейчас она читает длинное письмо.",
    "words": [
      "short",
      "he",
      "letter",
      "reading",
      "now",
      "a",
      "she",
      "writes",
      "long",
      "is",
      "read",
      "are"
    ],
    "translations": [
      "she is reading a long letter now",
      "now she is reading a long letter",
      "she is now reading a long letter"
    ],
    "explanation": "She — она, long letter — длинное письмо. Reading — читает, writes — пишет. С she нужна форма is reading."
  }
];
const extraAlternatives = [
  {
    "prompt": "We usually ___ lunch at noon.",
    "options": [
      "have",
      "are having"
    ],
    "correct": 0,
    "explanation": "Обычный распорядок описываем формой have в Present Simple."
  },
  {
    "prompt": "Look! The dog ___ in the garden.",
    "options": [
      "runs",
      "is running"
    ],
    "correct": 1,
    "explanation": "Look обращает внимание на действие сейчас. Используем is running."
  },
  {
    "prompt": "My car is at the garage, so I ___ the bus this week.",
    "options": [
      "am taking",
      "take"
    ],
    "correct": 0,
    "explanation": "Поездки на автобусе — временное изменение на эту неделю. Используем am taking."
  },
  {
    "prompt": "Tom ___ English every evening.",
    "options": [
      "is studying",
      "studies"
    ],
    "correct": 1,
    "explanation": "Every evening описывает привычку. С Tom (he) study превращается в studies."
  },
  {
    "prompt": "Как сказать «обычно я читаю вечером, но сегодня смотрю фильм»?",
    "options": [
      "I usually read in the evening, but today I’m watching a film.",
      "I usually am reading in the evening, but today I watching a film."
    ],
    "correct": 0,
    "explanation": "Read описывает привычку. Для сегодняшнего действия нужны am и watching. Watch a film — смотреть фильм."
  },
  {
    "prompt": "Она обычно пьёт горячий чай.",
    "words": [
      "cold",
      "drinks",
      "they",
      "tea",
      "usually",
      "eats",
      "she",
      "hot",
      "drink"
    ],
    "translations": [
      "she usually drinks hot tea",
      "usually she drinks hot tea",
      "she drinks hot tea usually"
    ],
    "explanation": "She — она, drinks — пьёт, hot tea — горячий чай. Eats означает «ест». С she нужна форма drinks."
  },
  {
    "prompt": "Сейчас мы смотрим фильм.",
    "words": [
      "film",
      "watching",
      "now",
      "we",
      "book",
      "are",
      "reading",
      "a",
      "watch",
      "is",
      "often"
    ],
    "translations": [
      "we are watching a film now",
      "now we are watching a film",
      "we are now watching a film"
    ],
    "explanation": "We — мы. Watching a film — смотрим фильм. Reading означает «читаем», book — «книга». Используем are watching."
  },
  {
    "prompt": "Как сказать «обычно она ходит пешком на работу, но сегодня едет на автобусе»?",
    "options": [
      "She usually walks to work, but today she is taking the bus.",
      "She usually walk to work, but today she taking the bus."
    ],
    "correct": 0,
    "explanation": "Walks описывает привычку с she. Is taking the bus описывает сегодняшнее изменение."
  },
  {
    "prompt": "Сейчас он пишет короткое письмо.",
    "words": [
      "long",
      "she",
      "letter",
      "writing",
      "now",
      "a",
      "he",
      "reads",
      "short",
      "is",
      "write",
      "are"
    ],
    "translations": [
      "he is writing a short letter now",
      "now he is writing a short letter",
      "he is now writing a short letter"
    ],
    "explanation": "He — он, short letter — короткое письмо. Writing означает «пишет», reads — «читает». Используем is writing."
  }
];

const panel = document.getElementById('lesson-panel');
const storageKey = 'english-grammar-usually-and-today-v1';
let savedResult;
try {
  savedResult = JSON.parse(localStorage.getItem(storageKey));
} catch {
  // The lesson also works when browser storage is unavailable.
}


const questionBank = questions.map((question, index) => [question, alternatives[index], extraAlternatives[index]]);
let activeQuestions = questions;
let previousVariants = [];
try {
  previousVariants = JSON.parse(localStorage.getItem(storageKey + "-variants")) || [];
} catch {}

let answers = [];
let startedAt;

function show(title, content, moveFocus = true) {
  panel.innerHTML = `<h2 tabindex="-1">${title}</h2>${content}`;
  if (moveFocus) panel.querySelector('h2').focus();
}

function onClick(id, handler) {
  document.getElementById(id).addEventListener('click', handler);
}

function showHome() {
  show('Что будем делать', `
    <p><a href="course.html">Все направления и смешанная практика →</a></p>
    <p>В уроке девять заданий: шесть вопросов с выбором ответа и три перевода из слов. Затем два упражнения со своими фразами. После каждого ответа будет разбор.</p>
    <p>Банк содержит 27 вопросов. При каждом запуске выбираются девять: по одному на каждую учебную задачу. Каждый вопрос будет отличаться от предыдущего прохождения. Последний результат можно открыть отдельно.</p>
    <div class="actions">
      <button class="primary" id="start">Начать урок</button>
      ${savedResult ? '<button id="saved">Последний результат</button>' : ''}
    </div>`, false);
  onClick('start', start);
  if (savedResult) onClick('saved', () => showResult(savedResult));
}

function start() {
  activeQuestions = questionBank.map((variants, index) => {
    const available = variants.map((_, variant) => variant).filter(variant => variant !== previousVariants[index]);
    const chosen = available[Math.floor(Math.random() * available.length)];
    previousVariants[index] = chosen;
    return variants[chosen];
  });
  try {
    localStorage.setItem(storageKey + "-variants", JSON.stringify(previousVariants));
  } catch {}
  answers = [];
  startedAt = Date.now();
  showQuestion();
}

function showQuestion() {
  const question = activeQuestions[answers.length];
  if (question.words) {
    showTranslation(question);
    return;
  }
  show(`Вопрос ${answers.length + 1} из ${activeQuestions.length}`, `
    <p><strong ${answers.length < 4 ? 'lang="en"' : ''}>${question.prompt}</strong></p>
    <div class="options">${question.options.map((option, index) =>
      `<button type="button" lang="en" data-answer="${index}">${option}</button>`
    ).join('')}</div>
    <div id="feedback" aria-live="polite"></div>
    <div class="actions"><button class="primary" id="next" disabled>Дальше</button></div>`);

  const buttons = panel.querySelectorAll('[data-answer]');
  const next = document.getElementById('next');
  buttons.forEach((button, index) => button.addEventListener('click', () => {
    answers.push(index);
    buttons.forEach(option => { option.disabled = true; });
    buttons[question.correct].classList.add('correct');
    if (index !== question.correct) button.classList.add('incorrect');
    document.getElementById('feedback').innerHTML = `
      <div class="feedback"><strong>${index === question.correct ? 'Верно' : 'Подходит другой вариант'}</strong>
      <p>Ответ — <span lang="en">${question.options[question.correct]}</span>. ${question.explanation}</p></div>`;
    next.disabled = false;
    next.focus();
  }));
  onClick('next', () => answers.length === activeQuestions.length ? showPractice() : showQuestion());
}

function formatTranslation(text) {
  return text.charAt(0).toUpperCase() + text.slice(1) + '.';
}

function showTranslation(question) {
  show(`Задание ${answers.length + 1} из ${activeQuestions.length} · Соберите перевод`, `
    <p><strong>${question.prompt}</strong></p>
    <p>Нажимайте на слова в нужном порядке. Нажмите на слово в собранной фразе, чтобы убрать его.</p>
    <p>Ваш перевод</p>
    <div class="options" id="sentence" aria-label="Ваш перевод"></div>
    <p>Доступные слова</p>
    <div class="options" id="words" aria-label="Доступные слова"></div>
    <div id="feedback" aria-live="polite"></div>
    <div class="actions"><button id="clear" disabled>Очистить</button>
      <button class="primary" id="check" disabled>Проверить перевод</button></div>`);
  const sentence = document.getElementById('sentence');
  const bank = document.getElementById('words');
  const clear = document.getElementById('clear');
  const check = document.getElementById('check');
  const selected = [];
  const tiles = question.words.map((word, index) => {
    const button = document.createElement('button');
    button.lang = 'en';
    button.textContent = word;
    button.addEventListener('click', () => {
      const position = selected.indexOf(index);
      if (position < 0) selected.push(index);
      else selected.splice(position, 1);
      renderWords();
      button.focus();
    });
    return button;
  });

  function renderWords() {
    sentence.replaceChildren(...selected.map(index => tiles[index]));
    bank.replaceChildren(...tiles.filter((_, index) => !selected.includes(index)));
    clear.disabled = check.disabled = selected.length === 0;
  }

  renderWords();
  onClick('clear', () => {
    selected.length = 0;
    renderWords();
    tiles[0].focus();
  });
  check.onclick = () => {
    const answer = selected.map(index => question.words[index]).join(' ');
    answers.push(answer);
    const correct = isCorrect(question, answer);
    tiles.forEach(button => { button.disabled = true; });
    clear.disabled = true;
    check.textContent = answers.length === activeQuestions.length ? 'К практике' : 'Дальше';
    document.getElementById('feedback').innerHTML = `<div class="feedback">
      <strong>${correct ? 'Верно' : 'Сверьте перевод'}</strong>
      <p lang="en">${formatTranslation(correct ? answer : question.translations[0])}</p>
      <p>${question.explanation}</p></div>`;
    check.onclick = () => answers.length === activeQuestions.length ? showPractice() : showQuestion();
  };
}

function isCorrect(question, answer) {
  return question.translations ? question.translations.includes(answer) : question.correct === answer;
}

function showPractice() {
  show('Теперь о себе', `
    <p><strong>Present Simple</strong> описывает привычку: <span lang="en">I usually start work at nine.</span><br>
    <strong>Present Continuous</strong> описывает действие в процессе или временную ситуацию: <span lang="en">I’m starting later this week.</span></p>
    <label for="practice">Напишите два английских предложения, каждое с новой строки. Первое — про работу или учёбу, второе — про свободное время. В каждом используйте схему <span lang="en">I usually …, but this week I’m …</span>. В результате вы увидите свои фразы и подсказки по форме глагола. Если делаете упражнение устно, оставьте поле пустым.</label>
    <textarea id="practice" lang="en" placeholder="I usually …, but this week I’m …"></textarea>
    <details>
      <summary>Сверить с образцами</summary>
      <p lang="en">I usually start work at nine, but this week I’m starting at ten.<br>
      I usually go to the gym after work, but this week I’m going for a walk instead.</p>
      <p>Проверьте, что привычка выражена обычной формой глагола, а временное изменение — формой <span lang="en">am/is/are + глагол с -ing</span>. Если заметили ошибку, исправьте фразу и произнесите её целиком.</p>
    </details>
    <h3>Ещё одна ситуация · дорога и транспорт</h3>
    <label for="practice-travel">Напишите ещё одно предложение о том, как вы обычно добираетесь до работы, учёбы или магазина и что сегодня изменилось. Используйте ту же схему <span lang="en">I usually …, but today I’m …</span>.</label>
    <textarea id="practice-travel" lang="en" placeholder="I usually …, but today I’m …"></textarea>
    <details><summary>Посмотреть пример про транспорт</summary>
      <p lang="en">I usually take the bus to work, but today I’m walking to work.</p>
      <p>Take the bus — ездить на автобусе. I’m walking — иду пешком сегодня.</p>
    </details>
    <div class="actions"><button class="primary" id="finish">Посмотреть результат</button></div>`);
  onClick('finish', finish);
}

function finish() {
  const practice = [
    document.getElementById('practice').value.trim(),
    document.getElementById('practice-travel').value.trim()
  ].filter(Boolean).join('\n');
  savedResult = { answers, practice, questions: activeQuestions, seconds: Math.max(1, Math.round((Date.now() - startedAt) / 1000)) };
  try {
    localStorage.setItem(storageKey, JSON.stringify(savedResult));
  } catch {
    // The current result is still available for review and printing.
  }
  showResult(savedResult);
}

function reviewPractice(line) {
  const parts = line.replace(/[’‘]/g, "'").match(/^I\s+usually\s+(.+?)\s*,?\s+but\s+(?:this week|today)\s+(.+)/i);
  if (!parts) return 'Сверьте структуру: сначала привычка с I usually, затем временное изменение с but this week или but today.';
  const [, habit, change] = parts;
  const notes = [];
  if (/^(?:am\s+(?:not\s+)?\w+ing\b|\w+ing\b)/i.test(habit)) {
    notes.push('В части про привычку проверьте форму после I usually: для обычного действия используйте Present Simple.');
  }
  if (!/^I(?:'m|\s+am)\s+(?:not\s+)?[a-z]+ing\b/i.test(change)) {
    notes.push('В части про временное изменение проверьте, есть ли I’m или I am и глагол на -ing.');
  }
  return notes.join(' ') || 'Вторая часть соответствует схеме I’m / I am + форма на -ing. В первой сверьте, что после I usually стоит начальная форма глагола.';
}

function appendPracticeReview(practice) {
  if (!practice) return;
  const section = document.getElementById('practice-review');
  section.innerHTML = '<h3>Ваши фразы · проверка по шаблону</h3><p>Подсказки проверяют форму по схеме упражнения. Смысл, лексику и остальную грамматику проверьте при чтении.</p>';
  const list = document.createElement('ol');
  for (const line of practice.split(/\r?\n/).map(line => line.trim()).filter(Boolean)) {
    const item = document.createElement('li');
    const quote = document.createElement('strong');
    quote.lang = 'en';
    quote.textContent = line;
    item.append(quote, document.createElement('br'), reviewPractice(line));
    list.append(item);
  }
  section.append(list);
}

function showResult(result) {
  const attempted = (result.questions || questions).slice(0, result.answers.length);
  const score = attempted.filter((question, index) => isCorrect(question, result.answers[index])).length;
  const percent = Math.round(score / attempted.length * 100);
  const minutes = Math.floor(result.seconds / 60);
  show('Обычно и сегодня · Результат', `
    <p><strong>${score} из ${attempted.length} правильных · ${percent}% · ${minutes} мин ${result.seconds % 60} сек</strong></p>
    <p>Итог учитывает задания теста. Свои фразы разбираются отдельно.</p>
    <h3>Ответы и разбор</h3>
    <ol>${attempted.map((question, index) => {
      const answer = result.answers[index];
      const chosen = question.options ? question.options[answer] : formatTranslation(
        answer.split(' ').filter(word => question.words.includes(word)).join(' ')
      );
      const expected = question.options ? question.options[question.correct] : formatTranslation(question.translations[0]);
      return `
      <li><strong ${index < 4 ? 'lang="en"' : ''}>${question.prompt}</strong><br>
      Ваш ответ — <span lang="en">${chosen}</span><br>
      ${isCorrect(question, answer) ? 'Верно.' : `Подходящий вариант — <span lang="en">${expected}</span><br>`}
      ${question.explanation}</li>`;
    }).join('')}</ol>
    <div id="practice-review"></div>
    <h3>Короткое повторение</h3>
    <p>Через пару дней, до повторного прохождения, расскажите без подсказок, как вы обычно проводите вечер и что на этой неделе делаете иначе. Придумайте новые примеры.</p>
    <div class="actions">
      <button class="primary" id="retry">Пройти ещё раз</button>
      <button id="print">Сохранить PDF / Печать</button>
    </div>`);
  appendPracticeReview(result.practice);
  onClick('retry', start);
  onClick('print', () => window.print());
}

showHome();

// Each topic has three variants of each exercise type.
// Rows contain context, a correct sentence, distractors, and the explanation.
const courseTopics = [
  {
    id: 'daily', title: 'Привычки и перемены',
    intro: 'Сравните обычный распорядок с действием сейчас или временным изменением.',
    guide: 'Present Simple описывает привычки: I work, she works. Present Continuous описывает процесс сейчас и временные ситуации: am/is/are + -ing. Вопросы: Do you work? Are you working? Отрицания: don’t/doesn’t + начальная форма, am/is/are not + -ing.',
    practice: ['Расскажите, как обычно проводите утро и что сегодня делаете иначе.', 'Спросите знакомого, чем он занят сейчас.'],
    samples: ['I usually drink coffee, but today I am drinking tea.', 'What are you doing now?'],
    rows: [
      ['По понедельникам она обычно работает дома. Выберите перевод.', 'She usually works at home on Mondays.', ['She usually working at home on Mondays.', 'She usually work at home on Mondays.'], 'Привычка — Present Simple. С she нужна форма works.'],
      ['Сейчас я разговариваю с клиентом. Выберите перевод.', 'I am talking to a client now.', ['I talk to a client now.', 'I talking to a client now.'], 'Разговор в процессе — Present Continuous, am talking.'],
      ['Сейчас они не спят. Выберите перевод.', 'They are not sleeping now.', ['They do not sleeping now.', 'They is not sleeping now.'], 'Отрицание в Present Continuous — are not sleeping.'],
      ['Она обычно читает короткие статьи.', 'She usually reads short articles.', ['writes', 'long', 'they', 'read'], 'Reads — читает, writes — пишет. Short articles — короткие статьи. С she добавляем -s.'],
      ['Сейчас мы пишем отчёт.', 'We are writing a report now.', ['reading', 'letter', 'is', 'write'], 'Writing — пишем, reading — читаем. С we используем are writing.'],
      ['На этой неделе я работаю дома.', 'I am working at home this week.', ['works', 'office', 'is', 'worked'], 'Временное изменение на этой неделе — am working, даже если работа не идёт в момент разговора.'],
      ['Переведите с опорой на слова. Она сейчас готовит ужин. Используйте she, cook, dinner, now.', 'She is cooking dinner now.', [], 'Для действия сейчас с she нужна форма is cooking.'],
      ['Переведите с опорой на слова. Я не работаю по воскресеньям. Используйте I, work, on Sundays.', 'I do not work on Sundays.', [], 'Регулярное действие с I отрицаем через do not + work.'],
      ['Спросите о привычке. Ты работаешь дома? Используйте you, work, at home.', 'Do you work at home?', [], 'Вопрос о привычке — Do you + начальная форма.']
    ]
  },
  {
    id: 'yesterday', title: 'Вчерашний день',
    intro: 'Расскажите о законченных событиях и задайте вопросы о прошлом.',
    guide: 'Past Simple описывает законченные события в прошлом. Утверждение: worked или went. Вопрос: Did you go? Отрицание: I did not go. После did и did not используйте начальную форму. Для be действуют was/were: Was she at home?',
    practice: ['Напишите, куда вы ходили вчера и что сделали.', 'Задайте вопрос о прошедших выходных и напишите отрицательный ответ.'],
    samples: ['I went to the shop yesterday and bought some bread.', 'Did you work last weekend? I did not work last weekend.'],
    rows: [
      ['Вчера она ходила в банк. Выберите перевод.', 'She went to the bank yesterday.', ['She has gone to the bank yesterday.', 'She goes to the bank yesterday.'], 'Yesterday задаёт законченное прошлое. Go → went, используем Past Simple.'],
      ['Он не отправил письмо вчера. Выберите перевод.', 'He did not send the letter yesterday.', ['He did not sent the letter yesterday.', 'He has not sent the letter yesterday.'], 'После did not нужна начальная форма send. Время вчера завершилось.'],
      ['Вы вчера закончили отчёт? Выберите перевод.', 'Did you finish the report yesterday?', ['Did you finished the report yesterday?', 'Have you finished the report yesterday?'], 'Вопрос с yesterday — Did you finish? После did окончание -ed убираем.'],
      ['Вчера мы купили новую машину.', 'We bought a new car yesterday.', ['buy', 'old', 'they', 'sold'], 'Buy → bought. New car — новая машина, sold означает «продали».'],
      ['Вчера она не читала книгу.', 'She did not read the book yesterday.', ['reads', 'we', 'write', 'does'], 'Отрицание в прошлом — did not + read. Здесь read — начальная форма.'],
      ['Ты позвонил ему вчера?', 'Did you call him yesterday?', ['called', 'her', 'does', 'they'], 'Вопрос — Did you call? Him — ему, her — ей.'],
      ['Переведите. Я работал дома вчера. Используйте I, work, at home, yesterday.', 'I worked at home yesterday.', [], 'Правильный глагол work получает -ed в Past Simple.'],
      ['Переведите. Они были дома вчера. Используйте they, be, at home, yesterday.', 'They were at home yesterday.', [], 'Прошедшая форма be с they — were. В этом утверждении did не нужен.'],
      ['Спросите. Она ходила в офис вчера? Используйте she, go, to the office, yesterday.', 'Did she go to the office yesterday?', [], 'После did используем go, даже если в утверждении было went.']
    ]
  },
  {
    id: 'interrupted', title: 'Когда раздался звонок',
    intro: 'Различайте действие в процессе и событие, которое произошло на его фоне.',
    guide: 'Past Continuous — was/were + -ing, процесс в определённый момент прошлого. Past Simple — событие. I was reading when she called. Вопрос: Were you reading? Отрицание: I was not reading.',
    practice: ['Расскажите, что делали, когда вам кто-то позвонил.', 'Напишите, чем были заняты вчера в восемь вечера.'],
    samples: ['I was cooking dinner when my friend called.', 'I was reading a book at eight yesterday evening.'],
    rows: [
      ['Я был в процессе приготовления ужина, когда она позвонила. Выберите перевод.', 'I was cooking dinner when she called.', ['I cooked dinner when she was calling.', 'I was cook dinner when she called.'], 'Was cooking — процесс, called — событие на его фоне.'],
      ['Мы были в процессе работы, когда погас свет. Выберите перевод.', 'We were working when the lights went out.', ['We was working when the lights went out.', 'We were work when the lights went out.'], 'С we нужна форма were working. Went out описывает событие.'],
      ['Вчера в восемь он ещё спал. Выберите перевод.', 'He was still sleeping at eight yesterday.', ['He were still sleeping at eight yesterday.', 'He is still sleeping at eight yesterday.'], 'Процесс в определённый момент прошлого — was sleeping.'],
      ['Когда ты позвонил, она читала книгу.', 'She was reading a book when you called.', ['were', 'writing', 'letter', 'call'], 'Was reading — была в процессе чтения. Called — событие, звонок.'],
      ['Когда начался дождь, мы играли в футбол.', 'We were playing football when it started raining.', ['was', 'watching', 'play', 'starts'], 'Were playing описывает процесс с we. Started raining — начало дождя.'],
      ['Когда он пришёл, я не спал.', 'I was not sleeping when he arrived.', ['were', 'reading', 'arrive', 'she'], 'Was not sleeping — отрицание процесса в прошлом. Arrived — пришёл.'],
      ['Переведите. Я работал в тот момент, когда она позвонила. Используйте I, work, when, she, call.', 'I was working when she called.', [], 'Процесс — was working, звонок — called.'],
      ['Спросите о действии в процессе. Ты спал, когда я позвонил? Используйте you, sleep, when, I, call.', 'Were you sleeping when I called?', [], 'Вопрос в Past Continuous начинается с Were you sleeping.'],
      ['Переведите. Вчера в шесть они были в процессе работы. Используйте they, work, at six, yesterday.', 'They were working at six yesterday.', [], 'They требует were. Процесс в тот момент — were working.']
    ]
  },
  {
    id: 'results', title: 'Опыт и результат',
    intro: 'Различайте результат к настоящему моменту и событие в законченном прошлом.',
    guide: 'Present Perfect — have/has + третья форма: I have sent, she has gone. Он связывает прошлое с настоящим, например результат или опыт без указания законченного времени. Past Simple нужен с yesterday, last week, in 2020. Вопрос: Have you finished? Отрицание: has not finished.',
    practice: ['Напишите, что уже сделали к настоящему моменту. Затем уточните, когда это сделали.', 'Спросите об опыте поездки и отдельно о поездке в прошлом году.'],
    samples: ['I have finished the report. I finished it yesterday.', 'Have you ever been to London? Did you go to London last year?'],
    rows: [
      ['Вчера я отправил отчёт. Выберите перевод.', 'I sent the report yesterday.', ['I have sent the report yesterday.', 'I have send the report yesterday.'], 'Yesterday — законченное время, поэтому Past Simple, sent.'],
      ['Отчёт готов, его можно читать. Я уже закончил его. Выберите перевод с already и связью с настоящим.', 'I have already finished the report.', ['I have already finish the report.', 'I already finishing the report.'], 'Present Perfect выражает результат сейчас. После have нужна третья форма finished.'],
      ['Она когда-нибудь бывала в Лондоне? Выберите грамматически верный вопрос об опыте.', 'Has she ever been to London?', ['Have she ever been to London?', 'Has she ever went to London?'], 'С she используем has, третья форма be — been. Речь об опыте к настоящему моменту.'],
      ['В прошлом году мы посетили Париж.', 'We visited Paris last year.', ['have', 'visit', 'London', 'they'], 'Last year — завершённое прошлое. Нужна форма visited без have.'],
      ['Она ещё не закончила отчёт. Используйте Present Perfect.', 'She has not finished the report yet.', ['have', 'finish', 'letter', 'already'], 'Отрицание — has not finished. Yet соответствует «ещё» в таком отрицании.'],
      ['Ты когда-нибудь бывал в Риме?', 'Have you ever been to Rome?', ['has', 'went', 'Paris', 'never'], 'Вопрос об опыте — Have you ever been? Been to означает опыт посещения.'],
      ['Переведите с Present Perfect. Я уже прочитал эту книгу. Используйте I, already, read, this book.', 'I have already read this book.', [], 'Have + третья форма read. Написание read совпадает с начальной формой, произношение отличается.'],
      ['Переведите. Я прочитал эту книгу в прошлом месяце. Используйте I, read, this book, last month.', 'I read this book last month.', [], 'Last month требует Past Simple. У read вторая форма пишется так же.'],
      ['Спросите с Present Perfect. Она уже отправила письмо? Используйте she, send, the letter, yet.', 'Has she sent the letter yet?', [], 'Вопрос — Has she + sent? Send → sent → sent. Yet в вопросе означает «уже».']
    ]
  },
  {
    id: 'before', title: 'Что произошло раньше',
    intro: 'Восстановите порядок событий и посмотрите на результат к моменту в прошлом.',
    guide: 'Past Perfect — had + третья форма, действие до другого момента в прошлом. When I arrived, the meeting had already started. Начало встречи произошло раньше прихода. Past Simple описывает основные события рассказа. В вопросах Had you finished? В отрицаниях had not finished.',
    practice: ['Опишите, что уже сделали к моменту прихода другого человека.', 'Сравните два порядка событий. Встреча началась до вашего прихода и после вашего прихода.'],
    samples: ['I had finished the report before my colleague arrived.', 'When I arrived, the meeting had already started. I arrived, and then the meeting started.'],
    rows: [
      ['Я пришёл, а встреча к этому моменту уже началась. Выберите перевод.', 'When I arrived, the meeting had already started.', ['When I arrived, the meeting has already started.', 'When I arrived, the meeting had already start.'], 'Had started — начало до прихода. Arrived задаёт точку отсчёта в прошлом.'],
      ['К восьми вечера вчера она уже закончила работу. Выберите перевод.', 'She had finished her work by eight yesterday evening.', ['She has finished her work by eight yesterday evening.', 'She had finish her work by eight yesterday evening.'], 'Результат к моменту в прошлом — had finished. После had нужна третья форма.'],
      ['Письмо было отправлено им до моего звонка. Выберите предложение от лица отправителя.', 'I had sent the letter before you called.', ['I have sent the letter before you called.', 'I had send the letter before you called.'], 'Отправка предшествует звонку в прошлом — had sent.'],
      ['Когда я пришёл, она уже ушла.', 'She had already left when I arrived.', ['has', 'leave', 'he', 'arrive'], 'Left — третья форма leave. Had already left показывает, что уход был раньше прихода.'],
      ['К полудню вчера мы уже закончили отчёт.', 'We had already finished the report by noon yesterday.', ['have', 'finish', 'letter', 'today'], 'By noon yesterday — срок в прошлом. Результат к нему выражаем через had finished.'],
      ['Когда он позвонил, я ещё не закончил отчёт.', 'I had not finished the report when he called.', ['have', 'finish', 'letter', 'call'], 'К моменту звонка результат ещё не был достигнут — had not finished.'],
      ['Переведите с Past Perfect для более раннего события. Она уже ушла, когда я пришёл. Используйте she, already, leave, when, I, arrive.', 'She had already left when I arrived.', [], 'Более ранний уход — had left, более поздний приход — arrived.'],
      ['Спросите о результате к прошлому моменту. Ты уже закончил к полудню вчера? Используйте you, finish, by noon yesterday.', 'Had you finished by noon yesterday?', [], 'Вопрос о результате к прошлому моменту — Had you finished?'],
      ['Передайте последовательность без действия до прихода. Я пришёл, и затем встреча началась. Используйте I, arrive, and then, the meeting, start.', 'I arrived and then the meeting started.', [], 'Оба события последовательно происходят в Past Simple. Начало встречи следует за приходом.']
    ]
  }
];

const courseBank = courseTopics.flatMap(topic => topic.rows.map((row, index) => {
  const [prompt, answer, distractors, explanation] = row;
  return { id: topic.id + '-' + index, topic: topic.id,
    type: ['choice', 'tiles', 'write'][Math.floor(index / 3)],
    prompt, answer, distractors, explanation };
}));

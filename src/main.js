/* ============================================================
   АРХИВ ДУУ · БЮРО ОСОБЫХ ПРОЕКТОВ · ДЕЛО №2026
   Все тексты редактируются здесь: CREW / STEPS / ARCHIVE / COMPLETED /
   LOOT / QUIZ / BS_QUOTES / TICKER
   ============================================================ */

/* ---------- СЛОГАН ХИРО (выбран ВАРИАНТ 03 — детективная концепция)
   Другие варианты на выбор — замените разметку #headline и .hero-sub в index.html:

   ВАРИАНТ 01 · КОМАНДНАЯ ИСТОРИЯ
   «Нас объединил вызов. Командой нас сделали результаты.»
   Подзаголовок: «Десять человек, разные характеры и опыт.
   Одна цель — превратить сложные изменения в работающие решения.»

   ВАРИАНТ 02 · ПРОЕКТНАЯ МИССИЯ
   «Превращаем сложное в понятное. Разрозненное — в системное.
   Изменения — в результат.»
   Подзаголовок: «Мы не просто реализуем проекты.
   Мы меняем то, как работает бизнес.»
--------------------------------------------------------------- */

/* ---------- АФОРИЗМЫ ДЛЯ БЕГУЩЕЙ СТРОКИ ---------- */
const TICKER = [
  '2026-й проверял нас на прочность. Мы проверяли процессы на эффективность',
  'Нас никто не готовил к лёгкому году. Хорошо, что мы и не рассчитывали',
  'Пока Меркурий был ретроградным, мы двигались только вперёд',
];

/* ---------- ЛИЧНЫЕ ДЕЛА АГЕНТОВ ----------
   photo — опционально: './assets/crew/agent01.jpg'
   secret — секретный факт; где нет, стоит «Пока засекречен» */
const SUITS = {
  spades:   'M12 3c-2 4-6 5.5-6 9a4.5 4.5 0 0 0 3.6 4.4L8 20h8l-1.6-3.6A4.5 4.5 0 0 0 18 12c0-3.5-4-5-6-9z',
  hearts:   'M12 20s-7-4.5-8.5-9A4.6 4.6 0 0 1 12 6.5 4.6 4.6 0 0 1 20.5 11C19 15.5 12 20 12 20z',
  diamonds: 'M12 3l6 9-6 9-6-9z',
  clubs:    'M12 4a3 3 0 1 1-2.8 4A3 3 0 1 0 9 12.9 3 3 0 1 1 15 12.9 3 3 0 1 0 13.8 8 3 3 0 1 1 12 4zM11 14h2l.5 5h-3z',
};
const CREW = [
  { nick: 'Стратег',      name: 'Анна Батищева', suit: 'spades', photo: './assets/photos/strateg.jpg',
    desc: 'Видит общую картину и ведёт команду к результату.',
    mission: 'Вести команду к результату, не теряя общую картину.',
    power: 'Собираю пазл из людей, сроков и решений.',
    secret: 'Пока засекречен.' },
  { nick: 'Архитектор',   name: 'Светлана Роннова', suit: 'diamonds', photo: './assets/photos/arhitector.jpg',
    desc: 'Превращает сложные процессы в понятную модель.',
    mission: 'Проектирую процессы будущего.',
    power: 'Нахожу порядок в хаосе.',
    secret: 'Пока засекречен.' },
  { nick: 'Интегратор',   name: 'Роман Зонов', suit: 'clubs', photo: './assets/photos/integrator.png',
    desc: 'Соединяет системы, людей и решения.',
    mission: 'Связываю системы и людей в единый контур.',
    power: 'Говорю на языке и бизнеса, и ИТ.',
    secret: 'Соединяю даже то, что изначально не предполагалось соединять.' },
  { nick: 'Оптимизатор',  name: 'Ксения Нуждина', suit: 'diamonds', photo: './assets/photos/optimizator.jpg',
    desc: 'Убирает лишнее и делает процессы проще.',
    mission: 'Оставляю только то, что работает на результат.',
    power: 'Упрощаю без потери смысла.',
    secret: 'Единственный процесс, который не хочу сокращать, — это отпуск на море.' },
  { nick: 'Технолог',     name: 'Константин Хрипунов', suit: 'clubs', photo: './assets/photos/tehnolog.jpg',
    desc: 'Переводит бизнес-потребности на язык ИТ.',
    mission: 'Перевожу потребности бизнеса в требования, которые можно реализовать.',
    power: 'Понимаю и таблицу, и код.',
    secret: 'Пока засекречен.' },
  { nick: 'Навигатор',    name: 'Анастасия Старкова', suit: 'hearts', photo: './assets/photos/navigator.jpg',
    desc: 'Находит маршрут даже в самом сложном проекте.',
    mission: 'Прокладываю маршрут там, где другие видят тупик.',
    power: 'Чувствую, где проект может свернуть не туда.',
    secret: 'Пока засекречен.' },
  { nick: 'Детектив',     name: 'Елена Ткачева', suit: 'spades', photo: './assets/photos/detektid.jpg',
    desc: 'Находит причины проблем и скрытые возможности.',
    mission: 'Докапываюсь до первопричины, а не лечу симптомы.',
    power: 'Вижу то, чего не видно в отчётах.',
    secret: 'Пока засекречен.' },
  { nick: 'Методолог',    name: 'Жанна Алекаева', suit: 'clubs', photo: './assets/photos/metodolog.jpg',
    desc: 'Превращает разрозненные подходы в единую методологию.',
    mission: 'Создаю правила, по которым команда работает одинаково хорошо.',
    power: 'Вижу систему там, где другие видят набор задач.',
    secret: 'Пока засекречен.' },
  { nick: 'Визионер',     name: 'Ирина Розе', suit: 'diamonds', photo: './assets/photos/visioner.jpg',
    desc: 'Видит возможности развития на несколько шагов вперёд.',
    mission: 'Смотрю на два шага дальше текущего плана.',
    power: 'Нахожу возможности там, где другие закрывают дело.',
    secret: 'Пока засекречен.' },
  { nick: 'Переговорщик', name: 'Юлия Калинина', suit: 'hearts', photo: './assets/photos/peregovorshik.jpg',
    desc: 'Объединяет участников вокруг общего решения.',
    mission: 'Превращаю разные интересы в одно решение.',
    power: 'Договариваюсь, когда кажется, что договориться нельзя.',
    secret: 'Пока засекречен.' },
];

/* ---------- СЦЕНАРИЙ ОПЕРАЦИИ ---------- */
const STEPS = [
  { num: 'Этап 01', title: 'Разведка',    text: 'Погружаемся в бизнес-процессы, изучаем текущую модель работы, выявляем различия и точки для изменений.',
    tags: ['обследование', 'процессы'] },
  { num: 'Этап 02', title: 'Архитектура', text: 'Проектируем целевые процессы, формируем требования и создаём модель будущего решения.',
    tags: ['целевая модель', 'требования'] },
  { num: 'Этап 03', title: 'Диспозиция',  text: 'Согласовываем решения, объединяем участников, распределяем ответственность и формируем план реализации.',
    tags: ['согласование', 'план реализации'] },
  { num: 'Этап 04', title: 'Интеграция',  text: 'Сопровождаем внедрение, тестируем решения и помогаем бизнесу перейти к новой операционной модели.',
    tags: ['внедрение', 'тестирование'] },
];

/* ---------- ПРОЕКТНЫЕ РАССЛЕДОВАНИЯ ----------
   verdict — итог дела; status — текущий статус */
const ARCHIVE = [
  { no: '001', title: 'Операция «Связать несвязанное»', cat: 'Интеграции',
    proj: 'Проект «Интеграция 1С:ERP.УХ и УХ»',
    circumstances: 'Необходимость обеспечить автоматизированный обмен НСИ, заявками на оплату и данными о платежах между ERP.УХ и УХ вместо ручной передачи информации.',
    investigation: 'Проработаны интеграционные сценарии, согласованы требования к обмену данными, организовано взаимодействие ИТ-команд и функциональных заказчиков.',
    status: '8 ДЗО в контуре интеграционных работ. Реализация и тестирование продолжаются.',
    verdict: '' },
  { no: '002', title: 'Операция «Финансы под контролем»', cat: 'Финансы',
    proj: 'Проект «Бюджетный процесс, БКиДУ, РУЗ и МСФО»',
    circumstances: 'Бюджетирование, договорные процессы, РУЗ и МСФО требуют согласованных правил и единой целевой модели работы в ERP.УХ.',
    investigation: 'Обследовали процессы, выявили различия, проработали целевые сценарии и требования к автоматизации, организовали согласование решений с функциональными заказчиками и ИТ.',
    status: '',
    verdict: 'Сформирована и согласована дорожная карта развития ERP.УХ на 2027 год.' },
  { no: '003', title: 'Операция «Цифровой след»', cat: 'Налоговый мониторинг',
    proj: 'Проект «Налоговый мониторинг и документооборот»',
    circumstances: 'Подготовка ДЗО к налоговому мониторингу требует прозрачного документооборота, полноты первичных документов и корректного взаимодействия информационных систем.',
    investigation: 'Проработали категории и маршруты документов, требования к 1С:ДО и интеграциям, подготовили материалы для обучения и сценарии тестирования.',
    status: '',
    verdict: '' },
  { no: '005', title: 'Операция «Фокус на главном»', cat: 'Оптимизация',
    proj: 'Проект «Оптимизация непрофильных функций»',
    circumstances: 'Бухгалтерия выполняет непрофильные функции, которые увеличивают нагрузку и отвлекают сотрудников от основных задач.',
    investigation: 'Обследовали процессы, выявили непрофильные операции, оценили трудозатраты и подготовили предложения по перераспределению функций и оптимизации.',
    status: '',
    verdict: '' },
  { no: '006', title: 'Операция «Куда уходит время?»', cat: 'TimeSheet',
    proj: 'Проект «Таймшит бухгалтерии»',
    circumstances: 'Необходимо сделать трудозатраты бухгалтерии прозрачными и измеримыми, чтобы понимать фактическую загрузку сотрудников.',
    investigation: 'Разработали справочники работ, правила учёта времени и бизнес-функциональные требования к инструменту.',
    status: '',
    verdict: '' },
  { no: '007', title: 'Операция «Платёжный маршрут»', cat: 'Казначейство',
    proj: 'Проект «Целевой казначейский процесс»',
    circumstances: 'Необходимо определить целевую модель платёжного процесса с участием ДЗО, ОЦО и казначейства.',
    investigation: 'Изучили материалы ДЗО, проработали вопросы создания заявок на оплату, маршрутов согласования и контроля платежей.',
    status: '',
    verdict: '' },
];

/* ---------- АРХИВ ОПЕРАЦИЙ (завершённые) ---------- */
const COMPLETED = [
  { no: '04', title: 'Автономное закрытие периода',
    desc: 'Контрольные процедуры переданы из ИТ в бухгалтерию без увеличения нагрузки.',
    verdict: 'С июля 2026 года бухгалтерия самостоятельно выполняет контрольные процедуры закрытия периода в ERP.УХ.',
    status: 'Результат достигнут' },
  { no: '05', title: 'Инвентаризация учётных записей',
    desc: 'Проведён анализ более 200 учётных записей пользователей.',
    verdict: '',
    status: 'Этап выполнен' },
  { no: '06', title: 'Обследование непрофильных функций',
    desc: 'Сформирован реестр мероприятий с расчётным потенциалом оптимизации 2,65 FTE.',
    verdict: '',
    status: 'Этап выполнен' },
  { no: '07', title: 'Анализ консультационной нагрузки',
    desc: 'Проанализировано 208 обращений бизнеса к бухгалтерии, сформированы предложения по оптимизации.',
    verdict: '',
    status: 'Этап выполнен' },
];

/* ---------- ДОКАЗАТЕЛЬСТВА ---------- */
const LOOT = [
  { value: 12,   label: 'ДЗО переведены в ОЦО',                 note: 'Организационная трансформация' },
  { value: 3,    label: 'ДЗО мигрировали на ERP.УХ',            note: 'Технологическая трансформация' },
  { value: 5,    label: 'ДЗО мигрировали на типовые системы 1С ОЦО', note: '' },
  { value: 19.8, decimals: 1, suffix: ' млн ₽', label: 'Экономический эффект', note: 'По проекту РТК-ЦОД' },
];

/* ---------- ВИКТОРИНА «УГАДАЙ, КТО ЭТО СКАЗАЛ» ----------
   Демо-цитаты: замените на реальные фразы команды! */
const QUIZ = [
  { quote: '«Пока Меркурий был ретроградным, мы двигались только вперёд»',
    answer: 'Стратег', options: ['Стратег', 'Детектив', 'Визионер', 'Оптимизатор'] },
  { quote: '«Если процесс нельзя нарисовать на одной странице — он ещё не готов»',
    answer: 'Архитектор', options: ['Технолог', 'Архитектор', 'Методолог', 'Навигатор'] },
  { quote: '«Давайте сначала найдём первопричину, а уже потом чинить»',
    answer: 'Детектив', options: ['Оптимизатор', 'Переговорщик', 'Детектив', 'Интегратор'] },
  { quote: '«Я просто спросил „а зачем?“ — и мы сэкономили неделю»',
    answer: 'Оптимизатор', options: ['Навигатор', 'Оптимизатор', 'Визионер', 'Технолог'] },
  { quote: '«Дедлайн не горит. Он тлеет, пока не станет поздно»',
    answer: 'Методолог', options: ['Методолог', 'Стратег', 'Архитектор', 'Переговорщик'] },
];

/* ---------- МИНИ-ЦИТАТЫ «ЗА КАДРОМ» ---------- */
const BS_QUOTES = [
  { text: 'Самая длинная фраза года: «Это же просто небольшая доработка».', who: 'из командного чата' },
  { text: 'Традиция: сложное совещание начинается с кофе. Очень сложное — с двух.', who: 'командная традиция' },
  { text: 'Нужно было ещё вчера.', who: 'Единица измерения времени · из проектного календаря' },
  { text: 'Если всё идёт по плану, значит, пора актуализировать план.', who: 'Закон проектного оптимизма · неписаные правила команды' },
];

/* ============================================================ */

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const initials = (name) => name.split(' ').filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase();

/* --- бегущая строка --- */
const tickerTrack = document.getElementById('tickerTrack');
const tickerHTML = TICKER.map(t => `<span><i>✦</i>«${t}»</span>`).join('');
tickerTrack.innerHTML = reduced ? tickerHTML : tickerHTML + tickerHTML;

/* --- досье: карточки --- */
const crewGrid = document.getElementById('crewGrid');
crewGrid.innerHTML = CREW.map((p, i) => `
  <button class="dossier rise" style="transition-delay:${(i % 5) * 70}ms" data-agent="${i}"
          aria-haspopup="dialog" aria-label="Личное дело агента ${String(i + 1).padStart(3, '0')}: ${p.nick}">
    ${p.photo ? `<img class="dossier-photo" src="${p.photo}" alt="" loading="lazy" decoding="async">` : ''}
    <span class="dossier-shade" aria-hidden="true"></span>
    <div class="code">
      <span class="monogram" aria-hidden="true">${initials(p.name)}</span>
    </div>
    <div class="dossier-content">
      <h3 class="nick${p.nick.length >= 11 ? ' long' : ''}">${p.nick}</h3>
      <p class="desc">${p.desc}</p>
      <p class="open-hint">Открыть личное дело ↗</p>
    </div>
  </button>`).join('');

/* --- досье: модальное окно --- */
const modal = document.getElementById('agentModal');
const modalIn = document.getElementById('modalIn');
let lastTrigger = null;

function openAgent(i) {
  const p = CREW[i];
  modalIn.innerHTML = `
    <div class="modal-top">
      <span class="modal-case">Личное дело № ${String(i + 1).padStart(3, '0')}</span>
      <button class="modal-close" id="modalClose" aria-label="Закрыть личное дело">×</button>
    </div>
    <div class="modal-id">
      <div class="avatar">${p.photo ? `<img src="${p.photo}" alt="${p.name}">` : initials(p.name)}</div>
      <div>
        <h3 id="modalName">${p.name}</h3>
        <p class="who">Позывной: ${p.nick} · Агент ${String(i + 1).padStart(3, '0')}</p>
      </div>
    </div>
    <div class="modal-fields">
      <div class="f"><p class="k">Миссия</p><p class="v">${p.mission}</p></div>
      <div class="f"><p class="k">Суперсила</p><p class="v">${p.power}</p></div>
      <div class="f"><p class="k">Секретный факт</p><p class="v">${p.secret}</p></div>
    </div>
    <span class="modal-stamp">Архив ДУУ · рассекречено</span>`;
  modal.showModal();
  document.getElementById('modalClose').addEventListener('click', () => modal.close());
  document.getElementById('modalClose').focus();
}
crewGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-agent]');
  if (!btn) return;
  lastTrigger = btn;
  openAgent(Number(btn.dataset.agent));
});
modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
modal.addEventListener('close', () => { if (lastTrigger) lastTrigger.focus(); });

/* --- сценарий операции --- */
document.getElementById('steps').innerHTML = STEPS.map((s, i) => `
  <div class="step rise" style="transition-delay:${i * 60}ms">
    <span class="node" aria-hidden="true"></span>
    <span class="num">${s.num}</span>
    <h3>${s.title}</h3>
    <p>${s.text}</p>
    <div class="meta">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
  </div>`).join('');

/* --- проектные расследования: аккордеон --- */
const archiveList = document.getElementById('archiveList');
archiveList.innerHTML = ARCHIVE.map((c, i) => `
  <div class="case-row rise">
    <button class="case-head" aria-expanded="false" aria-controls="caseBody${i}" id="caseHead${i}">
      <span class="no">Досье № ${c.no}</span>
      <span class="ttl">${c.title}</span>
      <span class="cat">${c.cat}</span>
      <span class="arr" aria-hidden="true">+</span>
    </button>
    <div class="case-body" id="caseBody${i}" role="region" aria-labelledby="caseHead${i}" hidden>
      <p class="proj">${c.proj}</p>
      <h4>Обстоятельства дела</h4>
      <p>${c.circumstances}</p>
      <h4>Ход расследования</h4>
      <p>${c.investigation}</p>
      ${c.status ? `<div class="case-verdict"><p class="k">Статус дела</p><p class="v">${c.status}</p></div>` : ''}
      ${c.verdict ? `<div class="case-verdict"><p class="k">Вердикт</p><p class="v">${c.verdict}</p></div>` : ''}
    </div>
  </div>`).join('');
archiveList.addEventListener('click', (e) => {
  const head = e.target.closest('.case-head');
  if (!head) return;
  const body = document.getElementById(head.getAttribute('aria-controls'));
  const open = head.getAttribute('aria-expanded') === 'true';
  head.setAttribute('aria-expanded', String(!open));
  body.hidden = open;
  head.closest('.case-row').classList.toggle('open', !open);
});

/* --- архив операций: завершённые --- */
document.getElementById('doneGrid').innerHTML = COMPLETED.map((c, i) => `
  <div class="done rise" style="transition-delay:${i * 70}ms">
    <p class="no">Операция ${c.no}</p>
    <h3>${c.title}</h3>
    <p class="desc">${c.desc}</p>
    ${c.verdict ? `<p class="verdict">${c.verdict}</p>` : ''}
    <p class="status"><span>${c.status}</span></p>
  </div>`).join('');

/* --- доказательства --- */
document.getElementById('lootGrid').innerHTML = LOOT.map((m, i) => `
  <div class="loot rise" style="transition-delay:${i * 70}ms">
    <p class="val"><span data-count="${m.value}" data-decimals="${m.decimals || 0}" data-suffix="${m.suffix || ''}">0</span></p>
    <p class="lbl">${m.label}</p>
    ${m.note ? `<p class="note">${m.note}</p>` : ''}
  </div>`).join('');

/* --- цитаты «за кадром» --- */
document.getElementById('bsQuotes').innerHTML = BS_QUOTES.map(q => `
  <p class="bs-quote">«${q.text}»<br><b>${q.who}</b></p>`).join('');

/* --- викторина --- */
const quizEl = document.getElementById('quiz');
let qIndex = 0, qScore = 0, qAnswered = false;

function renderQuiz() {
  if (qIndex >= QUIZ.length) {
    quizEl.innerHTML = `
      <div class="q-top"><span class="q-count">Викторина окончена</span></div>
      <p class="q-quote">Ваш результат: ${qScore} из ${QUIZ.length}</p>
      <p class="q-verdict" style="margin-top:10px">${qScore === QUIZ.length ? 'Вы явно были на всех наших совещаниях.' : 'Загляните к нам за кадр ещё раз.'}</p>
      <div class="q-foot"><span></span><button class="btn btn-ghost q-next q-restart" id="qRestart">Сыграть ещё раз</button></div>`;
    document.getElementById('qRestart').addEventListener('click', () => { qIndex = 0; qScore = 0; renderQuiz(); });
    return;
  }
  qAnswered = false;
  const q = QUIZ[qIndex];
  quizEl.innerHTML = `
    <div class="q-top">
      <span class="q-count">Угадай, кто это сказал · ${qIndex + 1}/${QUIZ.length}</span>
      <span class="q-score">Счёт: ${qScore}</span>
    </div>
    <p class="q-quote">${q.quote}</p>
    <div class="q-opts">
      ${q.options.map(o => `<button class="q-opt" data-opt="${o}">${o}</button>`).join('')}
    </div>
    <div class="q-foot"><p class="q-verdict" id="qVerdict"></p><span id="qNextSlot"></span></div>`;
  quizEl.querySelectorAll('.q-opt').forEach(btn => {
    btn.addEventListener('click', () => answerQuiz(btn, q));
  });
}
function answerQuiz(btn, q) {
  if (qAnswered) return;
  qAnswered = true;
  const ok = btn.dataset.opt === q.answer;
  if (ok) qScore++;
  quizEl.querySelectorAll('.q-opt').forEach(b => {
    b.disabled = true;
    if (b.dataset.opt === q.answer) b.classList.add('correct');
    else if (b === btn && !ok) b.classList.add('wrong');
  });
  quizEl.querySelector('.q-score').textContent = `Счёт: ${qScore}`;
  document.getElementById('qVerdict').textContent = ok ? 'В точку!' : `Это сказал(а) ${q.answer}.`;
  const next = document.createElement('button');
  next.className = 'btn btn-gold q-next';
  next.textContent = qIndex + 1 < QUIZ.length ? 'Дальше' : 'Итог';
  next.addEventListener('click', () => { qIndex++; renderQuiz(); });
  document.getElementById('qNextSlot').appendChild(next);
  next.focus();
}
renderQuiz();

/* --- появление блоков --- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.18 });
document.querySelectorAll('.rise').forEach(el => io.observe(el));

/* --- подсветка слов заголовка при скролле --- */
const headline = document.getElementById('headline');
const words = headline.querySelectorAll('.w');
if (!reduced) {
  const hl = () => {
    const r = headline.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.min(1, Math.max(0, (vh * 0.9 - r.top) / (vh * 0.55)));
    const k = Math.floor(p * words.length + 0.0001);
    words.forEach((w, i) => { w.style.opacity = i < k ? 1 : 0.32; });
  };
  addEventListener('scroll', hl, { passive: true });
  hl();
} else {
  words.forEach(w => { w.style.opacity = 1; });
}

/* --- параллакс фона хиро --- */
const heroBg = document.querySelector('.hero-bg');
if (!reduced && heroBg) {
  addEventListener('scroll', () => {
    const y = scrollY;
    if (y < innerHeight * 1.2) heroBg.style.transform = `translateY(${y * 0.22}px)`;
  }, { passive: true });
}

/* --- заполнение «рельса» таймлайна --- */
const railFill = document.getElementById('railFill');
const planSection = document.getElementById('plan');
if (railFill && planSection && !reduced) {
  const fill = () => {
    const r = planSection.getBoundingClientRect();
    const vh = innerHeight;
    const p = Math.min(1, Math.max(0, (vh * 0.65 - r.top) / r.height));
    railFill.style.height = (p * 100).toFixed(2) + '%';
  };
  addEventListener('scroll', fill, { passive: true });
  fill();
} else if (railFill) {
  railFill.style.height = '100%';
}

/* --- анимация счётчиков (с поддержкой дробных) --- */
const counters = document.querySelectorAll('[data-count]');
const fmt = (v, d) => d > 0 ? v.toFixed(d).replace('.', ',') : String(Math.round(v));
const animate = (el) => {
  const target = parseFloat(el.dataset.count);
  const d = parseInt(el.dataset.decimals || '0', 10);
  const suffix = el.dataset.suffix || '';
  if (reduced) { el.textContent = fmt(target, d) + suffix; return; }
  const t0 = performance.now();
  const dur = 1400;
  const tick = (t) => {
    const p = Math.min(1, (t - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(target * eased, d) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
const cio = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { animate(e.target); cio.unobserve(e.target); } });
}, { threshold: 0.6 });
counters.forEach(el => cio.observe(el));

/* --- активация шагов таймлайна --- */
const sio = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); sio.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('.step').forEach(el => sio.observe(el));

/* --- хедер затемняется после хиро --- */
const top = document.querySelector('header.top');
addEventListener('scroll', () => {
  top.style.background = scrollY > 40
    ? 'color-mix(in oklch, var(--bg) 88%, transparent)'
    : 'color-mix(in oklch, var(--bg) 72%, transparent)';
}, { passive: true });

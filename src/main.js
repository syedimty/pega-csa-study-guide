import { marked } from 'marked';
import './style.css';
import BASE_QUESTIONS from './questions.json';

// ── MD files imported as raw strings at build time (no runtime fetch needed) ──
import md01 from '../modules/module-01-low-code-defined.md?raw';
import md02 from '../modules/module-02-defining-customer-microjourney.md?raw';
import md03 from '../modules/module-03-inviting-users-application.md?raw';
import md04 from '../modules/module-04-pega-center-out-architecture.md?raw';
import md05 from '../modules/module-05-pega-genai-pega-platform.md?raw';
import md06 from '../modules/module-06-accelerating-application-building-pega-blueprint.md?raw';
import md07 from '../modules/module-07-capturing-and-presenting-data.md?raw';
import md08 from '../modules/module-08-data-model.md?raw';
import md09 from '../modules/module-09-creating-data-relationship.md?raw';
import md10 from '../modules/module-10-application-user-interface-design.md?raw';
import md11 from '../modules/module-11-user-guidance.md?raw';
import md12 from '../modules/module-12-routing-assignments-users.md?raw';
import md13 from '../modules/module-13-designing-approval-process.md?raw';
import md14 from '../modules/module-14-cascading-approvals.md?raw';
import md15 from '../modules/module-15-completing-work-time.md?raw';
import md16 from '../modules/module-16-escalating-late-work.md?raw';
import md17 from '../modules/module-17-sending-emails-during-case-processing.md?raw';
import md18 from '../modules/module-18-creating-and-managing-teams-users.md?raw';
import md19 from '../modules/module-19-team-application-development.md?raw';
import md20 from '../modules/module-20-collaboration-users.md?raw';
import md21 from '../modules/module-21-modular-architecture-and-enterprise-reuse.md?raw';
import md22 from '../modules/module-22-creating-rule.md?raw';
import md23 from '../modules/module-23-promoting-rule-reuse-relevant-records.md?raw';
import md24 from '../modules/module-24-automation-shapes-case-life-cycle.md?raw';
import md25 from '../modules/module-25-automating-workflow-decisions.md?raw';
import md26 from '../modules/module-26-calculating-fields-using-decision-tables.md?raw';
import md27 from '../modules/module-27-decision-tables-and-trees.md?raw';
import md28 from '../modules/module-28-skipping-process-or-stage.md?raw';
import md29 from '../modules/module-29-adding-optional-actions-workflow.md?raw';
import md30 from '../modules/module-30-identifying-duplicate-cases.md?raw';
import md31 from '../modules/module-31-creating-child-case.md?raw';
import md32 from '../modules/module-32-pausing-and-resuming-case-processing.md?raw';
import md33 from '../modules/module-33-creating-and-setting-application-variables.md?raw';
import md34 from '../modules/module-34-validating-data-against-business-logic.md?raw';
import md35 from '../modules/module-35-validating-data-dev-studio.md?raw';
import md36 from '../modules/module-36-application-data-manipulation.md?raw';
import md37 from '../modules/module-37-application-data-manipulation-dev-studio.md?raw';
import md38 from '../modules/module-38-accessing-sourced-data-case.md?raw';
import md39 from '../modules/module-39-saving-data-system-record.md?raw';
import md40 from '../modules/module-40-application-security.md?raw';
import md41 from '../modules/module-41-managing-application-access.md?raw';
import md42 from '../modules/module-42-configuring-ui-elements.md?raw';
import md43 from '../modules/module-43-configuring-portal-content.md?raw';
import md44 from '../modules/module-44-application-development-management.md?raw';
import md45 from '../modules/module-45-testing-your-application.md?raw';
import md46 from '../modules/module-46-debugging-application-errors.md?raw';
import md47 from '../modules/module-47-exploring-application-data-insights.md?raw';
import md48 from '../modules/module-48-localizing-application-content.md?raw';

// ── MODULE METADATA — content is the bundled MD string ────────────────
const MODULES = [
  { num: 1,  title: "Module 1: Low-code Defined",                                    content: md01 },
  { num: 2,  title: "Module 2: Defining a Customer Microjourney",                     content: md02 },
  { num: 3,  title: "Module 3: Inviting Users to an Application",                     content: md03 },
  { num: 4,  title: "Module 4: Pega Center-out Architecture",                         content: md04 },
  { num: 5,  title: "Module 5: Pega GenAI in Pega Platform",                          content: md05 },
  { num: 6,  title: "Module 6: Accelerating Application Building with Pega Blueprint", content: md06 },
  { num: 7,  title: "Module 7: Capturing and Presenting Data",                         content: md07 },
  { num: 8,  title: "Module 8: The Data Model",                                        content: md08 },
  { num: 9,  title: "Module 9: Creating a Data Relationship",                          content: md09 },
  { num: 10, title: "Module 10: Application User Interface Design",                    content: md10 },
  { num: 11, title: "Module 11: User Guidance",                                        content: md11 },
  { num: 12, title: "Module 12: Routing Assignments to Users",                         content: md12 },
  { num: 13, title: "Module 13: Designing an Approval Process",                        content: md13 },
  { num: 14, title: "Module 14: Cascading Approvals",                                  content: md14 },
  { num: 15, title: "Module 15: Completing Work in Time",                              content: md15 },
  { num: 16, title: "Module 16: Escalating Late Work",                                 content: md16 },
  { num: 17, title: "Module 17: Sending Emails During Case Processing",                content: md17 },
  { num: 18, title: "Module 18: Creating and Managing Teams and Users",                content: md18 },
  { num: 19, title: "Module 19: Team Application Development",                         content: md19 },
  { num: 20, title: "Module 20: Collaboration for Users",                              content: md20 },
  { num: 21, title: "Module 21: Modular Architecture and Enterprise Reuse",            content: md21 },
  { num: 22, title: "Module 22: Creating a Rule",                                      content: md22 },
  { num: 23, title: "Module 23: Promoting Rule Reuse Through Relevant Records",        content: md23 },
  { num: 24, title: "Module 24: Automation in Case Life Cycle",                        content: md24 },
  { num: 25, title: "Module 25: Automating Workflow Decisions",                        content: md25 },
  { num: 26, title: "Module 26: Calculating Fields Using Decision Tables",             content: md26 },
  { num: 27, title: "Module 27: Decision Tables and Trees",                            content: md27 },
  { num: 28, title: "Module 28: Skipping a Process or Stage",                         content: md28 },
  { num: 29, title: "Module 29: Adding Optional Actions to Workflow",                 content: md29 },
  { num: 30, title: "Module 30: Identifying Duplicate Cases",                          content: md30 },
  { num: 31, title: "Module 31: Creating a Child Case",                                content: md31 },
  { num: 32, title: "Module 32: Pausing and Resuming Case Processing",                 content: md32 },
  { num: 33, title: "Module 33: Creating and Setting Application Variables",           content: md33 },
  { num: 34, title: "Module 34: Validating Data Against Business Logic",               content: md34 },
  { num: 35, title: "Module 35: Validating Data in Dev Studio",                        content: md35 },
  { num: 36, title: "Module 36: Application Data Manipulation",                        content: md36 },
  { num: 37, title: "Module 37: Application Data Manipulation in Dev Studio",          content: md37 },
  { num: 38, title: "Module 38: Accessing Sourced Data in a Case",                     content: md38 },
  { num: 39, title: "Module 39: Saving Data to a System of Record",                   content: md39 },
  { num: 40, title: "Module 40: Application Security",                                 content: md40 },
  { num: 41, title: "Module 41: Managing Application Access",                          content: md41 },
  { num: 42, title: "Module 42: Configuring UI Elements",                              content: md42 },
  { num: 43, title: "Module 43: Configuring Portal Content",                           content: md43 },
  { num: 44, title: "Module 44: Application Development Management",                   content: md44 },
  { num: 45, title: "Module 45: Testing Your Application",                             content: md45 },
  { num: 46, title: "Module 46: Debugging Application Errors",                         content: md46 },
  { num: 47, title: "Module 47: Exploring Application Data and Insights",              content: md47 },
  { num: 48, title: "Module 48: Localizing Application Content",                       content: md48 },
];

// ── STATE ─────────────────────────────────────────────────────────────
const done      = JSON.parse(localStorage.getItem('pega_done') || '[]');
const bestScore = +(localStorage.getItem('pega_best_score') || 0);
let currentModule  = null;
let activeTab      = 'study';
let quizMode       = 'exam';
let quizQuestions  = [];
let currentQ       = 0;
let score          = 0;
let selectedOpt    = null;
let answered       = false;
let timerInterval  = null;
let timerSeconds   = 0;
let lastQuizSettings = null;
let _bestScore     = bestScore; // mutable copy

let ALL_QUESTIONS = [...BASE_QUESTIONS];

// Try loading extra-questions.json (works if served from local server; gracefully fails for file://)
function tryLoadExtra() {
  fetch('extra-questions.json')
    .then(r => r.json())
    .then(data => {
      if (Array.isArray(data) && data.length) {
        ALL_QUESTIONS = [...BASE_QUESTIONS, ...data];
        console.log(`Loaded ${data.length} extra questions.`);
      }
    })
    .catch(() => { /* not found — that's fine */ });
}

function save() { localStorage.setItem('pega_done', JSON.stringify(done)); }

// ── PROGRESS ─────────────────────────────────────────────────────────
function updateProgress() {
  const c = done.length;
  document.getElementById('prog-label').textContent = c + ' / ' + MODULES.length;
  document.getElementById('progress-fill').style.width = (c / MODULES.length * 100) + '%';
}

function updateBestScore() {
  const el = document.getElementById('best-score-disp');
  if (el) el.textContent = _bestScore > 0 ? _bestScore : '—';
}

// ── SIDEBAR ───────────────────────────────────────────────────────────
function buildSidebar(filter) {
  const list = document.getElementById('module-list');
  list.innerHTML = '';
  const q = (filter || '').toLowerCase();
  MODULES.forEach((m, i) => {
    const shortTitle = m.title.replace(/^Module \d+:\s*/, '');
    if (q && !shortTitle.toLowerCase().includes(q) && !String(m.num).includes(q)) return;
    const isDone = done.includes(m.num);
    const div = document.createElement('div');
    div.className = 'module-item' + (currentModule === i ? ' active' : '') + (isDone ? ' done' : '');
    div.innerHTML =
      '<span class="mod-num">' + String(m.num).padStart(2,'0') + '</span>' +
      '<span class="mod-title">' + shortTitle + '</span>' +
      '<span class="done-chk" title="Toggle done">' + (isDone ? '✅' : '⬜') + '</span>';
    div.querySelector('.done-chk').addEventListener('click', e => {
      e.stopPropagation();
      toggleDoneItem(m.num);
    });
    div.addEventListener('click', () => { switchTab('study'); loadModule(i); });
    list.appendChild(div);
  });
}

function filterModules(v) { buildSidebar(v); }

// ── TAB SWITCHING ─────────────────────────────────────────────────────
function switchTab(tab) {
  activeTab = tab;
  document.getElementById('tab-study').classList.toggle('active', tab === 'study');
  document.getElementById('tab-quiz').classList.toggle('active', tab === 'quiz');
  document.getElementById('study-view').style.display = tab === 'study' ? 'block' : 'none';
  document.getElementById('quiz-view').style.display = tab === 'quiz' ? 'flex' : 'none';
  document.getElementById('search-box').style.display = tab === 'study' ? 'block' : 'none';
  document.getElementById('mark-done-btn').style.display = (tab === 'study' && currentModule !== null) ? 'inline-block' : 'none';
  document.getElementById('quiz-this-btn').style.display = (tab === 'study' && currentModule !== null) ? 'inline-block' : 'none';
  document.getElementById('quiz-panel').classList.toggle('visible', tab === 'quiz');
  if (tab === 'quiz') {
    document.getElementById('breadcrumb-title').textContent = 'Quiz Mode';
    showQuizHome();
  }
  closeSidebarOnMobile();
}

// ── STUDY ─────────────────────────────────────────────────────────────
function loadModule(index) {
  currentModule = index;
  const m = MODULES[index];
  const isDone = done.includes(m.num);

  document.querySelectorAll('.module-item').forEach(el => {
    el.classList.remove('active');
    const n = parseInt(el.querySelector('.mod-num').textContent);
    if (n === m.num) el.classList.add('active');
  });

  document.getElementById('breadcrumb-title').textContent = m.title.replace(/^Module \d+:\s*/, '');
  const doneBtn = document.getElementById('mark-done-btn');
  doneBtn.style.display = 'inline-block';
  doneBtn.textContent = isDone ? '✅ Done' : '✓ Mark Done';
  doneBtn.className = 'top-btn' + (isDone ? ' green' : '');
  document.getElementById('quiz-this-btn').style.display = 'inline-block';

  document.getElementById('content-render').innerHTML = marked.parse(m.content);
  document.getElementById('content-area').scrollTop = 0;
  closeSidebarOnMobile();
}

function toggleDone() {
  if (currentModule === null) return;
  toggleDoneItem(MODULES[currentModule].num);
  const isDone = done.includes(MODULES[currentModule].num);
  const btn = document.getElementById('mark-done-btn');
  btn.textContent = isDone ? '✅ Done' : '✓ Mark Done';
  btn.className = 'top-btn' + (isDone ? ' green' : '');
}

function toggleDoneItem(num) {
  const i = done.indexOf(num);
  if (i === -1) done.push(num); else done.splice(i, 1);
  save(); updateProgress(); buildSidebar(document.getElementById('search-input').value);
}

// ── QUIZ MODE SELECT ──────────────────────────────────────────────────
function selectMode(mode) {
  quizMode = mode;
  ['exam','module','random'].forEach(m => {
    document.getElementById('mode-card-' + m).classList.toggle('selected', m === mode);
  });
  document.getElementById('setting-module-row').style.display = mode === 'module' ? 'flex' : 'none';
  const slider = document.getElementById('q-count-slider');
  if (mode === 'exam') {
    slider.value = 60; document.getElementById('q-count-val').textContent = '60';
    document.getElementById('timer-select').value = '90';
  } else {
    slider.value = 20; document.getElementById('q-count-val').textContent = '20';
    document.getElementById('timer-select').value = '0';
  }
}

function quizThisModule() {
  switchTab('quiz');
  selectMode('module');
  if (currentModule !== null) {
    const sel = document.getElementById('module-select');
    sel.value = MODULES[currentModule].num;
  }
}

// ── QUIZ START ────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  const count = parseInt(document.getElementById('q-count-slider').value);
  const typeFilter = document.getElementById('q-type-filter').value;
  const timerMins = parseInt(document.getElementById('timer-select').value);

  let pool = ALL_QUESTIONS;
  if (typeFilter !== 'all') pool = pool.filter(q => q.type === typeFilter);
  if (quizMode === 'module') {
    const modNum = parseInt(document.getElementById('module-select').value);
    pool = pool.filter(q => q.module === modNum);
  }

  quizQuestions = shuffle(pool).slice(0, count);
  if (quizQuestions.length === 0) { alert('No questions available for this selection.'); return; }

  lastQuizSettings = { count, typeFilter, timerMins };
  currentQ = 0; score = 0; selectedOpt = null; answered = false;

  document.getElementById('quiz-home').style.display = 'none';
  document.getElementById('quiz-results').style.display = 'none';
  document.getElementById('quiz-runner').style.display = 'flex';

  if (timerMins > 0) {
    timerSeconds = timerMins * 60;
    document.getElementById('quiz-timer-disp').style.display = 'inline';
    startTimer();
  } else {
    document.getElementById('quiz-timer-disp').style.display = 'none';
    clearInterval(timerInterval);
  }

  renderQuestion();
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();
    if (timerSeconds <= 0) { clearInterval(timerInterval); finishQuiz(); }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timerSeconds / 60);
  const s = timerSeconds % 60;
  const el = document.getElementById('quiz-timer-disp');
  el.textContent = m + ':' + String(s).padStart(2,'0');
  el.style.color = timerSeconds < 60 ? 'var(--red)' : 'var(--pega-blue)';
}

// ── RENDER QUESTION ───────────────────────────────────────────────────
function renderQuestion() {
  const q = quizQuestions[currentQ];
  const total = quizQuestions.length;

  document.getElementById('quiz-progress-text').textContent = 'Q ' + (currentQ + 1) + ' / ' + total;
  document.getElementById('quiz-progress-bar-fill').style.width = ((currentQ + 1) / total * 100) + '%';
  document.getElementById('quiz-score-inline').textContent = 'Score: ' + score + '/' + (currentQ + (answered ? 1 : 0));

  const typeName = q.type === 'tf' ? 'True / False' : 'Multiple Choice';
  document.getElementById('q-meta').innerHTML =
    'Module ' + q.module + ': ' + q.module_title +
    '<span class="q-type-badge">' + typeName + '</span>';
  document.getElementById('q-text').textContent = q.question;

  const optsList = document.getElementById('options-list');
  optsList.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = (q.type === 'mcq' ? String.fromCharCode(65 + i) + '. ' : '') + opt;
    btn.addEventListener('click', () => selectOption(i));
    optsList.appendChild(btn);
  });

  document.getElementById('explanation-box').classList.remove('visible');
  document.getElementById('explanation-box').textContent = '';
  document.getElementById('btn-submit').style.display = 'inline-block';
  document.getElementById('btn-submit').disabled = true;
  document.getElementById('btn-next').style.display = 'none';
  selectedOpt = null; answered = false;

  document.getElementById('quiz-body').scrollTop = 0;
}

function selectOption(i) {
  if (answered) return;
  selectedOpt = i;
  document.querySelectorAll('.option-btn').forEach((btn, idx) => {
    btn.classList.toggle('selected', idx === i);
  });
  document.getElementById('btn-submit').disabled = false;
}

function submitAnswer() {
  if (selectedOpt === null || answered) return;
  answered = true;
  const q = quizQuestions[currentQ];
  const correct = q.answer;
  const btns = document.querySelectorAll('.option-btn');

  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    else if (i === selectedOpt && selectedOpt !== correct) btn.classList.add('wrong');
  });

  if (selectedOpt === correct) score++;
  document.getElementById('quiz-score-inline').textContent = 'Score: ' + score + '/' + (currentQ + 1);

  const expBox = document.getElementById('explanation-box');
  expBox.innerHTML = '<strong>' + (selectedOpt === correct ? '✓ Correct!' : '✗ Incorrect.') + '</strong> ' + q.explanation;
  expBox.classList.add('visible');

  document.getElementById('btn-submit').style.display = 'none';
  document.getElementById('btn-next').style.display = 'inline-block';
  document.getElementById('btn-next').textContent = currentQ + 1 < quizQuestions.length ? 'Next →' : 'See Results';
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= quizQuestions.length) { finishQuiz(); return; }
  answered = false;
  renderQuestion();
}

function finishQuiz() {
  clearInterval(timerInterval);
  document.getElementById('quiz-runner').style.display = 'none';
  document.getElementById('quiz-results').style.display = 'block';

  const total = quizQuestions.length;
  const pct = Math.round(score / total * 100);
  const passed = pct >= 65;

  if (pct > _bestScore) {
    _bestScore = pct;
    localStorage.setItem('pega_best_score', _bestScore);
    updateBestScore();
  }

  document.getElementById('result-score-pct').textContent = pct + '%';
  document.getElementById('result-score-pct').style.color = passed ? 'var(--green)' : 'var(--red)';
  document.getElementById('result-score-label').textContent = score + ' correct out of ' + total;
  const badge = document.getElementById('result-badge');
  badge.textContent = passed ? '🎉 PASS — Above 65% threshold' : '📚 FAIL — Need 65% to pass';
  badge.className = 'pass-badge ' + (passed ? 'pass' : 'fail');
  document.getElementById('r-correct').textContent = score;
  document.getElementById('r-wrong').textContent = total - score;
  document.getElementById('r-total').textContent = total;
}

function retryQuiz() {
  document.getElementById('quiz-results').style.display = 'none';
  startQuiz();
}

function showQuizHome() {
  clearInterval(timerInterval);
  document.getElementById('quiz-home').style.display = 'block';
  document.getElementById('quiz-runner').style.display = 'none';
  document.getElementById('quiz-results').style.display = 'none';
}

function exitQuiz() {
  if (confirm('Exit quiz? Your progress will be lost.')) {
    clearInterval(timerInterval);
    showQuizHome();
  }
}

// ── INIT ──────────────────────────────────────────────────────────────

// ── MOBILE SIDEBAR TOGGLE ─────────────────────────────────────────────
function toggleSidebar() {
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebar-overlay');
  const isOpen   = sidebar.classList.toggle('open');
  overlay.classList.toggle('visible', isOpen);
}

function closeSidebarOnMobile() {
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('visible');
  }
}

// Expose functions needed by inline HTML event handlers
window.loadModule     = loadModule;
window.switchTab      = switchTab;
window.toggleDone     = toggleDone;
window.filterModules  = filterModules;
window.selectMode     = selectMode;
window.quizThisModule = quizThisModule;
window.startQuiz      = startQuiz;
window.submitAnswer   = submitAnswer;
window.nextQuestion   = nextQuestion;
window.retryQuiz      = retryQuiz;
window.showQuizHome   = showQuizHome;
window.exitQuiz       = exitQuiz;
window.toggleSidebar  = toggleSidebar;

// Populate module select dropdown
const sel = document.getElementById('module-select');
MODULES.forEach(m => {
  const opt = document.createElement('option');
  opt.value = m.num;
  opt.textContent = 'Module ' + m.num + ': ' + m.title.replace(/^Module \d+:\s*/,'');
  sel.appendChild(opt);
});

// Count topics dynamically from bundled content
function countTopics() {
  let t = 0;
  MODULES.forEach(m => { const x = m.content.match(/^## Topic/gm); if (x) t += x.length; });
  return t;
}
document.getElementById('total-topics-disp').textContent = countTopics();

buildSidebar();
updateProgress();
updateBestScore();
tryLoadExtra();

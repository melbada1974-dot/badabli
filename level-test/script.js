// ============================================================
//  Bada BLI Korean Level Test — App Logic (v2)
// ============================================================

// ── Question Bank ────────────────────────────────────────────
const questionBank = {
    // Part 1: Basic (Sejong Vol. 1–2) — 7 selected per session
    basic: [
        { level: "기초", text: "Choose the word that best completes the blank.", content: "가: 이름이 ( &nbsp; &nbsp; &nbsp; )?<br>나: 제 이름은 제임스입니다.", options: ["무엇입니까", "누구입니까", "어디입니까", "얼마입니까"], answer: 0, points: 4 },
        { level: "기초", text: "Choose the word that best completes the blank.", content: "가: 지금 ( &nbsp; &nbsp; &nbsp; )을/를 해요?<br>나: 한국어를 공부해요.", options: ["누구", "어디", "무엇", "언제"], answer: 2, points: 4 },
        { level: "기초", text: "Choose the word that best completes the blank.", content: "저는 사과를 ( &nbsp; &nbsp; &nbsp; ).", options: ["먹습니다", "마십니다", "입습니다", "신습니다"], answer: 0, points: 4 },
        { level: "기초", text: "Choose the correct particle (조사) for the blank.", content: "동생( &nbsp; &nbsp; &nbsp; ) 학생입니다.", options: ["이", "가", "은", "는"], answer: 3, points: 4 },
        { level: "기초", text: "Choose the word that best completes the blank.", content: "가: 주말에 보통 뭐 해요?<br>나: 저는 주로 영화를 ( &nbsp; &nbsp; &nbsp; ).", options: ["봐요", "읽어요", "들어요", "배워요"], answer: 0, points: 4 },
        { level: "기초", text: "Choose the word that best completes the blank.", content: "오늘은 날씨가 ( &nbsp; &nbsp; &nbsp; ) 좋습니다.", options: ["많이", "아주", "크게", "길게"], answer: 1, points: 5 },
        { level: "기초", text: "Choose the correct question for the response.", content: "가: 이 가방이 ( &nbsp; &nbsp; &nbsp; )?<br>나: 삼만 원이에요.", options: ["몇 개예요", "얼마예요", "누구예요", "어디예요"], answer: 1, points: 5 },
        { level: "기초", text: "Choose the word that best completes the blank.", content: "가: 식당이 ( &nbsp; &nbsp; &nbsp; )에 있어요?<br>나: 1층에 있어요.", options: ["어디", "누구", "언제", "무엇"], answer: 0, points: 4 },
        { level: "기초", text: "Choose the word that best completes the blank.", content: "저는 아침에 운동을 ( &nbsp; &nbsp; &nbsp; ).", options: ["합니다", "갑니다", "옵니다", "있습니다"], answer: 0, points: 4 },
        { level: "기초", text: "Choose the correct particle (조사) for the blank.", content: "이것( &nbsp; &nbsp; &nbsp; ) 제 책입니다.", options: ["이", "가", "은", "는"], answer: 2, points: 4 },
        { level: "기초", text: "Choose the word that best completes the blank.", content: "가: ( &nbsp; &nbsp; &nbsp; )에 가요?<br>나: 학교에 가요.", options: ["어디", "누구", "언제", "무엇"], answer: 0, points: 4 },
        { level: "기초", text: "Choose the correct particle (조사) for the blank.", content: "저는 선생님( &nbsp; &nbsp; &nbsp; ) 아닙니다.", options: ["이", "가", "은", "는"], answer: 0, points: 5 },
        { level: "기초", text: "Choose the word that best completes the blank.", content: "가: 커피를 ( &nbsp; &nbsp; &nbsp; )?<br>나: 네, 좋아해요.", options: ["좋아해요", "싫어해요", "마셔요", "사요"], answer: 0, points: 4 }
    ],

    // Part 2: Beginner (Sejong Vol. 3–4) — 7 selected per session
    beginner: [
        { level: "초급", text: "Choose the word that best completes the blank.", content: "어제 비가 많이 ( &nbsp; &nbsp; &nbsp; ) 집에 있었어요.", options: ["오고", "와서", "오지만", "오면"], answer: 1, points: 5 },
        { level: "초급", text: "Choose the word that best completes the blank.", content: "가: 내일 같이 밥을 ( &nbsp; &nbsp; &nbsp; )?<br>나: 네, 좋아요. 같이 먹어요.", options: ["먹을까요", "먹지요", "먹네요", "먹은 적이 있어요"], answer: 0, points: 5 },
        { level: "초급", text: "Choose the word that best completes the blank.", content: "저는 한국 문화를 ( &nbsp; &nbsp; &nbsp; ) 좋아합니다.", options: ["관심이 있어서", "관심이 생기면", "알고 싶어서", "가장"], answer: 3, points: 5 },
        { level: "초급", text: "Choose the correct expression to complete the sentence.", content: "도서관에서는 조용히 ( &nbsp; &nbsp; &nbsp; ) 합니다.", options: ["해야", "하면", "해서", "해도"], answer: 0, points: 5 },
        { level: "초급", text: "Choose the word that best completes the blank.", content: "머리가 아프면 이 약을 ( &nbsp; &nbsp; &nbsp; ) 보세요.", options: ["드셔", "마셔", "먹어", "해"], answer: 0, points: 5 },
        { level: "초급", text: "Choose the expression that best fits the context.", content: "어제 본 영화는 정말 ( &nbsp; &nbsp; &nbsp; ).", options: ["재미있었어요", "재미있어요", "재미있겠습니다", "재미있을 거예요"], answer: 0, points: 5 },
        { level: "초급", text: "Choose the expression closest in meaning to the underlined part.", content: "친구를 <u>만나려고</u> 카페에 갔어요.", options: ["만나기 위해서", "만나기 때문에", "만나는 동안", "만날 때"], answer: 0, points: 5 },
        { level: "초급", text: "Choose the word that best completes the blank.", content: "시간이 ( &nbsp; &nbsp; &nbsp; ) 여행을 가고 싶어요.", options: ["있으면", "있어서", "있지만", "있고"], answer: 0, points: 5 },
        { level: "초급", text: "Choose the expression that best fits the context.", content: "이 옷이 ( &nbsp; &nbsp; &nbsp; ) 한 번 입어 보세요.", options: ["마음에 들면", "마음에 들어서", "마음에 들지만", "마음에 듣고"], answer: 0, points: 5 },
        { level: "초급", text: "Choose the word that best completes the blank.", content: "배가 많이 ( &nbsp; &nbsp; &nbsp; ) 밥을 먹었어요.", options: ["고파서", "고프고", "고프면", "고프지만"], answer: 0, points: 5 },
        { level: "초급", text: "Choose the word that best completes the blank.", content: "가: 숙제를 다 ( &nbsp; &nbsp; &nbsp; )?<br>나: 아니요, 아직 못 했어요.", options: ["했어요", "할래요", "할까요", "합시다"], answer: 0, points: 5 },
        { level: "초급", text: "Choose the expression closest in meaning to the underlined part.", content: "비가 오기 <u>전에</u> 집에 가야 해요.", options: ["오지 않을 때", "오고 나서", "오기 시작할 때", "오려고 할 때"], answer: 2, points: 5 }
    ],

    // Part 3: Intermediate (Sejong Vol. 5–8) — 6 selected per session
    intermediate: [
        { level: "중급", text: "Choose the expression that best completes the blank.", content: "그 사람은 일을 ( &nbsp; &nbsp; &nbsp; ) 성격도 매우 좋습니다.", options: ["잘할 뿐만 아니라", "잘하기 때문에", "잘하는데도", "잘할 수밖에 없어서"], answer: 0, points: 5 },
        { level: "중급", text: "Choose the expression that best completes the blank.", content: "회의가 길어지는 ( &nbsp; &nbsp; &nbsp; ) 점심 식사를 못 했습니다.", options: ["바람에", "덕분에", "탓으로", "대신에"], answer: 0, points: 6 },
        { level: "중급", text: "Choose the expression that best completes the blank.", content: "지하철이 너무 복잡해서 하마터면 지각을 ( &nbsp; &nbsp; &nbsp; ).", options: ["할 뻔했어요", "할 정도였어요", "할 수 있었어요", "해야 했어요"], answer: 0, points: 6 },
        { level: "중급", text: "Choose the sentence that has the same meaning as the one below.", content: "그 영화는 별로 기대하지 않고 봤는데 생각보다 재미있었다.", options: ["기대한 만큼 재미있었다.", "기대 이상으로 재미있었다.", "기대와 달리 재미없었다.", "기대한 대로 재미있었다."], answer: 1, points: 6 },
        { level: "중급", text: "Choose the expression that best completes the blank.", content: "신제품 출시에 맞춰 대대적인 마케팅을 ( &nbsp; &nbsp; &nbsp; ) 회사의 매출이 크게 올랐다.", options: ["비롯하여", "바탕으로", "펼친 결과", "무릅쓰고"], answer: 2, points: 6 },
        { level: "중급", text: "Choose the word that can correctly fill in BOTH blanks.", content: "• 그는 약속 시간을 ( &nbsp; &nbsp; &nbsp; ).<br>• 나는 중요한 비밀을 ( &nbsp; &nbsp; &nbsp; ).", options: ["어겼다", "지켰다", "잊었다", "잃었다"], answer: 1, points: 6 },
        { level: "중급", text: "Choose the expression that best completes the blank.", content: "건강을 ( &nbsp; &nbsp; &nbsp; ) 매일 운동을 하기로 결심했다.", options: ["위하여", "비하여", "대하여", "의하여"], answer: 0, points: 5 },
        { level: "중급", text: "Choose the sentence that has the same meaning as the one below.", content: "비가 올지도 모르니까 우산을 가져가는 게 좋겠어요.", options: ["비가 올 것이 틀림없다.", "비가 올 가능성이 있다.", "비가 오지 않을 것이다.", "비가 오고 있다."], answer: 1, points: 6 },
        { level: "중급", text: "Choose the expression that best completes the blank.", content: "이 제품은 뛰어난 디자인은 ( &nbsp; &nbsp; &nbsp; ) 실용성까지 갖추고 있습니다.", options: ["물론이고", "커녕", "고사하고", "대신에"], answer: 0, points: 6 },
        { level: "중급", text: "Choose the word that can correctly fill in BOTH blanks.", content: "• 그는 화가 나서 문을 세게 ( &nbsp; &nbsp; &nbsp; ).<br>• 회사는 위기를 ( &nbsp; &nbsp; &nbsp; ) 성장했다.", options: ["열었다", "닫았다", "맞았다", "디뎠다"], answer: 2, points: 6 }
    ]
};

// ── Generate Test Set ────────────────────────────────────────
function generateTestSet() {
    const shuffle = arr => [...arr].sort(() => 0.5 - Math.random());
    return [
        ...shuffle(questionBank.basic).slice(0, 7),
        ...shuffle(questionBank.beginner).slice(0, 7),
        ...shuffle(questionBank.intermediate).slice(0, 6)
    ];
}

// ── State ────────────────────────────────────────────────────
const state = {
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPurpose: "",
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    questions: []
};

// ── DOM References ───────────────────────────────────────────
const screens = {
    onboarding: document.getElementById('screen-onboarding'),
    test: document.getElementById('screen-test'),
    loading: document.getElementById('screen-loading'),
    result: document.getElementById('screen-result')
};

const ui = {
    form: document.getElementById('onboarding-form'),
    counter: document.getElementById('question-counter'),
    levelBadge: document.getElementById('level-indicator'),
    levelDot: document.getElementById('level-dot'),
    progressFill: document.getElementById('progress-bar-fill'),
    progressDots: document.getElementById('progress-dots'),
    qLevelTag: document.getElementById('q-level-tag'),
    qLevelText: document.getElementById('q-level-text'),
    qText: document.getElementById('question-text'),
    qContent: document.getElementById('question-content'),
    qCard: document.getElementById('question-card'),
    options: document.getElementById('options-container'),
    btnNext: document.getElementById('btn-next'),
    btnRestart: document.getElementById('btn-restart'),
    resultName: document.getElementById('result-name'),
    scoreText: document.getElementById('score-text'),
    scoreArc: document.getElementById('score-arc'),
    levelValue: document.getElementById('level-value'),
    levelDesc: document.getElementById('level-desc'),
    levelCard: document.getElementById('level-card'),
    levelTiers: document.getElementById('level-tiers'),
    feedbackText: document.getElementById('feedback-text')
};

// ── Level Config ─────────────────────────────────────────────
const levelConfig = {
    "기초": { en: "Basic", tagClass: "basic", color: "var(--blue)", hex: "#3b82f6" },
    "초급": { en: "Beginner", tagClass: "beginner", color: "var(--green)", hex: "#10b981" },
    "중급": { en: "Intermediate", tagClass: "intermediate", color: "var(--purple)", hex: "#7c3aed" }
};

// ── Screen Switcher ──────────────────────────────────────────
function switchScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
}

// ── Build Progress Dots ──────────────────────────────────────
function buildDots(total) {
    ui.progressDots.innerHTML = '';
    for (let i = 0; i < total; i++) {
        const d = document.createElement('div');
        d.className = 'step-dot';
        d.dataset.index = i;
        ui.progressDots.appendChild(d);
    }
}

function updateDots(current) {
    const dots = ui.progressDots.querySelectorAll('.step-dot');
    dots.forEach((d, i) => {
        d.classList.remove('done', 'current');
        if (i < current) d.classList.add('done');
        if (i === current) d.classList.add('current');
    });
}

// ── Load Question ────────────────────────────────────────────
function loadQuestion(index) {
    const q = state.questions[index];
    const cfg = levelConfig[q.level];
    const total = state.questions.length;

    // Progress
    ui.counter.textContent = `Question ${index + 1} / ${total}`;

    // Level badge
    ui.levelBadge.querySelector('span:last-child').textContent = cfg.en;
    ui.levelDot.style.color = cfg.color;

    // Progress bar
    ui.progressFill.style.width = `${((index + 1) / total) * 100}%`;
    ui.progressFill.style.background = `linear-gradient(90deg, ${cfg.hex}, ${colorShift(cfg.hex)})`;

    // Dots
    updateDots(index);

    // Level tag on card
    ui.qLevelTag.className = `q-level-tag ${cfg.tagClass}`;
    ui.qLevelText.textContent = cfg.en;

    // Question
    ui.qText.innerHTML = q.text;
    ui.qContent.innerHTML = q.content;

    // Options
    ui.options.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-checked', state.answers[index] === idx ? 'true' : 'false');
        btn.innerHTML = `
            <span class="option-num">${idx + 1}</span>
            <span class="option-text">${opt}</span>
            <svg class="option-check" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="4 10 8 14 16 6"/>
            </svg>
        `;
        if (state.answers[index] === idx) {
            btn.classList.add('selected');
            ui.btnNext.disabled = false;
        }
        btn.onclick = () => selectOption(index, idx, btn);
        ui.options.appendChild(btn);
    });

    // Next button state
    if (state.answers[index] === null) {
        ui.btnNext.disabled = true;
        ui.btnNext.classList.remove('btn-primary');
        ui.btnNext.classList.add('btn-secondary');
    }
}

// ── Color shift helper ──────────────────────────────────────
function colorShift(hex) {
    const map = { "#3b82f6": "#06b6d4", "#10b981": "#3b82f6", "#7c3aed": "#ec4899" };
    return map[hex] || hex;
}

// ── Select Option ────────────────────────────────────────────
function selectOption(qIndex, optIdx, clickedBtn) {
    // Deselect all
    ui.options.querySelectorAll('.option').forEach(b => {
        b.classList.remove('selected');
        b.setAttribute('aria-checked', 'false');
    });

    // Select clicked
    clickedBtn.classList.add('selected');
    clickedBtn.setAttribute('aria-checked', 'true');

    // Save
    state.answers[qIndex] = optIdx;

    // Enable next
    ui.btnNext.disabled = false;
    ui.btnNext.classList.add('btn-primary');
    ui.btnNext.classList.remove('btn-secondary');
}

// ── Form Submit ──────────────────────────────────────────────
ui.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('userFirstName').value.trim();
    const lastName = document.getElementById('userLastName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const formError = document.getElementById('form-error');

    // Validate required fields + basic email format
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!firstName || !lastName || !emailOk) {
        formError.style.display = 'block';
        if (!firstName) document.getElementById('userFirstName').focus();
        else if (!lastName) document.getElementById('userLastName').focus();
        else document.getElementById('userEmail').focus();
        return;
    }
    formError.style.display = 'none';

    state.userFirstName = firstName;
    state.userLastName = lastName;
    state.userEmail = email;
    state.userPurpose = document.getElementById('userPurpose').value;

    state.currentQuestionIndex = 0;
    state.score = 0;
    state.questions = generateTestSet();
    state.answers = new Array(state.questions.length).fill(null);

    buildDots(state.questions.length);
    loadQuestion(0);
    switchScreen('test');
});

// ── Next Button ──────────────────────────────────────────────
ui.btnNext.addEventListener('click', () => {
    const last = state.questions.length - 1;

    if (state.currentQuestionIndex < last) {
        state.currentQuestionIndex++;

        // Card slide animation
        ui.qCard.style.animation = 'none';
        void ui.qCard.offsetHeight;
        ui.qCard.style.animation = 'screenIn 0.4s var(--ease-out) both';

        loadQuestion(state.currentQuestionIndex);

        // Reset next button
        ui.btnNext.disabled = true;
        ui.btnNext.classList.remove('btn-primary');
        ui.btnNext.classList.add('btn-secondary');
    } else {
        finishTest();
    }
});

// ── Google Sheets Integration ────────────────────────────────
const SHEET_URL = "https://script.google.com/macros/s/AKfycbwX3UJpQOk5ITRQXfwQdl6lTuWR6pSNok7FWs8E69C4QPzuw5hSKJFmez0Xg1hqhtqEpg/exec";

function sendToGoogleSheets(data) {
    const params = new URLSearchParams(data).toString();
    const img = new Image();
    img.src = `${SHEET_URL}?${params}`;
}

// ── Finish Test ──────────────────────────────────────────────
function finishTest() {
    switchScreen('loading');

    // Staggered analysis steps
    const steps = ['a-step-1', 'a-step-2', 'a-step-3'];
    steps.forEach((id, i) => {
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.classList.add('visible');
        }, 400 + i * 500);
    });

    // Score calculation
    let total = 0;
    state.answers.forEach((ans, i) => {
        if (ans === state.questions[i].answer) {
            total += state.questions[i].points;
        }
    });
    state.score = Math.min(100, total);

    // Send results to Google Sheets
    const resultData = getResultData(state.score);
    const purposeEl = document.getElementById('userPurpose');
    const purposeText = purposeEl.options[purposeEl.selectedIndex].text;
    sendToGoogleSheets({
        firstName: state.userFirstName,
        lastName: state.userLastName,
        email: state.userEmail,
        purpose: purposeText,
        score: state.score,
        level: resultData.level,
        answers: state.answers.map((ans, i) =>
            ans === state.questions[i].answer ? "O" : "X"
        ).join("")
    });

    setTimeout(() => {
        resetLoadingSteps();
        showResults();
    }, 2200);
}

function resetLoadingSteps() {
    ['a-step-1', 'a-step-2', 'a-step-3'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('visible');
    });
}

// ── Level / Result Config ────────────────────────────────────
function getResultData(score) {
    if (score <= 20) return {
        level: "Level 1", desc: "Sejong Korean Vol. 1~2 Prep",
        feedback: "You're just starting your Korean journey! Begin with Korean alphabet (Hangeul), basic greetings, and simple vocabulary. A foundation course starting from consonants and vowels is recommended.",
        color: "#ef4444", tierCount: 1
    };
    if (score <= 40) return {
        level: "Level 2", desc: "Sejong Korean Vol. 2 (late) ~ 3",
        feedback: "You're familiar with Korean basics! Strengthen your everyday communication skills with more vocabulary, common sentence patterns, and survival Korean for daily life.",
        color: "#f59e0b", tierCount: 2
    };
    if (score <= 60) return {
        level: "Level 3", desc: "Sejong Korean Vol. 4~5 / TOPIK I Prep",
        feedback: "Great job — you've mastered beginner Korean! Now explore Korean in various social situations, tackle more complex grammar, and consider preparing for TOPIK I.",
        color: "#10b981", tierCount: 3
    };
    if (score <= 75) return {
        level: "Level 4", desc: "Sejong Korean Vol. 6 / TOPIK II (Lv.3) Prep",
        feedback: "You handle most daily conversations in Korean! Practice logical expression, intermediate vocabulary, and complex grammar to move toward fluency and TOPIK II Level 3.",
        color: "#3b82f6", tierCount: 4
    };
    if (score <= 90) return {
        level: "Level 5", desc: "Sejong Korean Vol. 7 / TOPIK II (Lv.4–5) Prep",
        feedback: "Excellent Korean proficiency! You can discuss news, current events, and social topics. An advanced course targeting TOPIK II Level 4–5 is perfect for you.",
        color: "#7c3aed", tierCount: 5
    };
    return {
        level: "Level 6", desc: "Sejong Korean Vol. 8+ / TOPIK II (Lv.6) Strategy",
        feedback: "Outstanding — near-native Korean proficiency! You have mastered complex grammar and nuanced expression. A supreme advanced course for professional or academic Korean is recommended.",
        color: "#ec4899", tierCount: 6
    };
}

// ── Show Results ─────────────────────────────────────────────
function showResults() {
    const data = getResultData(state.score);
    const circumference = 2 * Math.PI * 54; // r=54 → ~339.3

    // Name
    ui.resultName.textContent = `${state.userFirstName} ${state.userLastName}`.trim() || "User";

    // Score text
    ui.scoreText.textContent = state.score;

    // Level card
    ui.levelValue.textContent = data.level;
    ui.levelValue.style.color = data.color;
    ui.levelDesc.textContent = data.desc;
    ui.levelCard.style.color = data.color;

    // Tiers
    ui.levelTiers.querySelectorAll('.tier').forEach(t => {
        const n = parseInt(t.dataset.tier);
        t.classList.toggle('active', n <= data.tierCount);
        if (n <= data.tierCount) t.style.background = data.color;
    });

    // Feedback
    ui.feedbackText.textContent = data.feedback;

    // Score arc color
    ui.scoreArc.style.stroke = data.color;

    switchScreen('result');

    // Animate arc after paint
    requestAnimationFrame(() => {
        setTimeout(() => {
            const dash = (state.score / 100) * circumference;
            ui.scoreArc.style.strokeDasharray = `${dash} ${circumference}`;
        }, 80);
    });
}

// ── Restart ──────────────────────────────────────────────────
ui.btnRestart.addEventListener('click', () => {
    // Reset arc
    ui.scoreArc.style.strokeDasharray = `0 339`;

    // Reset form
    document.getElementById('userFirstName').value = '';
    document.getElementById('userLastName').value = '';
    document.getElementById('userEmail').value = '';
    document.getElementById('userPurpose').value = '';
    const formError = document.getElementById('form-error');
    if (formError) formError.style.display = 'none';

    switchScreen('onboarding');
});

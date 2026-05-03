// ========== AUDIO ==========
const AudioManager = (() => {
  const bgMusic = new Audio('assets/sounds/bg-music.mp3');
  bgMusic.volume = 0.25;
  bgMusic.loop = true;

  let bgStarted = false;
  document.addEventListener('click', () => {
    if (!bgStarted) { bgMusic.play().catch(() => {}); bgStarted = true; }
  }, { once: false });

  function ctx() {
    return new (window.AudioContext || window.webkitAudioContext)();
  }

  function tone(ac, type, freq, gain, start, end, freqEnd) {
    const osc = ac.createOscillator();
    const g = ac.createGain();
    osc.connect(g); g.connect(ac.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ac.currentTime + start);
    if (freqEnd) osc.frequency.exponentialRampToValueAtTime(freqEnd, ac.currentTime + end);
    g.gain.setValueAtTime(gain, ac.currentTime + start);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + end);
    osc.start(ac.currentTime + start);
    osc.stop(ac.currentTime + end + 0.01);
  }

  function playSnakeMove(dir) {
    try {
      const ac = ctx();
      const pitchMap = { right: 180, left: 160, up: 200, down: 140 };
      tone(ac, 'square', pitchMap[dir] || 180, 0.06, 0, 0.05, (pitchMap[dir] || 180) * 0.85);
    } catch(e) {}
  }

  function playEat() {
    try {
      const ac = ctx();
      tone(ac, 'sawtooth', 200, 0.25, 0, 0.08, 120);
      tone(ac, 'square', 440, 0.2, 0.04, 0.18, 880);
    } catch(e) {}
  }

  function playGoldenEat() {
    try {
      const ac = ctx();
      [523, 659, 784, 1047].forEach((f, i) => tone(ac, 'sine', f, 0.2, i*0.08, i*0.08+0.2));
    } catch(e) {}
  }

  function playDeath() {
    try {
      const ac = ctx();
      [400,320,260,200,150,100].forEach((f, i) =>
        tone(ac, i%2===0?'sawtooth':'square', f, 0.22, i*0.07, i*0.07+0.1)
      );
    } catch(e) {}
  }

  function playCookieCrack() {
    try {
      const ac = ctx();
      const t = ac.currentTime;
      const bufLen = Math.ceil(ac.sampleRate * 0.25);
      const buf = ac.createBuffer(1, bufLen, ac.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufLen; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufLen, 2);
      }
      const src = ac.createBufferSource();
      src.buffer = buf;
      const hiFilter = ac.createBiquadFilter();
      hiFilter.type = 'highpass'; hiFilter.frequency.value = 1800;
      const midFilter = ac.createBiquadFilter();
      midFilter.type = 'bandpass'; midFilter.frequency.value = 900; midFilter.Q.value = 1.2;
      const noiseGain = ac.createGain();
      src.connect(hiFilter); hiFilter.connect(noiseGain);
      src.connect(midFilter); midFilter.connect(noiseGain);
      noiseGain.connect(ac.destination);
      noiseGain.gain.setValueAtTime(0.7, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
      src.start(t); src.stop(t + 0.25);

      const thud = ac.createOscillator();
      const thudG = ac.createGain();
      thud.connect(thudG); thudG.connect(ac.destination);
      thud.type = 'sine';
      thud.frequency.setValueAtTime(220, t);
      thud.frequency.exponentialRampToValueAtTime(55, t + 0.18);
      thudG.gain.setValueAtTime(0.5, t);
      thudG.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
      thud.start(t); thud.stop(t + 0.22);

      const snapOsc = ac.createOscillator();
      const snapG = ac.createGain();
      snapOsc.connect(snapG); snapG.connect(ac.destination);
      snapOsc.type = 'square';
      snapOsc.frequency.setValueAtTime(3200, t + 0.02);
      snapOsc.frequency.exponentialRampToValueAtTime(800, t + 0.07);
      snapG.gain.setValueAtTime(0.18, t + 0.02);
      snapG.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      snapOsc.start(t + 0.02); snapOsc.stop(t + 0.09);

      [1047, 1319, 1568, 2093].forEach((f, i) => {
        const shimmerT = t + 0.15 + i * 0.07;
        tone(ac, 'sine', f, 0.14, 0.15 + i*0.07, 0.15 + i*0.07 + 0.4);
      });

      const whoosh = ac.createOscillator();
      const whooshG = ac.createGain();
      whoosh.connect(whooshG); whooshG.connect(ac.destination);
      whoosh.type = 'triangle';
      whoosh.frequency.setValueAtTime(200, t + 0.1);
      whoosh.frequency.exponentialRampToValueAtTime(1200, t + 0.45);
      whooshG.gain.setValueAtTime(0, t + 0.1);
      whooshG.gain.linearRampToValueAtTime(0.12, t + 0.25);
      whooshG.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
      whoosh.start(t + 0.1); whoosh.stop(t + 0.55);
    } catch(e) {}
  }

  function playCountdown() {
    try { const ac = ctx(); tone(ac, 'sine', 660, 0.3, 0, 0.15); } catch(e) {}
  }

  function playCountdownGo() {
    try {
      const ac = ctx();
      [523, 659, 784].forEach((f, i) => tone(ac, 'sine', f, 0.3, i*0.1, i*0.1+0.2));
    } catch(e) {}
  }

  function playClick() {
    try { const ac = ctx(); tone(ac, 'sine', 440, 0.15, 0, 0.08); } catch(e) {}
  }

  function playSelect() {
    try {
      const ac = ctx();
      tone(ac, 'square', 520, 0.16, 0, 0.08, 780);
      tone(ac, 'sine', 1040, 0.12, 0.04, 0.18);
    } catch(e) {}
  }

  function playShine() {
    try {
      const ac = ctx();
      [784, 1175, 1568, 2093].forEach((f, i) => tone(ac, 'sine', f, 0.18, i * 0.06, i * 0.06 + 0.3));
    } catch(e) {}
  }

  let spinTickTimeout = null;
  function playSpinStart() {
    try {
      stopSpinTick();
      const ac = ctx();
      tone(ac, 'sawtooth', 80, 0.28, 0, 0.5, 600);
      let delay = 60, count = 0;
      function tick() {
        if (count >= 60) return;
        try {
          const a = ctx();
          tone(a, 'square', count%2===0?900:750, 0.12, 0, 0.03);
        } catch(e) {}
        count++;
        delay = Math.min(delay + count * 0.8, 400);
        spinTickTimeout = setTimeout(tick, delay);
      }
      spinTickTimeout = setTimeout(tick, delay);
    } catch(e) {}
  }

  function stopSpinTick() {
    if (spinTickTimeout) { clearTimeout(spinTickTimeout); spinTickTimeout = null; }
  }

  function playSpinWin() {
    stopSpinTick();
    try {
      const ac = ctx();
      tone(ac, 'square', 600, 0.3, 0, 0.12, 300);
      [523,659,784,1047,1319].forEach((f,i) => tone(ac, 'sine', f, 0.25, 0.2+i*0.1, 0.2+i*0.1+0.28));
      [659,784,988,1319,1568].forEach((f,i) => tone(ac, 'triangle', f, 0.1, 0.22+i*0.1, 0.22+i*0.1+0.25));
    } catch(e) {}
  }

  return { playSnakeMove, playEat, playGoldenEat, playDeath, playCookieCrack,
           playCountdown, playCountdownGo, playClick, playSelect, playShine, playSpinStart, playSpinWin, stopSpinTick };
})();

// ========== STATE ==========
let currentTheme = null;
let pendingFortune = '';
let fortuneOpened = false;
let screenStack = ['welcome'];
let activePrizes = WHEEL_PRIZES;
const clientId = localStorage.getItem('fortunePopClientId') || crypto.randomUUID();
localStorage.setItem('fortunePopClientId', clientId);

// ========== QUIZ STATE ==========
let quizThemeKey = null;
let quizPath = [];     
let quizCurrentNode = null;

// ========== SCREEN MANAGEMENT ==========
function showScreen(id, push = true) {
  document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  if (id === 'welcome') screenStack = ['welcome'];
  if (push && screenStack[screenStack.length - 1] !== id) screenStack.push(id);
  document.getElementById('backBtn').classList.toggle('hidden', id === 'welcome');
  window.scrollTo(0, 0);
}

function transitionToScreen(id) {
  const fx = document.getElementById('transitionFx');
  fx.classList.remove('hidden', 'cloud-rise');
  AudioManager.playShine();
  requestAnimationFrame(() => fx.classList.add('cloud-rise'));
  setTimeout(() => showScreen(id), 520);
  setTimeout(() => fx.classList.add('hidden'), 1150);
}

document.getElementById('backBtn').addEventListener('click', () => {
  AudioManager.playClick();
  if (screenStack.length > 1) screenStack.pop();
  showScreen(screenStack[screenStack.length - 1] || 'welcome', false);
});

// ========== NAV ==========
document.getElementById('start').addEventListener('click', () => {
  AudioManager.playCookieCrack(); transitionToScreen('modeSelect');
});
document.getElementById('personalizedBtn').addEventListener('click', () => {
  AudioManager.playSelect(); showScreen('personalizedMode');
});
document.getElementById('snakeBtn').addEventListener('click', () => {
  AudioManager.playSelect(); showScreen('snakeMode'); resetSnakeGame();
});

// ========== PERSONALIZED: THEME SELECTION ==========
const themeCards = { romanceBtn:'romance', careerBtn:'career', goodJujuBtn:'goodJuju', wildCardBtn:'wildCard', vibeBoostBtn:'vibeBoost' };
Object.entries(themeCards).forEach(([btnId, themeKey]) => {
  document.getElementById(btnId).addEventListener('click', function() {
    AudioManager.playSelect();
    document.querySelectorAll('.personalized-card').forEach(c => c.classList.remove('selected'));
    this.classList.add('selected');
    currentTheme = themeKey;
  });
});

document.getElementById('revealFortuneBtn').addEventListener('click', () => {
  if (!currentTheme) return;
  AudioManager.playShine();
  startQuiz(currentTheme);
});

// ========== ADAPTIVE QUIZ ==========
function startQuiz(themeKey) {
  const tree = QUIZ_TREES[themeKey];
  quizThemeKey = themeKey;
  quizPath = [];
  quizCurrentNode = tree.start;

  document.getElementById('quizThemeBadge').querySelector('i').className = `fa-solid ${tree.icon}`;
  document.getElementById('quizThemeBadge').querySelector('i').style.color = tree.color;
  document.getElementById('quizThemeLabel').textContent = tree.label;

  showScreen('quizMode');
  renderQuizNode(tree, quizCurrentNode);
}

function renderQuizNode(tree, nodeId) {
  const node = tree.nodes[nodeId];
  const depth = quizPath.length;
  const isLast = node.options.every(o => !o.next);

  document.getElementById('quizStepLabel').textContent = `QUESTION ${depth + 1}`;
  document.getElementById('quizProgressFill').style.width = `${Math.min(100, (depth + 1) * 33.3)}%`;
  document.getElementById('quizQuestion').textContent = node.q;

  const optionsEl = document.getElementById('quizOptions');
  optionsEl.innerHTML = '';
  const letters = ['A','B','C','D'];
  let selectedOption = null;

  node.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-option';
    div.innerHTML = `<span class="quiz-option-letter">${letters[i]}</span><span class="quiz-option-text">${opt.text}</span>`;
    div.addEventListener('click', () => {
      AudioManager.playSelect();
      document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
      div.classList.add('selected');
      selectedOption = opt;
      nextBtn.classList.add('visible');
    });
    optionsEl.appendChild(div);
  });

  let nextBtn = document.querySelector('.quiz-next-btn');
  if (!nextBtn) {
    nextBtn = document.createElement('button');
    nextBtn.className = 'quiz-next-btn';
    document.querySelector('.quiz-container').appendChild(nextBtn);
  }
  nextBtn.textContent = isLast ? 'REVEAL *' : 'NEXT >';
  nextBtn.classList.remove('visible');

  nextBtn.onclick = async () => {
    if (!selectedOption) return;
    AudioManager.playShine();
    quizPath.push({ nodeId, answer: selectedOption.text, tags: selectedOption.tags || [] });

    if (selectedOption.next) {
      quizCurrentNode = selectedOption.next;
      renderQuizNode(tree, quizCurrentNode);
    } else {
      nextBtn.textContent = 'READING...';
      nextBtn.classList.remove('visible');
      pendingFortune = await resolveFortuneFromPath(tree);
      showFortuneReveal();
    }
  };
}

async function resolveFortuneFromPath(tree) {
  const tagCount = {};
  quizPath.forEach(step => {
    (step.tags || []).forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  let bestTag = null, bestCount = 0;
  Object.entries(tagCount).forEach(([tag, count]) => {
    if (count > bestCount) { bestCount = count; bestTag = tag; }
  });

  const pool = tree.tagPools[bestTag] || Object.values(tree.tagPools).flat();
  const fortunes = FORTUNES[quizThemeKey];
  const used = await fetchUsedFortunes();
  const fortune =
    pickUnusedFortune(fortunes, pool, used) ||
    pickUnusedFortune(fortunes, fortunes.map((_, i) => i), used) ||
    pickUnusedFortuneFromAnyTheme(used);
  return fortuneToId(fortune || fortunes[Math.floor(Math.random() * fortunes.length)]);
}

function fortuneToId(fortune) {
  return `${fortune.name}: ${fortune.text}`;
}

function isUsedFortune(fortune, used) {
  const id = fortuneToId(fortune);
  return [...used].some((usedId) => id === usedId || id.startsWith(usedId));
}

function pickUnusedFortune(fortunes, indexes, used) {
  const available = indexes
    .map((idx) => fortunes[idx])
    .filter((fortune) => fortune && !isUsedFortune(fortune, used));
  return available[Math.floor(Math.random() * available.length)];
}

function pickUnusedFortuneFromAnyTheme(used) {
  const available = Object.values(FORTUNES)
    .flat()
    .filter((fortune) => !isUsedFortune(fortune, used));
  return available[Math.floor(Math.random() * available.length)];
}

async function fetchUsedFortunes() {
  try {
    const res = await fetch('/api/fortunes/used');
    if (!res.ok) throw new Error('Used fortunes unavailable');
    return new Set(await res.json());
  } catch (_) {
    return new Set();
  }
}

// ========== FORTUNE REVEAL ==========
function showFortuneReveal() {
  fortuneOpened = false;
  showScreen('fortuneReveal');
  document.getElementById('fortuneCookieImg').src = 'assets/images/cookie_closed.png';
  document.getElementById('fortunePreOpen').classList.remove('hidden');
  document.getElementById('fortuneOpenedLayout').classList.add('hidden');
  document.getElementById('fortuneSpinRow').classList.add('hidden');
  document.getElementById('fortuneCookieWrap').onclick = revealFortune;
}

function revealFortune() {
  if (fortuneOpened) return;
  fortuneOpened = true;
  const wrap = document.getElementById('fortuneCookieWrap');
  wrap.onclick = null;
  const img = document.getElementById('fortuneCookieImg');
  img.classList.add('cracking');
  AudioManager.playCookieCrack();
  spawnSparkles();

  setTimeout(() => {
    img.classList.remove('cracking');
    document.getElementById('fortunePreOpen').classList.add('hidden');
    document.getElementById('fortuneOpenedLayout').classList.remove('hidden');

    const colonIdx = pendingFortune.indexOf(': ');
    if (colonIdx !== -1) {
      const name = pendingFortune.slice(0, colonIdx);
      const text = pendingFortune.slice(colonIdx + 2);
      document.getElementById('fortuneName').textContent = name;
      document.getElementById('fortuneText').textContent = text;
    } else {
      document.getElementById('fortuneName').textContent = '';
      document.getElementById('fortuneText').textContent = pendingFortune;
    }

    const spinRow = document.getElementById('fortuneSpinRow');
    spinRow.classList.remove('hidden');
    document.getElementById('fortuneToSpinBtn').onclick = () => {
      AudioManager.playClick(); showSpinWheel();
    };
  }, 650);
}

function spawnSparkles() {
  const container = document.getElementById('cookieSparkles');
  container.innerHTML = '';
  const colors = ['#FFD166','#FF4FD8','#00E5FF','#8A5CFF','#ffffff'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'sparkle-particle';
    const angle = (i / 20) * 360;
    const dist = 60 + Math.random() * 90;
    p.style.cssText = `left:50%;top:50%;background:${colors[i%colors.length]};--tx:${Math.cos(angle*Math.PI/180)*dist}px;--ty:${Math.sin(angle*Math.PI/180)*dist}px;animation-delay:${Math.random()*0.2}s`;
    container.appendChild(p);
  }
}

// ========== SNAKE GAME ==========
const board = document.getElementById('game-board');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const instructionText = document.getElementById('instruction-text');

const GRID = 25;
let snake, food, isGoldenFood, direction, nextDirection;
let gameInterval, timerInterval, gameSpeedDelay, timeLeft, gameStarted;
let foodEatenCount, goldenEatenCount;

function resetSnakeGame() {
  stopGame();
  snake = [{ x: 13, y: 13 }];
  food = generateFood();
  isGoldenFood = false;
  direction = nextDirection = 'right';
  gameSpeedDelay = 200;
  timeLeft = 30;
  foodEatenCount = goldenEatenCount = 0;
  gameStarted = false;
  timerEl.textContent = 'Timer 030';
  scoreEl.textContent = 'Score 000';
  instructionText.style.display = 'block';
  draw();
}

function generateFood() {
  let pos;
  do { pos = { x: Math.floor(Math.random()*GRID)+1, y: Math.floor(Math.random()*GRID)+1 }; }
  while (snake.some(s => s.x===pos.x && s.y===pos.y));
  return pos;
}

function draw() {
  const frag = document.createDocumentFragment();
  snake.forEach((seg, i) => {
    const el = document.createElement('div');
    el.className = i===0 ? 'snake-head' : 'snake';
    el.style.gridColumn = seg.x;
    el.style.gridRow = seg.y;
    if (i===0) {
      const eyePositions = { right:'top:3px;right:3px', left:'top:3px;left:3px', up:'top:3px;left:3px', down:'bottom:3px;left:3px' };
      const eyePositions2 = { right:'bottom:3px;right:3px', left:'bottom:3px;left:3px', up:'top:3px;right:3px', down:'bottom:3px;right:3px' };
      ['snake-eye','snake-eye'].forEach((cls, ei) => {
        const eye = document.createElement('div'); eye.className = cls;
        eye.style.cssText = (ei===0 ? eyePositions : eyePositions2)[direction];
        el.appendChild(eye);
      });
    }
    frag.appendChild(el);
  });
  if (gameStarted) {
    const foodEl = document.createElement('div');
    foodEl.className = isGoldenFood ? 'food-golden' : 'food';
    foodEl.style.gridColumn = food.x; foodEl.style.gridRow = food.y;
    frag.appendChild(foodEl);
  }
  board.innerHTML = ''; board.appendChild(frag);
  scoreEl.textContent = 'Score ' + String(snake.length-1).padStart(3,'0');
}

function gameTick() {
  direction = nextDirection;
  const head = { ...snake[0] };
  if (direction==='up') head.y--; else if (direction==='down') head.y++;
  else if (direction==='left') head.x--; else head.x++;
  snake.unshift(head);

  if (head.x===food.x && head.y===food.y) {
    if (isGoldenFood) { goldenEatenCount++; AudioManager.playGoldenEat(); }
    else AudioManager.playEat();
    foodEatenCount++;
    food = generateFood();
    isGoldenFood = Math.random() < 0.05;
    gameSpeedDelay = Math.max(25, gameSpeedDelay - (gameSpeedDelay>150?5:gameSpeedDelay>100?3:gameSpeedDelay>50?2:1));
    clearInterval(gameInterval);
    gameInterval = setInterval(gameTick, gameSpeedDelay);
  } else {
    snake.pop();
    AudioManager.playSnakeMove(direction);
  }

  const h = snake[0];
  if (h.x<1||h.x>GRID||h.y<1||h.y>GRID||snake.slice(1).some(s=>s.x===h.x&&s.y===h.y)) {
    AudioManager.playDeath(); stopGame(); setTimeout(showSnakeCookieSelect, 400);
  } else draw();
}

function startGame() {
  gameStarted = true;
  instructionText.style.display = 'none';
  timeLeft = 30;
  foodEatenCount = goldenEatenCount = 0;
  timerEl.textContent = 'Timer 030';
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = 'Timer ' + String(timeLeft).padStart(3,'0');
    if (timeLeft<=0) { stopGame(); setTimeout(showSnakeCookieSelect, 400); }
  }, 1000);
  gameInterval = setInterval(gameTick, gameSpeedDelay);
}

function stopGame() {
  clearInterval(gameInterval); clearInterval(timerInterval); gameStarted = false;
}

function runCountdown(cb) {
  const overlay = document.getElementById('countdown-overlay');
  const numEl = document.getElementById('countdown-number');
  overlay.classList.remove('hidden');
  let count = 3; numEl.textContent = count; AudioManager.playCountdown();
  const iv = setInterval(() => {
    count--;
    if (count<=0) {
      clearInterval(iv); numEl.textContent = 'GO!'; AudioManager.playCountdownGo();
      setTimeout(() => { overlay.classList.add('hidden'); cb(); }, 700);
    } else {
      numEl.textContent = count; AudioManager.playCountdown();
      numEl.style.animation = 'none'; numEl.offsetHeight; numEl.style.animation = '';
    }
  }, 1000);
}

document.addEventListener('keydown', e => {
  const active = document.querySelector('section:not(.hidden)');
  if (!active || active.id !== 'snakeMode') return;
  if (!gameStarted && (e.code==='Space'||e.key===' ')) { e.preventDefault(); runCountdown(startGame); return; }
  const map = { ArrowUp:'up',w:'up',W:'up',ArrowDown:'down',s:'down',S:'down',ArrowLeft:'left',a:'left',A:'left',ArrowRight:'right',d:'right',D:'right' };
  const opp = { up:'down',down:'up',left:'right',right:'left' };
  const d = map[e.key];
  if (d && d!==opp[direction]) { nextDirection=d; e.preventDefault(); }
});

let touchX=0, touchY=0;
document.addEventListener('touchstart', e => { touchX=e.touches[0].clientX; touchY=e.touches[0].clientY; }, {passive:true});
document.addEventListener('touchend', e => {
  const active = document.querySelector('section:not(.hidden)');
  if (!active || active.id!=='snakeMode') return;
  const dx = e.changedTouches[0].clientX-touchX, dy = e.changedTouches[0].clientY-touchY;
  if (!gameStarted) { runCountdown(startGame); return; }
  const opp = { up:'down',down:'up',left:'right',right:'left' };
  let d = null;
  if (Math.abs(dx)>Math.abs(dy)) d = dx>20?'right':dx<-20?'left':null;
  else d = dy>20?'down':dy<-20?'up':null;
  if (d && d!==opp[direction]) nextDirection=d;
}, {passive:true});

// ========== SNAKE COOKIE SELECT ==========
function showSnakeCookieSelect() {
  const count = Math.max(1, Math.min(foodEatenCount, 20));
  document.getElementById('snakeCookieSubtitle').textContent =
    `You collected (${foodEatenCount}) cookie${foodEatenCount!==1?'s':''}!`;
  const choices = document.getElementById('cookieChoices');
  choices.innerHTML = '';
  for (let i=0; i<count; i++) {
    const isGolden = goldenEatenCount>0 && i===0;
    const item = document.createElement('div');
    item.className = 'cookie-choice-item' + (isGolden?' golden':'');
    item.innerHTML = `<img src="assets/images/cookie_closed.png" alt="fortune cookie"/>`;
    item.addEventListener('click', async () => {
      AudioManager.playClick();
      if (isGolden) window._goldenSpin = true;
      const used = await fetchUsedFortunes();
      const allFortunes = Object.values(FORTUNES).flat();
      const f = pickUnusedFortune(allFortunes, allFortunes.map((_, i) => i), used) || allFortunes[Math.floor(Math.random()*allFortunes.length)];
      pendingFortune = fortuneToId(f);
      showFortuneReveal();
    });
    choices.appendChild(item);
  }
  showScreen('snakeCookieScreen');
}

// ========== SPIN WHEEL ==========
let wheelSpinning = false, wheelCurrentAngle = 0;
let spinCount = 0; 

function showSpinWheel() {
  spinCount = window._goldenSpin ? 2 : 1;
  window._goldenSpin = false;
  document.getElementById('spinSubtitle').textContent = spinCount > 1
    ? '* Golden Cookie! You get 2 spins! *'
    : 'Give it a spin and see what fate has in store.';
  showScreen('spinWheelScreen');
  loadPrizes();
  drawWheel(wheelCurrentAngle);
  document.getElementById('wheelPrizeDisplay').classList.add('hidden');
  document.getElementById('wheelPreSpin').style.display = 'block';
  document.querySelector('.wheel-pre-text').textContent = 'The wheel holds your prize...';
  document.querySelector('.wheel-pre-sub').textContent = 'Are you ready?';
  document.getElementById('spinBtn').style.visibility = 'visible';
  wheelSpinning = false;
}

function drawWheel(rotDeg) {
  const canvas = document.getElementById('wheelCanvas');
  const c = canvas.getContext('2d');
  const cx = canvas.width/2, cy = canvas.height/2, r = cx-10;
  const seg = (2*Math.PI)/activePrizes.length;
  c.clearRect(0,0,canvas.width,canvas.height);
  c.save(); c.translate(cx,cy); c.rotate(rotDeg*Math.PI/180); c.translate(-cx,-cy);
  activePrizes.forEach((p,i) => {
    const sa = i*seg - Math.PI/2, ea = sa+seg;
    c.beginPath(); c.moveTo(cx,cy); c.arc(cx,cy,r,sa,ea); c.closePath();
    c.fillStyle = shade(p.color, i%2===0?-30:0); c.fill();
    c.strokeStyle='rgba(255,255,255,0.15)'; c.lineWidth=2; c.stroke();
    c.save(); c.translate(cx,cy); c.rotate(sa+seg/2);
    c.textAlign='right'; c.fillStyle='#fff';
    c.font='bold 10px "Press Start 2P",monospace';
    c.shadowColor='rgba(0,0,0,0.5)'; c.shadowBlur=4;
    p.label.split(' ').forEach((w,wi,arr) => c.fillText(w, r-14, wi*13-(arr.length-1)*6.5));
    c.restore();
  });
  c.restore();
  c.beginPath(); c.arc(cx,cy,26,0,2*Math.PI);
  c.fillStyle='#0F0F14'; c.fill();
  c.strokeStyle='#7c3aed'; c.lineWidth=3; c.stroke();
  c.fillStyle='#a855f7'; c.font='16px "Press Start 2P"';
  c.textAlign='center'; c.textBaseline='middle'; c.fillText('*',cx,cy);
}

function shade(hex, amt) {
  const n=parseInt(hex.replace('#',''),16);
  const r=Math.min(255,Math.max(0,(n>>16)+amt));
  const g=Math.min(255,Math.max(0,((n>>8)&0xff)+amt));
  const b=Math.min(255,Math.max(0,(n&0xff)+amt));
  return `rgb(${r},${g},${b})`;
}

document.getElementById('spinBtn').addEventListener('click', async () => {
  if (wheelSpinning) return;
  wheelSpinning = true;
  document.getElementById('spinBtn').style.visibility = 'hidden';
  document.getElementById('wheelPrizeDisplay').classList.add('hidden');
  document.getElementById('wheelPreSpin').style.display = 'block';
  document.querySelector('.wheel-pre-text').textContent = 'Saving your spin...';
  document.querySelector('.wheel-pre-sub').textContent = 'Hold tight.';

  let prizeIdx;
  try {
    prizeIdx = await spinFromApi();
  } catch (err) {
    showSpinError(err.message);
    return;
  }

  AudioManager.playSpinStart();
  document.querySelector('.wheel-pre-text').textContent = 'The wheel is choosing...';
  document.querySelector('.wheel-pre-sub').textContent = 'Fate is locked in.';

  const segDeg = 360/activePrizes.length;
  const finalAngle = (360-(prizeIdx*segDeg+segDeg/2))%360;
  const extra = 5+Math.floor(Math.random()*3);
  const currNorm = ((wheelCurrentAngle%360)+360)%360;
  const total = extra*360 + ((finalAngle-currNorm)+360)%360;
  const dur = 4000, t0 = performance.now(), startA = wheelCurrentAngle;

  function animate(now) {
    const p = Math.min((now-t0)/dur,1);
    const a = startA + total*(1-Math.pow(1-p,3));
    wheelCurrentAngle = a; drawWheel(a);
    if (p<1) requestAnimationFrame(animate);
    else {
      wheelSpinning = false;
      AudioManager.stopSpinTick(); AudioManager.playSpinWin();
      showWheelPrize(prizeIdx);
    }
  }
  requestAnimationFrame(animate);
});

function showSpinError(message) {
  wheelSpinning = false;
  AudioManager.stopSpinTick();
  document.getElementById('spinBtn').style.visibility = 'visible';
  document.querySelector('.wheel-pre-text').textContent = 'Spin was not saved.';
  document.querySelector('.wheel-pre-sub').textContent = message || 'Please try again.';
}

function showWheelPrize(idx) {
  const p = activePrizes[idx];
  document.getElementById('wheelPreSpin').style.display = 'none';
  document.getElementById('wheelPrizeIcon').className = `fa-solid ${p.icon} wheel-prize-icon`;
  document.getElementById('wheelPrizeIcon').style.color = p.color;
  document.getElementById('wheelPrizeName').textContent = p.label;

  spinCount--;

  const isSpinAgain = p.label.toLowerCase().includes('spin again');
  if (isSpinAgain) {
    spinCount++; 
  }

  const display = document.getElementById('wheelPrizeDisplay');
  display.classList.remove('hidden');

  const btn = document.getElementById('playAgainBtn');
  if (spinCount > 0) {
    btn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> SPIN AGAIN!';
    btn.onclick = () => {
      AudioManager.playClick();
      display.classList.add('hidden');
      document.getElementById('wheelPreSpin').style.display = 'block';
      document.getElementById('spinBtn').style.visibility = 'visible';
    };
  } else {
    btn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> PLAY AGAIN';
    btn.onclick = () => {
      AudioManager.playClick();
      showScreen('welcome');
      document.querySelectorAll('.personalized-card').forEach(c => c.classList.remove('selected'));
      currentTheme = null; resetSnakeGame(); wheelCurrentAngle = 0;
      document.getElementById('spinBtn').style.visibility = 'visible';
      document.getElementById('wheelPrizeDisplay').classList.add('hidden');
      document.getElementById('wheelPreSpin').style.display = 'block';
    };
  }
}

async function loadPrizes() {
  try {
    const res = await fetch('/api/prizes');
    if (!res.ok) throw new Error('Prize API unavailable');
    const prizes = await res.json();
    if (prizes.length) {
      activePrizes = prizes;
      drawWheel(wheelCurrentAngle);
    }
  } catch (_) {
    activePrizes = WHEEL_PRIZES;
  }
}

async function spinFromApi() {
  const res = await fetch('/api/prizes/spin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clientId, fortuneId: pendingFortune })
  });
  const prize = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(prize.error || 'Please try again.');

  let idx = activePrizes.findIndex((p) => p._id === prize._id || p.label === prize.label);
  if (idx < 0) idx = activePrizes.push(prize) - 1;
  return idx;
}

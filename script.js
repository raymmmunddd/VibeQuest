// Define HTML elements
const board = document.getElementById('game-board');
const instructionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');
const score = document.getElementById('score');
const highScoreText = document.getElementById('highScore');
const timer = document.getElementById('timer');

// Define game variables
const gridSize = 25;
let snake = [{ x: 13, y: 13 }];
let food = generateFood();
let highScore = 0;
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;
let timeLeft = 30;
let timerInterval;

// Draw game map, snake, food
function draw() {
  board.innerHTML = '';
  drawSnake();
  drawFood();
  updateScore();
}

// Draw snake
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement('div', 'snake');
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
}

// Create a snake or food cube
function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

// Set the position of snake or food
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

// Draw food function
function drawFood() {
  if (gameStarted) {
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food);
    board.appendChild(foodElement);
  }
}

// Generate food
function generateFood() {
  const x = Math.floor(Math.random() * gridSize) + 1;
  const y = Math.floor(Math.random() * gridSize) + 1;
  return { x, y };
}

// Moving the snake
function move() {
  const head = { ...snake[0] };
  switch (direction) {
    case 'up':
      head.y--;
      break;
    case 'down':
      head.y++;
      break;
    case 'left':
      head.x--;
      break;
    case 'right':
      head.x++;
      break;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = generateFood();
    increaseSpeed();
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
      move();
      checkCollision();
      draw();
    }, gameSpeedDelay);
  } else {
    snake.pop();
  }
}

// Start game function
function startGame() {
  gameStarted = true; 
  document.body.classList.add('game-active');
  instructionText.style.display = 'none';
  logo.style.display = 'none';
  timeLeft = 30;
  updateTimerDisplay();
  timerInterval = setInterval(updateTimer, 1000);
  gameInterval = setInterval(() => {
    move();
    checkCollision();
    draw();
  }, gameSpeedDelay);
}

// Update timer
function updateTimer() {
  timeLeft--;
  updateTimerDisplay();
  if (timeLeft <= 0) {
    resetGame();
  }
}

// Update timer display
function updateTimerDisplay() {
  timer.textContent = 'Timer ' + timeLeft.toString().padStart(3, '0');
}

// Keypress event listener
function handleKeyPress(event) {
  if (
    (!gameStarted && event.code === 'Space') ||
    (!gameStarted && event.key === ' ')
  ) {
    startGame();
  } else {
    switch (event.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        direction = 'up';
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        direction = 'down';
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        direction = 'left';
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        direction = 'right';
        break;
    }
  }
}

document.addEventListener('keydown', handleKeyPress);

function increaseSpeed() {
  if (gameSpeedDelay > 150) {
    gameSpeedDelay -= 5;
  } else if (gameSpeedDelay > 100) {
    gameSpeedDelay -= 3;
  } else if (gameSpeedDelay > 50) {
    gameSpeedDelay -= 2;
  } else if (gameSpeedDelay > 25) {
    gameSpeedDelay -= 1;
  }
}

function checkCollision() {
  const head = snake[0];

  if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
    resetGame();
  }

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      resetGame();
    }
  }
}

function resetGame() {
  updateHighScore();
  stopGame();
  snake = [{ x: 13, y: 13 }];
  food = generateFood();
  direction = 'right';
  gameSpeedDelay = 200;
  timeLeft = 30;
  updateTimerDisplay();
  updateScore();
}

function updateScore() {
  const currentScore = snake.length - 1;
  score.textContent = 'Score ' + currentScore.toString().padStart(3, '0');
}

function stopGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  gameStarted = false;
  document.body.classList.remove('game-active');
  instructionText.style.display = 'block';
  logo.style.display = 'block';
}

function updateHighScore() {
  const currentScore = snake.length - 1;
  if (currentScore > highScore) {
    highScore = currentScore;
    highScoreText.textContent = 'High Score ' + highScore.toString().padStart(3, '0');
  }
  highScoreText.style.display = 'block';
}

// Mode selection logic
const welcome = document.getElementById("welcome");

const startBtn = document.getElementById("start");
const modeSelect = document.getElementById("modeSelect");

const personalizedBtn = document.getElementById("personalizedBtn");
const personalizedMode = document.getElementById("personalizedMode");

const snakeBtn = document.getElementById("snakeBtn");
const snakeMode = document.getElementById("snakeMode");

startBtn.addEventListener("click", () => {
    welcome.style.display = "none";
    modeSelect.style.display = "block";
});

personalizedBtn.addEventListener("click", () => {
  modeSelect.style.display = "none";
  personalizedMode.style.display = "block";
});

snakeBtn.addEventListener("click", () => {
  modeSelect.style.display = "none";
  snakeMode.style.display = "block";
});

// Music and sound effects
let audio = new Audio('assets/sounds/bg-music.mp3');

audio.volume = 0.3;
audio.loop = true;

document.addEventListener("click", () => {
  audio.play();
});
const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];

let currentEmojiIndex = 0;
let score = 0;
//

//
const guessInput = document.getElementById("guess-input");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");

let seconds = 30;
let timer;

function displayEmoji() {
  const descriptionElement = document.getElementById("description");
  descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
  timerElement.textContent = seconds;
}

function checkGuess() {
  const guess = guessInput.value.trim().toLowerCase();
  const correctEmoji = emojiDetails[currentEmojiIndex].description
    .trim()
    .toLowerCase();

  if (guess === correctEmoji) {
    resultElement.textContent = "Correct!";
    score++;
  } else {
    resultElement.textContent = "Wrong!";
  }
  console.log(score);
  scoreElement.textContent = `Score: ${score}`;
  guessInput.value = "";
  guessInput.focus();
  nextEmoji();
}

function nextEmoji() {
  currentEmojiIndex++;
  setTimeout(() => {
    resultElement.textContent = "";
  }, 1000);
  if (currentEmojiIndex === emojiDetails.length) {
    currentEmojiIndex = 0;
    score = 0;
  }
  displayEmoji();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    clearInterval(timer);
    seconds = 5;
    guessInput.disabled = false;
    startTimer();
    checkGuess();
  }
});

function startTimer() {
  timer = setInterval(() => {
    seconds--;
    timerElement.textContent = `${seconds}`;
    if (seconds == 0) {
      endGame();
    }
  }, 1000);
  seconds = 30;
}

function endGame() {
  clearInterval(timer);
  guessInput.disabled = true;
  timerElement.textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  displayEmoji();
  startTimer();
});

let answers = ["PYTHON", "JAVASCRIPT", "TAILWIND", "REACT", "LARAVEL"];
let clue = [
  "A versatile programming language named after a snake, loved for its simplicity.",
  "The language that brings interactivity to websites, often abbreviated as JS.",
  "A utility-first CSS framework for rapidly building custom designs.",
  "A JavaScript library for building dynamic user interfaces, created by Facebook.",
  "A PHP framework known for elegant syntax and robust web development tools.",
];

let answer = "";
let answer_ = "";
let lives = 10;

function generate() {
  let i = Math.floor(Math.random() * answers.length);
  answer = answers[i];
  answer_= "_".repeat(answer.length);
  document.getElementById("clue").textContent = clue[i];
  document.getElementById("answer").textContent = answer_.split("").join(" ");
  document.getElementById("lives").textContent = "Lives: " + lives;
  document.getElementById("wl").textContent = "";
   document.getElementById("gambar").src = "img/" + lives + ".png";
}

function checkAnswer() {
  let input = document.getElementById("input-letter").value.toUpperCase();
  document.getElementById("input-letter").value = "";

  if (input.length === 0 || lives === 0 || !answer_.includes("_"))
    return;

  let found = false;  let new1  = answer_.split("")

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === input) {
        answers[i] = input;
      found = true;
    }
  }

  if (!found) {
    lives--;
    updateGambar();
  }

   function updateGambar() {
      document.getElementById("gambar").src = "img/" + lives + ".jpg";
    }

  answer_ = answers.join("");
  document.getElementById("answer").textContent = answer_.split("").join(" ");
  document.getElementById("lives").textContent = "Lives: " + lives;
  document.getElementById("hangman").src = `images/${lives}.png`;

  check();
}

function check() {
  if (!answer_.includes("_")) {
    document.getElementById("status").textContent = "Kamu Menang!";
    document.getElementById("status").style.color = "green";

  } else if (lives === 0) {

    document.getElementById("status").textContent = "Kamu Kalah!";
    document.getElementById("status").style.color = "red";
  }
}

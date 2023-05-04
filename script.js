const playButton = document.querySelector(".reply-button");

const sounds = [
  "replies/bye.m4a",
  "replies/glad-you-enjoyed-it.m4a",
  "replies/no-problem.m4a",
  "replies/ok.m4a",
  "replies/thank-you.m4a",
  "replies/thanks-you-too.m4a",
  "replies/youre-very-welcome.m4a",
];

function playSound() {
  const sound = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
  sound.play();
}

playButton.addEventListener("click", playSound);

console.log('Hello! I hope you are having a nice day.');
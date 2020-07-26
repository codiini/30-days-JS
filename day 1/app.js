function playSound(e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if (!key) return;
  key.classList.remove("playing");
}
window.addEventListener("keyup", removeTransition);
window.addEventListener("keydown", playSound);

const context = new AudioContext();
const hfo = context.createOscillator();
function playSound() {
  hfo.frequency.value = 440.0;
  hfo.connect(context.destination);
  hfo.start(0);
  hfo.stop(1);
}
function stopSound() {
  hfo.stop(0);
}
const startButton = document.querySelector("#start");
startButton.addEventListener("click", function () {
  playSound();
});
const stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", function () {
  stopSound();
});

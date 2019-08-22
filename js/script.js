//Tempo máximo para responder uma pergunta
let seconds = 0;

function stopWatch() {
  seconds--;
  document.getElementById("display").innerHTML = seconds;
  console.log(seconds);
}

//setInterval -> método que chama um função em determinado intervalo
// window.setInterval(stopWatch, 1000);

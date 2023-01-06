const turnOn = document.getElementById('on');
const turnOff = document.getElementById('off');

function ligar() {
	document.body.style="background: white;";
}

function desligar() {
  document.body.style = "background: black;"
}

turnOn.addEventListener('click', ligar);
turnOff.addEventListener('click', desligar);

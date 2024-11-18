function plan () {
	document.getElementById('lamp-div').style.zIndex = '1';
	curtain.style.backgroundImage = 'none';
}

const curtain = document.getElementById('backgr');				// Поднятие занавеса по клику
function display_back() {
	curtain.style.transition = 'background-position 1s ease'
	curtain.style.backgroundPosition = 'center -100vh';
	setTimeout(plan, 800);
}

const activate = document.getElementById('action');

const light = document.getElementById('light');
const elements_light = document.getElementById('after-lamp');
let flag = 0;
function light_switch () {
	if (flag) {
		light.style.display = 'none';
		elements_light.style.display = 'none';
		activate.style.zIndex = '-1';
		flag = 0;
	}
	else {
		light.style.display = 'inline-block';
		elements_light.style.display = 'inline-block';
		activate.style.zIndex = '2';
		flag = 1;
	}
}

var rabbit = document.getElementById('rabbit');		//магия шляпы
var bird = document.getElementById('bird');

function sleep_animal () {
	bird.style.transition = 'top 0.5s ease'
	bird.style.top = '350px';
	
	var animal = rabbit;
	rabbit = bird;
	bird = animal;
}

function sleep_activate () {
	activate.style.zIndex = '2';
}

function magic () {
	activate.style.zIndex = '-1';
	setTimeout(sleep_activate, 1100);
	rabbit.style.transition = 'top 0.5s ease'
	rabbit.style.top = '400px';
	setTimeout(sleep_animal, 500);
}
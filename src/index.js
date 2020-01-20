import _ from 'lodash';

import './assets/sass/style.sass';
import Logo from './assets/img/pk-development.png';

import logIt from './assets/js/logger.js';

logIt("Logger here");

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';

  element.appendChild(btn);
  
  element.classList.add('hello');

  const myLogo = new Image();

	myLogo.src = Logo;

	btn.onclick = () => {
		logIt("Hello");
		alert("Hello World");
	}

  return element;
}

document.body.appendChild(component());

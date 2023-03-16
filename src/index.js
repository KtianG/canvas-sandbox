import _ from 'lodash';
import { branchOut, getRandomPastelColor } from './js/particlesFromRoot';

const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
const button = document.querySelector('.change-color');
let color = getRandomPastelColor();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
  x: null,
  y: null,
};

const handleMouseMove = e => {
  mouse.x = e.x;
  mouse.y = e.y;

  branchOut(mouse.x, mouse.y, color);
};

const handleResize = e => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const handleChangeColor = e => {
  color = getRandomPastelColor();
};

window.addEventListener('mousemove', _.throttle(handleMouseMove, 20));
window.addEventListener('resize', _.throttle(handleResize, 250));
button.addEventListener('click', handleChangeColor);

async function fadeOut() {
  var r = 0.003 + Math.random() * 0.1;
  ctx.fillStyle = 'rgba(36,36,36,' + r + ')';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  setTimeout(fadeOut, 20);
}

fadeOut();

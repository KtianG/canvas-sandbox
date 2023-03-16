import _ from 'lodash';
import { branchOut } from './js/particlesFromRoot';

const canvas = document.querySelector('#canvas1');
ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
  x: null,
  y: null,
};

const handleMouseMove = e => {
  mouse.x = e.x;
  mouse.y = e.y;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  branchOut(mouse.x, mouse.y);

  console.log(`x: ${mouse.x}, y: ${mouse.y}`);
};

const handleResize = e => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

window.addEventListener('mousemove', _.throttle(handleMouseMove, 250));
window.addEventListener('resize', _.throttle(handleResize, 250));

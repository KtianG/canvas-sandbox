import _ from 'lodash';
import { branchOut } from './js/particlesFromRoot';

const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
  x: null,
  y: null,
};

const handleMouseMove = e => {
  mouse.x = e.x;
  mouse.y = e.y;

  ctx.fillStyle = 'rgba(36, 36, 36,0.03)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  branchOut(mouse.x, mouse.y);
};

const handleResize = e => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

window.addEventListener('mousemove', _.throttle(handleMouseMove, 20));
window.addEventListener('resize', _.throttle(handleResize, 250));

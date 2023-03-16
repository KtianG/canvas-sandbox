const canvas = document.querySelector('#canvas1');
ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const edge = 80;

const mouse = {
  x: null,
  y: null,
};

const handleMouseMove = e => {
  mouse.x = e.x;
  mouse.y = e.y;
};

window.addEventListener('mousemove', handleMouseMove);

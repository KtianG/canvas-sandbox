export { canvas, ctx, controls_global, controls_module, mouse };

const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');

const controls_global = document.querySelector('.controls-global');
const controls_module = document.querySelector('.controls-module');

const mouse = {
  x: null,
  y: null,
};

export {
  canvas,
  ctx,
  controls_global,
  controls_module,
  mouse,
  active_self_moving,
  toggleActiveSelfMoving,
};

const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');

const controls_global = document.querySelector('.controls-global');
const controls_module = document.querySelector('.controls-module');

const mouse = {
  x: null,
  y: null,
};

let active_self_moving = false;

function toggleActiveSelfMoving() {
  active_self_moving = !active_self_moving;
}

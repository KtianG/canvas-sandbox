import _ from 'lodash';
import {
  mouseMoveRootsGenerator,
  handleMouseMove,
} from './js/rootsGenerator/mouseMoveRootsGenerator';
import { selfMoveRootsGenerator } from './js/rootsGenerator/selfMoveRootsGenerator';
import {
  canvas,
  ctx,
  controls_global,
  active_self_moving,
  toggleActiveSelfMoving,
} from './js/utility/constants';
import { fadeOut } from './js/utility/fadeOut';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let fade_interval;

const handleResize = e => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const handleGlobalControls = e => {
  if (e.target.id === 'mouseMoveRootsGenerator') {
    e.target.classList.toggle('button--active');
    if (e.target.dataset.on != 'true') {
      mouseMoveRootsGenerator();
      e.target.dataset.on = 'true';
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      e.target.dataset.on = 'false';
    }
  }

  if (e.target.id === 'self-moving') {
    toggleActiveSelfMoving();
    e.target.classList.toggle('button--active');

    if (active_self_moving) {
      selfMoveRootsGenerator();
      e.target.dataset.on = 'true';
    }
  }

  if (e.target.id === 'toggle-fade') {
    e.target.classList.toggle('button--active');
    if (e.target.dataset.on != 'true') {
      fade_interval = setInterval(fadeOut, 30);
      e.target.dataset.on = 'true';
    } else {
      clearInterval(fade_interval);
      e.target.dataset.on = 'false';
    }
  }

  if (e.target.id === 'clear') {
    ctx.fillStyle = 'rgb(36,36,36)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
};

window.addEventListener('resize', _.throttle(handleResize, 250));
controls_global.addEventListener('click', handleGlobalControls);

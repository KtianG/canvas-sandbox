import _ from 'lodash';
import { mouseMoveRootsGenerator } from './js/rootsGenerator/mouseMoveRootsGenerator';
import { selfMoveRootsGenerator } from './js/rootsGenerator/selfMoveRootsGenerator';
import {
  canvas,
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
    if (e.target.dataset.on != 'true') {
      mouseMoveRootsGenerator();
      e.target.dataset.on = 'true';
    }
  }

  if (e.target.id === 'self-moving') {
    toggleActiveSelfMoving();

    if (active_self_moving) {
      selfMoveRootsGenerator();
      e.target.dataset.on = 'true';
    }
  }

  if (e.target.id === 'toggle-fade') {
    if (e.target.dataset.on != 'true') {
      fade_interval = setInterval(fadeOut, 30);
      e.target.dataset.on = 'true';
    } else {
      clearInterval(fade_interval);
      e.target.dataset.on = 'false';
    }
  }
};

window.addEventListener('resize', _.throttle(handleResize, 250));
controls_global.addEventListener('click', handleGlobalControls);

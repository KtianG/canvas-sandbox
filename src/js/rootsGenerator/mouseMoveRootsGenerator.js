export { mouseMoveRootsGenerator };
import _ from 'lodash';
import { branchOut } from './branchOut';
import { getRandomColor } from '../utility/randomColors';
import { changeColor } from '../utility/changeColor';
import {
  canvas,
  controls_global,
  controls_module,
  mouse,
} from '../utility/constants';

let color = getRandomColor();

function mouseMoveRootsGenerator() {
  controls_module.innerHTML =
    '<button id="change-color" class="controls__button">Random Color</button>';
  const button = document.querySelector('#change-color');

  button.addEventListener('click', handleChangeColor);
  canvas.addEventListener('mousemove', handleMouseMove);
  controls_global.addEventListener('click', handleStop);
}

const handleMouseMove = _.throttle(e => {
  mouse.x = e.x;
  mouse.y = e.y;

  color = changeColor(color);
  branchOut(mouse.x, mouse.y, color, canvas);
}, 20);

const handleChangeColor = e => {
  color = getRandomColor();
};

const handleStop = e => {
  if (e.target.id === 'stop') {
    canvas.removeEventListener('mousemove', handleMouseMove);
    document.querySelector('#mouseMoveRootsGenerator').dataset.on = 'false';
    controls_module.innerHTML = '';
  }
};

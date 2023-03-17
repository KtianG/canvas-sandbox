export { mouseMoveRootsGenerator };
import _ from 'lodash';
import { branchOut } from './branchOut';
import { fadeOut } from '../utility/fadeOut';
import { getRandomColor } from '../utility/randomColors';
import { changeColor } from '../utility/changeColor';
import { canvas, controls_module, mouse } from '../utility/constants';

let color = getRandomColor();

function mouseMoveRootsGenerator() {
  controls_module.innerHTML =
    '<button id="change-color" class="controls__button">Random Color</button>';
  const button = document.querySelector('#change-color');

  button.addEventListener('click', handleChangeColor);
  canvas.addEventListener('mousemove', _.throttle(handleMouseMove, 20));
  const fade_interval = setInterval(fadeOut, 20);
}

const handleMouseMove = e => {
  mouse.x = e.x;
  mouse.y = e.y;

  color = changeColor(color);
  branchOut(mouse.x, mouse.y, color, canvas);
};

const handleChangeColor = e => {
  color = getRandomColor();
};

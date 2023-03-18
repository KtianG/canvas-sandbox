export { mouseMoveRootsGenerator, handleMouseMove };
import _ from 'lodash';
import { branchOut } from './branchOut';
import { getRandomColor } from '../utility/randomColors';
import { changeColor } from '../utility/changeColor';
import { canvas, mouse } from '../utility/constants';

let color = getRandomColor();

function mouseMoveRootsGenerator() {
  window.addEventListener('mousemove', handleMouseMove);
}

const handleMouseMove = _.throttle(e => {
  mouse.x = e.x;
  mouse.y = e.y;

  color = changeColor(color);
  branchOut(mouse.x, mouse.y, color);
}, 20);

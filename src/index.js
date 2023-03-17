import _ from 'lodash';
import { mouseMoveRootsGenerator } from './js/rootsGenerator/mouseMoveRootsGenerator';
import { fadeOut } from './js/utility/fadeOut';

import { canvas } from './js/utility/constants';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const handleResize = e => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
window.addEventListener('resize', _.throttle(handleResize, 250));

mouseMoveRootsGenerator();

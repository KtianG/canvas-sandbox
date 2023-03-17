export { selfMoveRootsGenerator };
import _ from 'lodash';
import { MovingGenerator } from './MovingGenerator';
import {
  canvas,
  controls_global,
  controls_module,
  mouse,
} from '../utility/constants';

async function selfMoveRootsGenerator() {
  for (let i = 0; i < 2; i++) {
    const generator = new MovingGenerator(canvas.width / 2, canvas.height / 2);
    generator.update();
  }
}

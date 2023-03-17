export { MovingGenerator };

import { canvas, active_self_moving } from '../utility/constants';
import { branchOut } from './branchOut';
import { getRandomColor } from '../utility/randomColors';
import { changeColor } from '../utility/changeColor';

class MovingGenerator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.v_x = (Math.random() - 0.5) * 2;
    this.v_y = (Math.random() - 0.5) * 2;
    this.maxVel = 5;
    this.color = getRandomColor();
  }

  getCoordinates() {
    return [this.x, this.y];
  }

  updateSpeed() {
    this.v_x += (Math.random() - 0.5) / 1;
    this.v_y += (Math.random() - 0.5) / 1;

    if (Math.abs(this.v_x) > this.maxVel) {
      this.v_x = this.v_x / 2;
    }

    if (Math.abs(this.v_y) > this.maxVel) {
      this.v_y = this.v_y / 2;
    }

    if (this.v_x + this.x < 0 || this.v_x + this.x > canvas.width) {
      this.v_x = -this.v_x;
    }

    if (this.v_y + this.y < 0 || this.v_y + this.y > canvas.height) {
      this.v_y = -this.v_y;
    }
  }

  updateCoordinates() {
    this.x += this.v_x;
    this.y += this.v_y;
  }

  update() {
    this.updateSpeed();
    this.updateCoordinates();
    branchOut(this.x, this.y, this.color);
    this.color = changeColor(this.color);

    if (active_self_moving) {
      const setNextUpdate = setTimeout(this.update.bind(this), 20);
    }
  }
}

export { RootParticle };

import { ctx } from '../utility/constants';

const edge = 100;

class RootParticle {
  constructor(x, y, color, centerX, centerY) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.centerX = centerX;
    this.centerY = centerY;
    this.speedX = 0;
    this.speedY = 0;
    this.strokeColor = color;
  }

  update() {
    this.speedX += (Math.random() - 0.5) / 4;
    this.speedY += (Math.random() - 0.5) / 4;

    this.x += this.speedX;
    this.y += this.speedY;

    const distanceX = this.x - this.centerX;
    const distanceY = this.y - this.centerY;
    const distance = (distanceX ** 2 + distanceY ** 2) ** 0.5;

    const radius = ((-distance / edge + 1) * edge) / 10;

    if (radius > 0) {
      requestAnimationFrame(this.update.bind(this));
      ctx.beginPath();
      ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.strokeStyle = this.strokeColor;
      ctx.stroke();
    }
  }
}

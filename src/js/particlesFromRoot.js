export { branchOut };

const edge = 100;
const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');

class Root {
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

function getRandomDarkColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 8);
  }
  return color;
}

function getRandomPastelColor() {
  let color = 'rgba(';
  for (let i = 0; i < 3; i++) {
    color += `${Math.floor(255 - Math.random() * 150)},`;
  }
  color += '1)';
  console.log(color);
  return color;
}

function branchOut(x, y) {
  const centerX = x;
  const centerY = y;
  for (let i = 0; i < 3; i++) {
    const root = new Root(x, y, getRandomPastelColor(), centerX, centerY);
    root.update();
  }
}

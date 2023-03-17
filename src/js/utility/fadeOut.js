export { fadeOut };
import { canvas, ctx } from './constants';

function fadeOut() {
  const r = 0.003 + Math.random() * 0.1;
  ctx.fillStyle = 'rgba(36,36,36,' + r + ')';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

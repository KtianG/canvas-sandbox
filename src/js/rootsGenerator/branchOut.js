export { branchOut };
import { RootParticle } from './RootParticle';

function branchOut(x, y, color) {
  const centerX = x;
  const centerY = y;
  for (let i = 0; i < 3; i++) {
    const root = new RootParticle(x, y, color, centerX, centerY);
    root.update();
  }
}

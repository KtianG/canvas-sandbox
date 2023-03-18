export { branchOut };
import { RootParticle } from './RootParticle';

function branchOut(x, y, color, branches = 3) {
  const centerX = x;
  const centerY = y;
  for (let i = 0; i < branches; i++) {
    const root = new RootParticle(x, y, color, centerX, centerY);
    root.update();
  }
}

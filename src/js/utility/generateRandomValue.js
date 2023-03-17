export { generateRandomValue };
function generateRandomValue(min, max) {
  const diff = max + 1 - min;
  const rand = Math.floor(Math.random() * diff) + min;
  return rand;
}

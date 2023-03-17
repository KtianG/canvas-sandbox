export { getRandomColor, getRandomDarkColor, getRandomPastelColor };

import { changeColor } from './changeColor';

function getRandomColor() {
  let color = 'rgba(';
  for (let i = 0; i < 3; i++) {
    color += `${Math.floor(Math.random() * 255)},`;
  }
  color += '1)';
  return color;
}

function getRandomDarkColor() {
  let color = 'rgba(';
  for (let i = 0; i < 3; i++) {
    color += `${Math.floor(Math.random() * 150)},`;
  }
  color += '1)';
  return color;
}

function getRandomPastelColor() {
  let color = 'rgba(';
  for (let i = 0; i < 3; i++) {
    color += `${Math.floor(255 - Math.random() * 105)},`;
  }
  color += '1)';
  return color;
}

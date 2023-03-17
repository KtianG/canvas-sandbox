export { changeColor };

import { generateRandomValue } from './generateRandomValue';

/**
 *
 * @param color - color value in rgb string - ex. rgba(r, g, b, a),
 *                where r,g,b are numerical values betweeen 0-255 and a is between 0 and 1
 */
function changeColor(color) {
  const trimmed_color = color.replace('rgba(', '').replace(',1)', '');
  const rgb_array = trimmed_color.split(',');
  let new_color = 'rgba(';

  for (let i = 0; i < 3; i++) {
    const change = generateRandomValue(-5, 5);
    const current_part = parseInt(rgb_array[i]);
    let new_value = 0;
    if (current_part > 200) {
      new_value = current_part + change - Math.floor(50 / (current_part - 200));
    } else if (current_part < 100) {
      new_value = current_part + change + Math.floor(100 / (2 * current_part));
    } else {
      new_value = current_part + change;
    }

    new_color += `${new_value}, `;
  }
  new_color += '1)';

  return new_color;
}

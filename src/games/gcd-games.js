import { getRandomNumber } from '../helpers.js';
import gameRun from '../index.js';

const gameDescriprion = 'Find the greatest common divisor of given numbers.';
const getGreatComonDivider = (num1, num2) => {
  const minNumber = Math.min(num1, num2);
  const maxNumber = Math.max(num1, num2);
  let divider = minNumber;
  for (let i = divider; i > 0; i -= 1) {
    if ((maxNumber % i === 0) && (minNumber % i === 0)) {
      divider = i;
      break;
    }
  } return divider;
};

export default () => {
  const getGameData = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const question = `${number1} ${number2}`;
    const correctAnswer = getGreatComonDivider(number1, number2);
    return [question, String(correctAnswer)];
  };

  gameRun(getGameData, gameDescriprion);
};

import { getRandomNumber } from '../helpers.js';
import gameLogic from '../index.js';

const gcdGame = () => {
  const oneRound = () => {
    const number1 = getRandomNumber() + 1;
    const number2 = getRandomNumber() + 1;
    const question = `${number1} ${number2}`;
    const minNumber = Math.min(number1, number2);
    const maxNumber = Math.max(number1, number2);
    let divider = minNumber;
    while (divider > 0) {
      if ((maxNumber % divider === 0) && (minNumber % divider === 0)) {
        break;
      } else {
        divider -= 1;
      }
    }
    return [question, String(divider)];
  };
  const gameTarget = 'Find the greatest common divisor of given numbers.';
  gameLogic(oneRound, gameTarget);
};

export default gcdGame;

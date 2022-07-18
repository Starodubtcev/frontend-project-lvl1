import { getRandomNumber } from '../helpers.js';
import gameRun from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

export default () => {
  const getGameData = () => {
    const number = getRandomNumber();
    const question = number;
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  gameRun(getGameData, gameDescription);
};

import { getRandomNumber } from '../helpers.js';
import gameRun from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => {
  let result = '';
  if (num % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  } return result;
};

const evenGameRun = () => {
  const getGameData = () => {
    const number1 = getRandomNumber();
    const question = number1;
    const correctAnswer = isEven(number1);
    return [question, correctAnswer];
  };

  gameRun(getGameData, gameDescription);
};

export default evenGameRun;

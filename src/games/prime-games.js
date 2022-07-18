import { getRandomNumber } from '../helpers.js';
import gameRun from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let minDivider = 2; minDivider < num; minDivider += 1) {
    if (num % minDivider === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const getGameData = () => {
    const number = getRandomNumber();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    const question = number;
    return [question, correctAnswer];
  };
  gameRun(getGameData, gameDescription);
};

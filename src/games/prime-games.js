import { getRandomNumber } from '../helpers.js';
import gameRun from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let minDivider = 2; minDivider < num; minDivider += 1) {
    if (num % minDivider === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number;
  return [question, correctAnswer];
};

export default () => gameRun(getGameData, gameDescription);

import { getRandomNumber } from '../helpers.js';
import gameRun from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const result = 'yes';
  for (let minDivider = 2; minDivider < num; minDivider += 1) {
    if (num % minDivider === 0) {
      return 'no';
    }
  }
  return result;
};

const primeGameRun = () => {
  const getGameData = () => {
    const number1 = getRandomNumber();
    const correctAnswer = isPrime(number1);
    const question = number1;
    return [question, correctAnswer];
  };
  gameRun(getGameData, gameDescription);
};

export default primeGameRun;

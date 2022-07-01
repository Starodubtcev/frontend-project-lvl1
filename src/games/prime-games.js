import { getRandomNumber } from '../helpers.js';
import gameLogic from '../index.js';

const primeGame = () => {
  const oneRound = () => {
    const number1 = getRandomNumber();
    let correctAnswer = '';
    for (let i = 2; i < number1; i += 1) {
      if (number1 % i !== 0) {
        correctAnswer = 'yes';
      } else {
        correctAnswer = 'no';
        i = number1;
      }
    }

    const question = number1;
    return [question, correctAnswer];
  };
  const gameTarget = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameLogic(oneRound, gameTarget);
};

export default primeGame;

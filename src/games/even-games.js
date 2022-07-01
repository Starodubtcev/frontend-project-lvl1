import { getRandomNumber } from '../helpers.js';
import gameLogic from '../index.js';

const evenGame = () => {
  const oneRound = () => {
    const number1 = getRandomNumber() + 1;
    const question = number1;
    let correctAnswer = '';
    if (number1 % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    return [question, correctAnswer];
  };

  const gameTarget = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameLogic(oneRound, gameTarget);
};

export default evenGame;

import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';
import greeting from '../cli.js';

const evenGame = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const oneRound = () => {
    const number1 = getRandomNumber() + 1;
    const question = readlineSync.question(`Question: ${number1}\nYour answer: `);
    let correctAnswer = '';
    if (number1 % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    return [question, correctAnswer];
  };

  gameLogic(oneRound, name);
};

export default evenGame;

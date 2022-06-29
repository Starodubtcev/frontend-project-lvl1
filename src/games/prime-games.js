import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';
import greeting from '../cli.js';

const primeGame = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const oneRound = () => {
    const number1 = getRandomNumber();
    let correctAnswer = '';
    for (let i = 2; i <= number1 / 2; i += 1) {
      if (number1 % i === 0 || number1 === 2) {
        correctAnswer = 'no';
        i = number1;
      } else {
        correctAnswer = 'yes';
      }
    }

    const question = readlineSync.question(`Question: ${number1} \nYour answer: `);
    return [question, correctAnswer];
  };
  gameLogic(oneRound, name);
};

export default primeGame;

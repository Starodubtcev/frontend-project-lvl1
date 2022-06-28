import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';
import greeting from '../cli.js';

const gcdGame = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  const oneRound = () => {
    const number1 = getRandomNumber() + 1;
    const number2 = getRandomNumber() + 1;
    const question = readlineSync.question(`Question: ${number1} ${number2}\nYour answer: `);
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
  gameLogic(oneRound, name);
};

export default gcdGame;

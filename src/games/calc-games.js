import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';
import greeting from '../cli.js';

const calcGame = () => {
  const name = greeting();
  console.log('What is the result of the expression?');

  const oneRound = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const action = ['+', '-', '*'];
    const getAction = action[getRandomNumber() % 3];
    const getResult = (num1, num2, character) => {
      switch (character) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        default:
          return 'incorrect action';
      }
    };
    const question = readlineSync.question(`Question: ${number1} ${getAction} ${number2}\nYour answer: `);
    const correctAnswer = String(getResult(number1, number2, getAction));
    return [question, correctAnswer];
  };

  gameLogic(oneRound, name);
};

export default calcGame;

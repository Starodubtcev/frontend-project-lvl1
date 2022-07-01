import { getRandomNumber } from '../helpers.js';
import gameLogic from '../index.js';

const calcGame = () => {
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
    const question = `${number1} ${getAction} ${number2}`;
    const correctAnswer = String(getResult(number1, number2, getAction));
    return [question, correctAnswer];
  };
  const gameTarget = 'What is the result of the expression?';
  gameLogic(oneRound, gameTarget);
};

export default calcGame;

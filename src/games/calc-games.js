import { getRandomNumber } from '../helpers.js';
import gameRun from '../index.js';

const gameDescription = 'What is the result of the expression?';
const calcGameRun = () => {
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

  const getGameData = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const action = ['+', '-', '*'];
    const getAction = action[getRandomNumber() % 3];
    const question = `${number1} ${getAction} ${number2}`;
    const correctAnswer = String(getResult(number1, number2, getAction));
    return [question, correctAnswer];
  };

  gameRun(getGameData, gameDescription);
};

export default calcGameRun;

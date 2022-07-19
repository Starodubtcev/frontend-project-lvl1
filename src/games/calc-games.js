import { getRandomNumber } from '../helpers.js';
import gameRun from '../index.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Oups! Sorry... there is mistake in code. Please contact to loteran@icloud.com';
  }
};

const getGameData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operations = ['+', '-', '*'];
  const roundOperator = operations[getRandomNumber(0, operations.length - 1)];
  const question = `${number1} ${roundOperator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, roundOperator));
  return [question, correctAnswer];
};

export default () => gameRun(getGameData, gameDescription);

import readlineSync from 'readline-sync';
import { greeting } from './helpers.js';

const gameLogic = (getGameData, gameTarget) => {
  const name = greeting();
  console.log(gameTarget);
  for (let countRound = 3; countRound > 0; countRound -= 1) {
    const [question, correctAnswer] = getGameData();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameLogic;

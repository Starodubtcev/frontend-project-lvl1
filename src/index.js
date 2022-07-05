import readlineSync from 'readline-sync';
import { greeting } from './helpers.js';

const gameRun = (getGameData, gameDescription) => {
  const name = greeting();
  console.log(gameDescription);
  const countRound = 3;
  for (let i = 0; i < countRound; i += 1) {
    const [question, correctAnswer] = getGameData();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameRun;

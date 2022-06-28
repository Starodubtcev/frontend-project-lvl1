import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';
import greeting from '../cli.js';

const calcGame = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');

  const oneRound = () => {
    const numberStart = getRandomNumber();
    const progressionLength = 5 + Math.round(getRandomNumber() / 20);
    const progressionStep = Math.round(getRandomNumber() / 10) + 1;
    const progression = [numberStart];
    let element = numberStart;
    for (let i = 0; i < progressionLength - 1; i += 1) {
      element += progressionStep;
      progression.push(element);
    }

    const emptyElement = Math.floor(Math.random() * (progression.length));
    const correctAnswer = String(progression[emptyElement]);
    progression[emptyElement] = '..';
    const question = readlineSync.question(`Question: ${progression.join(' ')}\nYour answer: `);
    return [question, correctAnswer];
  };
  gameLogic(oneRound, name);
};

export default calcGame;

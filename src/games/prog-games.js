import { getRandomNumber } from '../helpers.js';
import gameLogic from '../index.js';

const calcGame = () => {
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
    const question = `${progression.join(' ')}`;
    return [question, correctAnswer];
  };
  const gameTarget = 'What number is missing in the progression?';
  gameLogic(oneRound, gameTarget);
};

export default calcGame;

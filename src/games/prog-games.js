import { getRandomNumber } from '../helpers.js';
import gameRun from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const progressionGameRun = () => {
  const getProgression = () => {
    const progressionStep = getRandomNumber(1, 10);
    const progressionStart = getRandomNumber();
    const progressionLength = getRandomNumber(5, 10);
    const progression = [progressionStart];
    let element = progressionStart;
    for (let i = 1; i < progressionLength; i += 1) {
      element += progressionStep;
      progression.push(element);
    }
    return progression;
  };

  const getGameData = () => {
    const roundProgression = getProgression();
    const emptyElement = getRandomNumber(1, roundProgression.length);
    const correctAnswer = String(roundProgression[emptyElement - 1]);
    roundProgression[emptyElement - 1] = '..';
    const question = `${roundProgression.join(' ')}`;
    return [question, correctAnswer];
  };

  gameRun(getGameData, gameDescription);
};

export default progressionGameRun;

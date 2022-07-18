import { getRandomNumber } from '../helpers.js';
import gameRun from '../index.js';

const gameDescription = 'What number is missing in the progression?';
export default () => {
  const getProgression = (startNumber, step, length) => {
    const progression = [startNumber];
    let element = startNumber;
    for (let i = 1; i < length; i += 1) {
      element += step;
      progression.push(element);
    }
    return progression;
  };

  const getGameData = () => {
    const progressionStart = getRandomNumber();
    const progressionStep = getRandomNumber(1, 10);
    const progressionLength = getRandomNumber(5, 10);
    const roundProgression = getProgression(progressionStart, progressionStep, progressionLength);
    const emptyElement = getRandomNumber(1, roundProgression.length);
    const correctAnswer = String(roundProgression[emptyElement - 1]);
    roundProgression[emptyElement - 1] = '..';
    const question = `${roundProgression.join(' ')}`;
    return [question, correctAnswer];
  };

  gameRun(getGameData, gameDescription);
};

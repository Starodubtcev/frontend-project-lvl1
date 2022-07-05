import { getRandomNumber } from '../helpers.js';
import gameRun from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const progressionGameRun = () => {
  const getEmptyProgElement = (numStart, progLength, progStep) => {
    const prog = [numStart];
    let element = numStart;
    for (let i = 0; i < progLength - 1; i += 1) {
      element += progStep;
      prog.push(element);
    }
    const emptyElement = Math.floor(Math.random() * (progLength));
    const missedNumber = String(prog[emptyElement]);
    prog[emptyElement] = '..';
    return [prog, missedNumber];
  };

  const getGameData = () => {
    const numberStart = getRandomNumber();
    const maxRandomNumber = 100;
    const minProgLength = 5;
    const maxProgLength = 10;
    const progLengthIndicator = maxRandomNumber / (maxProgLength - minProgLength);
    const progressionLength = minProgLength + Math.round(getRandomNumber() / progLengthIndicator);
    const minProgStep = 1;
    const maxProgStep = 11;
    const progStepIndicator = maxRandomNumber / (maxProgStep - minProgStep);
    const progressionStep = Math.round(getRandomNumber() / progStepIndicator) + minProgStep;
    const progData = getEmptyProgElement(numberStart, progressionLength, progressionStep);
    const question = `${progData[0].join(' ')}`;
    return [question, progData[1]];
  };

  gameRun(getGameData, gameDescription);
};

export default progressionGameRun;

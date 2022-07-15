import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
export { greeting, getRandomNumber };

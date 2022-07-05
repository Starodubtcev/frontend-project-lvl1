import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const getRandomNumber = () => Math.floor(Math.round(Math.random() * 100) + 1);
export { greeting, getRandomNumber };

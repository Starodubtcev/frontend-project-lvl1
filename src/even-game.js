import readlineSync from 'readline-sync';

export default (name) => {
  const possitiveAnswer = 'yes';
  const negativeAnswer = 'no';
  console.log(`Answer "${possitiveAnswer}" if the number is even, otherwise answer "${negativeAnswer}".`);

  const randomNumber = () => Math.round(Math.random() * 100);

  let i = 0;
  while (i < 3) {
    const questionNumber = randomNumber();
    const answer = readlineSync.question(`Question: ${questionNumber}\nYour answer: `);
    let correctAnswer = '';
    if (questionNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if ((questionNumber % 2 === 0 && answer === 'yes') || (questionNumber % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      i += 4;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';
import greeting from '../cli.js';

const evenGame = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const oneRound = () => {
    const number1 = getRandomNumber() + 1;
    const question = readlineSync.question(`Question: ${number1}\nYour answer: `);
    let correctAnswer = '';
    if (number1 % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    return [question, correctAnswer];    

  };

  gameLogic(oneRound, name);
};

export default evenGame;




//import readlineSync from 'readline-sync';
//import getRandomNumber from '../getRandomNumber.js';

//console.log(getRandomNumber());
//const number1 = getRandomNumber();

//const question = readlineSync.question(`Question: ${number1}\nYour answer: `);
//console.log(question);
//const gameName = 'Answer "yes" if the number is even, otherwise answer "no".';
//console.log(gameName);

//let correctAnswer = ''; 
//if (number1 % 2 === 0) {
  //correctAnswer = 'yes';
//} else {
  //correctAnswer = 'no';
//}
//console.log(correctAnswer);


//export default (name) => {
 // const possitiveAnswer = 'yes';
  //const negativeAnswer = 'no';
  //console.log(`Answer "${possitiveAnswer}" if the number is even, otherwise answer "${negativeAnswer}".`);

  //const randomNumber = () => Math.round(Math.random() * 100);

//  let i = 0;
  //while (i < 3) {
    //const questionNumber = randomNumber();
    //const answer = readlineSync.question(`Question: ${questionNumber}\nYour answer: `);
    //let correctAnswer = '';
    //if (questionNumber % 2 === 0) {
     // correctAnswer = 'yes';
    //} else {
     // correctAnswer = 'no';
    //}
    //if ((questionNumber % 2 === 0 && answer === 'yes') || (questionNumber % 2 !== 0 && answer === 'no')) {
     // console.log('Correct!');
      //i += 1;
    //} else {
    //  console.log(`'${answer}' is wrong answer;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
     // i += 4;
   // }
  //}
  //if (i === 3) {
   // console.log(`Congratulations, ${name}!`);
 // }
//};

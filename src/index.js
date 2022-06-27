const gameLogic = (game, name) => {
  let countRound = 0;
  while (countRound < 3) {
    const [question, correctAnswer] = game();
    const answer = question;
    if (answer === correctAnswer) {
      console.log('Correct!');
      countRound += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again. ${name}!`);
      countRound += 4;
    }
    if (countRound === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default gameLogic;

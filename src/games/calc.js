import { getRandom } from '../cli.js';
import { answerCheck, getAnswer } from '../index.js';

const randMax = 25;
export const stray = 'What is the result of the expression?';
export const a = 3;

const operations = ['+', '-', '*'];

export const brainCalc = (name) => {
  const [number1, number2] = [getRandom(0, randMax), getRandom(0, randMax)];
  const operation = getRandom(0, 2);
  let correctAnswer;
  switch (operation) {
    case 0:
      correctAnswer = number1 + number2;
      break;
    case 1:
      correctAnswer = number1 - number2;
      break;
    case 2:
      correctAnswer = number1 * number2;
      break;
    default:
      return 0;
  }
  const question = `${number1} ${operations[operation]} ${number2}`;
  const answer = getAnswer(question);
  return answerCheck(answer, correctAnswer, name);
};
// ATLANT

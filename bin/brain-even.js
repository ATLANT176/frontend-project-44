import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const brain_even = () => {
    const name = greetUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.prompt('Your answer: ');
        const isEven = (num) => num % 2 === 0;
        if ((isEven(randomNumber) && userAnswer === 'yes') || (!isEven(randomNumber) && userAnswer === 'no')) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no')`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}

export default brain_even();

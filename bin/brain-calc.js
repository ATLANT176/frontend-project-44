#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const operators = ['+', '-', '*'];

const brain_calc = () => {
    const name = greetUser();
    for (let i = 0; i < 3; i++) {
        const random1 = Math.floor(Math.random() * 100);
        const random2 = Math.floor(Math.random() * 100);
        const operator = Math.floor(Math.random() * (operators.length));
        console.log('What is the result of the expression?');
        console.log(`Question: ${random1} ${operators[operator]} ${random2}`);
        switch (operator) {
            case '+': 
                rightAnswer = random1 + random2;
            break;
            case '-':
                rightAnswer = random1 - random2;
            break;
            case '*':
                rightAnswer = random1 * random2;
            break;
        }
        const userAnswer = readlineSync.prompt('Your answer: ');
        if (rightAnswer === userAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
            console.log(`Let's try again, ${name}`);
            return;
        }
    }
    console.log(`Congratulations, ${name}`);
}

export default brain_calc();
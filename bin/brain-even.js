#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const isEven = (num) => num % 2 === 0;
const generateRandomNumber = () => Math.floor(Math.random() * 100);
const askQuestion = (number) => {
    console.log(`Question: ${number}`);
    return readlineSync.prompt('Your answer: ');
};
const checkAnswer = (randomNumber, userAnswer) => {
    if ((isEven(randomNumber) && userAnswer === 'yes') || (!isEven(randomNumber) && userAnswer === 'no')) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'`);
        return false;
    }
};
const braineven = () => {
    const name = greetUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i++) {
        const randomNumber = generateRandomNumber();
        const userAnswer = askQuestion(randomNumber);
        const isCorrect = checkAnswer(randomNumber, userAnswer);
        if (!isCorrect) {
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};
export default braineven();

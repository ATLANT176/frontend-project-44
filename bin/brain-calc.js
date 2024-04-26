#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js'
import { gameStart, lose } from '../src/index.js';

const operators = ['+', '-', '*'];

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const generateRandomOperator = () => operators[Math.floor(Math.random() * operators.length)];

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return 0;
  }
};

export const brainCalc = (name) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const random1 = generateRandomNumber();
    const random2 = generateRandomNumber();
    const operator = generateRandomOperator();
    console.log(`Question: ${random1} ${operator} ${random2}`);
    const userAnswer = readlineSync.question('Your answer:');
    const rightAnswer = calculateExpression(random1, random2, operator);
    if (parseInt(userAnswer, 10) === rightAnswer) {
      return 1;
    }
    lose(userAnswer, rightAnswer, name); 
    return 0;
  }
  console.log(`Congratulations, ${name}!`);
};

const gameName = brainCalc;
const name = greetUser();
gameStart(name, gameName, 3);

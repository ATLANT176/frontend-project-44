import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export function greetUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export const getRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

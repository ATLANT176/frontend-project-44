import readlineSync from 'readline-sync'
import { greetUser } from '../src/cli.js'

const gcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1

const brainGCD = () => {
  const name = greetUser()
  console.log('Find the greatest common divisor of given numbers.')
  for (let i = 0; i < 3; i++) {
    const number1 = generateRandomNumber()
    const number2 = generateRandomNumber()
    console.log(`Question: ${number1} ${number2}`)
    const userAnswer = readlineSync.question('Your answer: ')
    const correctAnswer = gcd(number1, number2).toString()
    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default brainGCD()

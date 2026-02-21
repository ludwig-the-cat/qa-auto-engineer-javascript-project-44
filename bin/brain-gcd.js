#!/usr/bin/env node
import readlineSync from 'readline-sync'

const getGcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const getRoundData = () => {
  const num1 = Math.floor(Math.random() * 50) + 1
  const num2 = Math.floor(Math.random() * 50) + 1
  const correctAnswer = String(getGcd(num1, num2))

  return {
    question: `${num1} ${num2}`,
    correctAnswer,
  }
}

const runBrainGcd = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Find the greatest common divisor of given numbers.')

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i++) {
    const roundData = getRoundData()

    console.log(`Question: ${roundData.question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === roundData.correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${roundData.correctAnswer}'.`,
      )
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

runBrainGcd()

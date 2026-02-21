#!/usr/bin/env node
import readlineSync from 'readline-sync'

const getRoundData = () => {
  const num1 = Math.floor(Math.random() * 25) + 1
  const num2 = Math.floor(Math.random() * 25) + 1

  // Случайный выбор операции: 0 -> +, 1 -> -, 2 -> *
  const randOp = Math.floor(Math.random() * 3)
  let operation
  let correctAnswer

  if (randOp === 0) {
    operation = '+'
    correctAnswer = num1 + num2
  }
  else if (randOp === 1) {
    operation = '-'
    correctAnswer = num1 - num2
  }
  else {
    operation = '*'
    correctAnswer = num1 * num2
  }

  return {
    question: `${num1} ${operation} ${num2}`,
    correctAnswer: String(correctAnswer),
  }
}

const runBrainCalc = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('What is the result of the expression?')

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

runBrainCalc()

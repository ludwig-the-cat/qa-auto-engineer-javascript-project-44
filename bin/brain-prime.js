#!/usr/bin/env node
import readlineSync from 'readline-sync'

// Функция проверки на простое число
const isPrime = (number) => {
  if (number <= 1) return false
  if (number <= 3) return true

  if (number % 2 === 0 || number % 3 === 0) return false

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false
    }
  }
  return true
}

const getRoundData = () => {
  const number = Math.floor(Math.random() * 100) + 1
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return {
    question: String(number),
    correctAnswer,
  }
}

const runBrainPrime = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

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

runBrainPrime()

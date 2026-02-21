#!/usr/bin/env node
import readlineSync from 'readline-sync'

const getProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

const getRoundData = () => {
  const start = Math.floor(Math.random() * 50) + 1
  const step = Math.floor(Math.random() * 10) + 1
  const length = Math.floor(Math.random() * 6) + 5 // От 5 до 10 чисел

  const progression = getProgression(start, step, length)
  const hiddenIndex = Math.floor(Math.random() * length)

  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'

  const question = progression.join(' ')

  return {
    question,
    correctAnswer,
  }
}

const runBrainProgression = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('What number is missing in the progression?')

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

runBrainProgression()

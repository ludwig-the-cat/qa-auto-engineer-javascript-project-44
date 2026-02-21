#!/usr/bin/env node
import readlineSync from 'readline-sync'

const runBrainEven = () => {
  // Приветствие
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i++) {
    // Генерация числа (1-100)
    const number = Math.floor(Math.random() * 100) + 1

    // Определение правильного ответа (предикат)
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no'

    // Вопрос пользователю
    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ')

    // Проверка ответа
    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return // Завершение игры при ошибке
    }
  }

  // Победа
  console.log(`Congratulations, ${name}!`)
}

runBrainEven()

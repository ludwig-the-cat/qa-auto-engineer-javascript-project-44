#!/usr/bin/env node
import readlineSync from 'readline-sync'

const runBrainEven = () => {
  // Приветствие
  console.log('Welcome to the Brain Games!')

  // ИСПРАВЛЕНИЕ: Разделяем вывод вопроса и чтение ввода
  console.log('May I have your name?')
  const name = readlineSync.question()

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

    // ИСПРАВЛЕНИЕ: Разделяем вывод подсказки и чтение ввода
    console.log('Your answer:')
    const userAnswer = readlineSync.question()

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

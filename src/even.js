const RULE = 'Answer "yes" if the number is even, otherwise answer "no".'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRound = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
  return {
    question: String(number),
    correctAnswer,
  }
}

export { RULE, getRound }

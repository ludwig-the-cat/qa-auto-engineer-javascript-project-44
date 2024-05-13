import readlineSync from 'readline-sync';

let name;
function showGreeting() {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
}

export default showGreeting;
#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+): Adds two numbers together
 * - Subtraction (-): Subtracts the second number from the first
 * - Multiplication (*): Multiplies two numbers together
 * - Division (/): Divides the first number by the second
 * - Modulo (%): Returns the remainder of dividing the first number by the second
 * - Exponentiation (**): Raises the first number to the power of the second
 * - Square Root (sqrt): Returns the square root of a number (usage: sqrt <number>)
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Calculate square root of a number
function squareRoot(num) {
  const a = parseFloat(num);
  if (isNaN(a)) {
    return 'Error: Invalid number input';
  }
  if (a < 0) {
    return 'Error: Cannot take square root of a negative number';
  }
  return Math.sqrt(a);
}

// Perform calculation based on operation
function calculate(num1, operator, num2) {
  // Square root only requires one operand
  if (operator === 'sqrt') {
    return squareRoot(num1);
  }

  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    return 'Error: Invalid number input';
  }

  switch (operator) {
    case '+':
      // Addition: adds two numbers together
      return a + b;
    case '-':
      // Subtraction: subtracts the second number from the first
      return a - b;
    case '*':
      // Multiplication: multiplies two numbers together
      return a * b;
    case '/':
      // Division: divides the first number by the second
      if (b === 0) {
        return 'Error: Division by zero';
      }
      return a / b;
    case '%':
      // Modulo: returns the remainder of dividing the first number by the second
      if (b === 0) {
        return 'Error: Division by zero';
      }
      return a % b;
    case '**':
      // Exponentiation: raises the first number to the power of the second
      return Math.pow(a, b);
    default:
      return 'Error: Invalid operator';
  }
}

// Display welcome message and instructions
function displayWelcome() {
  console.log('\n=================================');
  console.log('   Node.js CLI Calculator');
  console.log('=================================');
  console.log('\nSupported Operations:');
  console.log('  + : Addition');
  console.log('  - : Subtraction');
  console.log('  * : Multiplication');
  console.log('  / : Division');
  console.log('  % : Modulo (remainder)');
  console.log('  ** : Exponentiation');
  console.log('  sqrt : Square Root (usage: sqrt <number>)');
  console.log('\nUsage: Enter calculation in format: number operator number');
  console.log('       For square root: sqrt <number>');
  console.log('Example: 5 + 3');
  console.log('         2 ** 8');
  console.log('         sqrt 16');
  console.log('Type "exit" or "quit" to close the calculator\n');
}

// Main calculator loop
function runCalculator() {
  displayWelcome();

  rl.on('line', (input) => {
    const trimmedInput = input.trim().toLowerCase();

    if (trimmedInput === 'exit' || trimmedInput === 'quit') {
      console.log('\nThank you for using the calculator. Goodbye!\n');
      rl.close();
      return;
    }

    // Parse input: expect format "number operator number" or "sqrt number"
    const parts = input.trim().split(/\s+/);

    // Handle square root: "sqrt <number>"
    if (parts.length === 2 && parts[0].toLowerCase() === 'sqrt') {
      const result = squareRoot(parts[1]);
      console.log(`Result: ${result}\n`);
      rl.prompt();
      return;
    }

    if (parts.length !== 3) {
      console.log('Error: Please enter in format: number operator number');
      console.log('       For square root: sqrt <number>');
      console.log('Example: 5 + 3  or  sqrt 16\n');
      rl.prompt();
      return;
    }

    const [num1, operator, num2] = parts;
    const result = calculate(num1, operator, num2);

    console.log(`Result: ${result}\n`);
    rl.prompt();
  });

  rl.setPrompt('> ');
  rl.prompt();
}

// Start the calculator
if (require.main === module) {
  runCalculator();
}

module.exports = { calculate, squareRoot };

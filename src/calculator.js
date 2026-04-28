#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+): Adds two numbers together
 * - Subtraction (-): Subtracts the second number from the first
 * - Multiplication (*): Multiplies two numbers together
 * - Division (/): Divides the first number by the second
 * - Modulo (%): Returns the remainder of division
 * - Power (^): Returns base raised to the exponent
 * - Square Root (sqrt): Returns the square root of a number
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Perform calculation based on operation
function calculate(num1, operator, num2) {
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
    default:
      return 'Error: Invalid operator';
  }
}

// Modulo operation: returns the remainder of a divided by b
function modulo(a, b) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return 'Error: Invalid number input';
  }

  if (numB === 0) {
    return 'Error: Division by zero';
  }

  return numA % numB;
}

// Power operation: returns base raised to the exponent
function power(base, exponent) {
  const numBase = parseFloat(base);
  const numExponent = parseFloat(exponent);

  if (isNaN(numBase) || isNaN(numExponent)) {
    return 'Error: Invalid number input';
  }

  return Math.pow(numBase, numExponent);
}

// Square root operation: returns the square root of n with error handling for negative numbers
function squareRoot(n) {
  const num = parseFloat(n);

  if (isNaN(num)) {
    return 'Error: Invalid number input';
  }

  if (num < 0) {
    return 'Error: Cannot calculate square root of a negative number';
  }

  return Math.sqrt(num);
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
  console.log('\nUsage: Enter calculation in format: number operator number');
  console.log('Example: 5 + 3');
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

    // Parse input: expect format "number operator number"
    const parts = input.trim().split(/\s+/);

    if (parts.length !== 3) {
      console.log('Error: Please enter in format: number operator number');
      console.log('Example: 5 + 3\n');
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

module.exports = { calculate, modulo, power, squareRoot };

const { calculate, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {
  
  // ============================================
  // ADDITION TESTS
  // ============================================
  describe('Addition (+)', () => {
    test('should add 2 + 3 to equal 5 (from example)', () => {
      expect(calculate('2', '+', '3')).toBe(5);
    });

    test('should add positive numbers', () => {
      expect(calculate('10', '+', '20')).toBe(30);
      expect(calculate('100', '+', '250')).toBe(350);
    });

    test('should add negative numbers', () => {
      expect(calculate('-5', '+', '-3')).toBe(-8);
      expect(calculate('-10', '+', '-15')).toBe(-25);
    });

    test('should add positive and negative numbers', () => {
      expect(calculate('10', '+', '-5')).toBe(5);
      expect(calculate('-10', '+', '5')).toBe(-5);
    });

    test('should add decimal numbers', () => {
      expect(calculate('2.5', '+', '3.5')).toBe(6);
      expect(calculate('1.25', '+', '2.75')).toBe(4);
    });

    test('should add zero', () => {
      expect(calculate('0', '+', '0')).toBe(0);
      expect(calculate('5', '+', '0')).toBe(5);
      expect(calculate('0', '+', '10')).toBe(10);
    });

    test('should handle large numbers', () => {
      expect(calculate('999999', '+', '1')).toBe(1000000);
    });
  });

  // ============================================
  // SUBTRACTION TESTS
  // ============================================
  describe('Subtraction (-)', () => {
    test('should subtract 10 - 4 to equal 6 (from example)', () => {
      expect(calculate('10', '-', '4')).toBe(6);
    });

    test('should subtract positive numbers', () => {
      expect(calculate('20', '-', '10')).toBe(10);
      expect(calculate('100', '-', '25')).toBe(75);
    });

    test('should subtract to get negative result', () => {
      expect(calculate('5', '-', '10')).toBe(-5);
      expect(calculate('10', '-', '20')).toBe(-10);
    });

    test('should subtract negative numbers', () => {
      expect(calculate('-5', '-', '-3')).toBe(-2);
      expect(calculate('-10', '-', '-15')).toBe(5);
    });

    test('should subtract decimal numbers', () => {
      expect(calculate('5.5', '-', '2.5')).toBe(3);
      expect(calculate('10.75', '-', '5.25')).toBe(5.5);
    });

    test('should subtract zero', () => {
      expect(calculate('10', '-', '0')).toBe(10);
      expect(calculate('0', '-', '5')).toBe(-5);
    });

    test('should subtract same numbers to get zero', () => {
      expect(calculate('5', '-', '5')).toBe(0);
      expect(calculate('100', '-', '100')).toBe(0);
    });
  });

  // ============================================
  // MULTIPLICATION TESTS
  // ============================================
  describe('Multiplication (*)', () => {
    test('should multiply 45 * 2 to equal 90 (from example)', () => {
      expect(calculate('45', '*', '2')).toBe(90);
    });

    test('should multiply positive numbers', () => {
      expect(calculate('5', '*', '6')).toBe(30);
      expect(calculate('10', '*', '10')).toBe(100);
    });

    test('should multiply by zero', () => {
      expect(calculate('5', '*', '0')).toBe(0);
      expect(calculate('0', '*', '10')).toBe(0);
      expect(calculate('0', '*', '0')).toBe(0);
    });

    test('should multiply by one', () => {
      expect(calculate('5', '*', '1')).toBe(5);
      expect(calculate('1', '*', '10')).toBe(10);
    });

    test('should multiply negative numbers', () => {
      expect(calculate('-5', '*', '-3')).toBe(15);
      expect(calculate('-10', '*', '2')).toBe(-20);
      expect(calculate('3', '*', '-4')).toBe(-12);
    });

    test('should multiply decimal numbers', () => {
      expect(calculate('2.5', '*', '4')).toBe(10);
      expect(calculate('1.5', '*', '2')).toBe(3);
      expect(calculate('0.5', '*', '0.5')).toBe(0.25);
    });

    test('should multiply large numbers', () => {
      expect(calculate('1000', '*', '1000')).toBe(1000000);
    });
  });

  // ============================================
  // DIVISION TESTS
  // ============================================
  describe('Division (/)', () => {
    test('should divide 20 / 5 to equal 4 (from example)', () => {
      expect(calculate('20', '/', '5')).toBe(4);
    });

    test('should divide positive numbers', () => {
      expect(calculate('10', '/', '2')).toBe(5);
      expect(calculate('100', '/', '4')).toBe(25);
      expect(calculate('50', '/', '10')).toBe(5);
    });

    test('should divide to get decimal result', () => {
      expect(calculate('5', '/', '2')).toBe(2.5);
      expect(calculate('10', '/', '4')).toBe(2.5);
      expect(calculate('7', '/', '2')).toBe(3.5);
    });

    test('should divide by one', () => {
      expect(calculate('10', '/', '1')).toBe(10);
      expect(calculate('25', '/', '1')).toBe(25);
    });

    test('should divide negative numbers', () => {
      expect(calculate('-10', '/', '2')).toBe(-5);
      expect(calculate('10', '/', '-2')).toBe(-5);
      expect(calculate('-10', '/', '-2')).toBe(5);
    });

    test('should divide decimal numbers', () => {
      expect(calculate('5.5', '/', '1.1')).toBe(5);
      expect(calculate('7.5', '/', '2.5')).toBe(3);
    });

    test('should handle division by zero', () => {
      expect(calculate('10', '/', '0')).toBe('Error: Division by zero');
      expect(calculate('0', '/', '0')).toBe('Error: Division by zero');
      expect(calculate('100', '/', '0')).toBe('Error: Division by zero');
    });

    test('should divide zero by a number', () => {
      expect(calculate('0', '/', '5')).toBe(0);
      expect(calculate('0', '/', '10')).toBe(0);
    });
  });

  // ============================================
  // ERROR HANDLING TESTS
  // ============================================
  describe('Error Handling', () => {
    test('should handle invalid numbers', () => {
      expect(calculate('abc', '+', '5')).toBe('Error: Invalid number input');
      expect(calculate('5', '+', 'xyz')).toBe('Error: Invalid number input');
      expect(calculate('abc', '+', 'xyz')).toBe('Error: Invalid number input');
    });

    test('should handle invalid operators', () => {
      expect(calculate('5', '^', '2')).toBe('Error: Invalid operator');
      expect(calculate('5', '&', '2')).toBe('Error: Invalid operator');
    });

    test('should handle empty strings', () => {
      expect(calculate('', '+', '5')).toBe('Error: Invalid number input');
      expect(calculate('5', '+', '')).toBe('Error: Invalid number input');
    });

    test('should handle undefined/null values', () => {
      expect(calculate(undefined, '+', '5')).toBe('Error: Invalid number input');
      expect(calculate('5', '+', null)).toBe('Error: Invalid number input');
    });
  });

  // ============================================
  // MODULO TESTS
  // ============================================
  describe('Modulo (%)', () => {
    test('should return remainder of 10 % 3 = 1', () => {
      expect(calculate('10', '%', '3')).toBe(1);
    });

    test('should return 0 when evenly divisible', () => {
      expect(calculate('10', '%', '5')).toBe(0);
      expect(calculate('20', '%', '4')).toBe(0);
    });

    test('should handle modulo with decimal numbers', () => {
      expect(calculate('5.5', '%', '2')).toBeCloseTo(1.5);
    });

    test('should handle modulo by zero', () => {
      expect(calculate('10', '%', '0')).toBe('Error: Division by zero');
      expect(calculate('0', '%', '0')).toBe('Error: Division by zero');
    });

    test('should handle modulo with negative numbers', () => {
      expect(calculate('-10', '%', '3')).toBe(-1);
      expect(calculate('10', '%', '-3')).toBe(1);
    });
  });

  // ============================================
  // EXPONENTIATION TESTS
  // ============================================
  describe('Exponentiation (**)', () => {
    test('should calculate 2 ** 3 = 8', () => {
      expect(calculate('2', '**', '3')).toBe(8);
    });

    test('should calculate power of zero', () => {
      expect(calculate('5', '**', '0')).toBe(1);
      expect(calculate('100', '**', '0')).toBe(1);
    });

    test('should calculate power of one', () => {
      expect(calculate('5', '**', '1')).toBe(5);
      expect(calculate('10', '**', '1')).toBe(10);
    });

    test('should calculate zero to a power', () => {
      expect(calculate('0', '**', '5')).toBe(0);
    });

    test('should calculate negative exponents', () => {
      expect(calculate('2', '**', '-1')).toBe(0.5);
      expect(calculate('4', '**', '-1')).toBe(0.25);
    });

    test('should calculate fractional exponents', () => {
      expect(calculate('4', '**', '0.5')).toBe(2);
      expect(calculate('9', '**', '0.5')).toBe(3);
    });

    test('should handle large exponents', () => {
      expect(calculate('2', '**', '10')).toBe(1024);
    });
  });

  // ============================================
  // SQUARE ROOT TESTS
  // ============================================
  describe('Square Root (sqrt)', () => {
    test('should calculate sqrt of 16 = 4', () => {
      expect(squareRoot('16')).toBe(4);
    });

    test('should calculate sqrt of perfect squares', () => {
      expect(squareRoot('4')).toBe(2);
      expect(squareRoot('9')).toBe(3);
      expect(squareRoot('25')).toBe(5);
      expect(squareRoot('100')).toBe(10);
    });

    test('should calculate sqrt of non-perfect squares', () => {
      expect(squareRoot('2')).toBeCloseTo(1.4142135);
      expect(squareRoot('3')).toBeCloseTo(1.7320508);
    });

    test('should calculate sqrt of zero', () => {
      expect(squareRoot('0')).toBe(0);
    });

    test('should calculate sqrt of decimal numbers', () => {
      expect(squareRoot('0.25')).toBe(0.5);
      expect(squareRoot('6.25')).toBe(2.5);
    });

    test('should handle negative numbers', () => {
      expect(squareRoot('-1')).toBe('Error: Cannot take square root of a negative number');
      expect(squareRoot('-9')).toBe('Error: Cannot take square root of a negative number');
    });

    test('should handle invalid input', () => {
      expect(squareRoot('abc')).toBe('Error: Invalid number input');
      expect(squareRoot('')).toBe('Error: Invalid number input');
      expect(squareRoot(undefined)).toBe('Error: Invalid number input');
    });

    test('should support sqrt via calculate function', () => {
      expect(calculate('16', 'sqrt', null)).toBe(4);
      expect(calculate('9', 'sqrt', null)).toBe(3);
      expect(calculate('-4', 'sqrt', null)).toBe('Error: Cannot take square root of a negative number');
    });
  });

  // ============================================
  // COMPREHENSIVE TEST SUITE
  // ============================================
  describe('All Example Operations from Image', () => {
    test('2 + 3 = 5', () => {
      expect(calculate('2', '+', '3')).toBe(5);
    });

    test('10 - 4 = 6', () => {
      expect(calculate('10', '-', '4')).toBe(6);
    });

    test('45 * 2 = 90', () => {
      expect(calculate('45', '*', '2')).toBe(90);
    });

    test('20 / 5 = 4', () => {
      expect(calculate('20', '/', '5')).toBe(4);
    });
  });
});

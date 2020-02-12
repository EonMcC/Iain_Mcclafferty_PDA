var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  it('should add 1 to 4 and get 5', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  })
  it('should subtract 4 from 7 and get 3', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })
  it('should multiply 3 by 5 and get 15', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15);
  })
  it('should divide 21 by 7 and get 3', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })
  it('should concatenate multiple number button clicks', function() {
    calculator.runningTotal = 3;
    calculator.newTotal = false;
    calculator.numberClick(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 34);
  })
  it('should chain multiple operations together', function() {
    calculator.runningTotal = 10;
    calculator.previousTotal = 10;
    calculator.previousOperator = '*';
    calculator.operatorClick('+');
    const actual = calculator.previousOperator;
    assert.strictEqual(actual, '+');
  })
  it('should clear the running total without affecting the calculation', function() {
    calculator.previousOperator = '+';
    calculator.previousTotal = 40;
    calculator.runningTotal = 10;
    calculator.clearClick();
    const actualOperator = calculator.previousOperator;
    const actualTotal = calculator.previousTotal;
    assert.strictEqual(actualOperator, '+');
    assert.strictEqual(actualTotal, 40);
  })

});

const { expect } = require('@jest/globals')
const functions = require('./functions')

test('should return the number of the arguments expected by the passed function', () => {
    expect(functions.funcLength((a, b, c) => a + b + c)).toEqual(3)
})
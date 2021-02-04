const { expect } = require('@jest/globals')
const functions = require('./functions')

// funcLength
test('should return the number of the arguments expected by the passed function', () => {
  expect(functions.funcLength((a, b, c) => a + b + c)).toEqual(3)
})

test('should return the name of the passed function', () => {
  const addTwoNumbers = (a, b) => a + b
  expect(functions.funcName(addTwoNumbers)).toEqual('addTwoNumbers')
})

// funcCall
test('should call the passed function with the provided this value and individual arguments', () => {
  const obj = {
    firstName: 'Dale',
    lastName: 'Cooper',
    email: 'dale@twinpeaks.co.uk',
    accessLevel: 3,
  }
  expectedOutput =
    'Hello, Dale Cooper. Your access Level is 3. Profile active? true. Any issues to submit? false.'
  expect(functions.funcCall.call(obj, true, false)).toEqual(expectedOutput)
})

// funcApply
test('should return a mapped array that utilises a passed this value and arguments passed as an array', () => {
  const obj = {
    firstName: 'Dale',
    lastName: 'Cooper',
    email: 'dale@twinpeaks.com',
    accessLevel: 3,
  }
  const inputArr = ['firstName', 'lastName', 'email', 'accessLevel']
  expect(functions.funcApply.apply(obj, inputArr)).toEqual([
    'Dale',
    'Cooper',
    'dale@twinpeaks.com',
    3,
  ])
})

// funcBind
test('should return a string using both values from the bound this object and the bound argument', () => {
  const obj = {
    userName: 'Audrey',
    accessLevel: 2
  }
  const boundFuncBind = functions.funcBind.bind(obj, true)
  expect(boundFuncBind()).toEqual('Audrey, your access level is currently 2. Profile active? true.')
})

// funcToString
test('should return the passed function as a string', () => {
  const funcInput = () => 'Stay awesome!'
  expect(functions.funcToString(funcInput)).toEqual("() => 'Stay awesome!'")
})

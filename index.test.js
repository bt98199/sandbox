const {
  describe,
  it,
  expect,
  matchers 
} = require('./index')

let executes = 0
const noop = () => { executes += 1 }

describe('describe', () => {
  it('returns a function', () => {
    const actual = describe('', noop)

    expect(executes).toBe(1)
  }) 
})

describe('expect', () => {
  it('returns an object', () => {
    const actual = expect(true)

    expect(typeof actual).toBe('object')
    expect(typeof actual.toBe).toBe('function')
  })
})

describe('matchers', () => {
  describe('toBe', () => {
    it('works', () => {
      const actual = matchers('1').toBe('1')

      expect(actual).toBe(true)
    })
  })
})
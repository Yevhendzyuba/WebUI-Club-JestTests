const { describe, expect } = require('@jest/globals');
const calcNum = require('../js/script1');


describe('calcNum function: ', () => {
    test('Should count amount of numbers which multiple to 3 and not multiple to 5', () => {
        expect(calcNum([1, 3, 5, 6, 12, 24, 48, 9, 10])).toBe(6)
    })
    test('Should return 0', () => {
        expect(calcNum([5, 10, 15, 1, 2, 4, 7, 25, 45])).toBe(0)
    })
    test('Should return 3 with negative numbers', () => {
        expect(calcNum([-10, -6, -5, -15, -9, -24])).toBe(3)
    })
})
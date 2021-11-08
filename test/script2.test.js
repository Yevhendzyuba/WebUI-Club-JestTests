const { describe, expect } = require('@jest/globals');
const pasc = require('../js/script2');

describe('pasc function: ', () => {
    test('Should return an first number lines Pascal triangle', () => {
        expect(pasc(4)).toStrictEqual([
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1]
        ])
    })
    test('If number 0, should return undefined', () => {
        expect(pasc(0)).toBeUndefined()
    })
    test('If number 1, should return [[1]]', () => {
        expect(pasc(1)).toStrictEqual([
            [1]
        ])
    })
    test('If number 2, should return [[1],[1,1]]', () => {
        expect(pasc(2)).toStrictEqual([
            [1],
            [1, 1]
        ])
    })
})
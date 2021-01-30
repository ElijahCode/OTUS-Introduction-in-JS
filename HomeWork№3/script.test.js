import {getSumOfNumbers,
        getTableOfMultiplication,
        getSumOfOddNumbers} from './script.js'

describe('Test for exercise #1', () => {
    it('Return 3825 for arguments (50, 100)', () => {
        expect(getSumOfNumbers(50, 100)).toBe(3825);
    });
});

describe('Test for exercise #2', () => {
    it('Return [7, 14, 21, 28, 35, 42, 49, 56, 63, 70] for arguments [7, 10]', () => {
        expect(getTableOfMultiplication(7, 10)).toEqual(
            [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
        );
    });
});

describe('Test for exercise #3', () => {
    it('Return 25 for argument 10', () => {
        expect(getSumOfOddNumbers(10)).toBe(5);
    })
})
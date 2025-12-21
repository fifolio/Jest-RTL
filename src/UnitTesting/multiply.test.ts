import { describe, it, expect } from 'vitest';
import { multiply } from './multiply';

describe('multiply function', () => {
    it('should return the correct results of multiplication' , ()=> {
        expect(multiply(2, 3)).toBe(6)
    })

    // it('should be falcy when divided by 0', ()=> {
    //  expect(multiply(0, 6)).toBeFalsy()   
    // })

    it('should be equal to the expected array', ()=> {
        expect([1,9,9,6]).toEqual([1,9,9,6])
    })
})
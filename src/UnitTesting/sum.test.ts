import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum function', () => {
    it('should return the correct sum of two numbers', () => {
        expect(sum(10, 5)).toBe(15);
    })
})
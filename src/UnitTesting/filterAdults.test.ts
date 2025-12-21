import { describe, it, expect } from 'vitest'
import { filterAdults } from './filterAdults'

describe('Filter Adults', () => {
    it('return only ages >= 18', () => {
        expect(filterAdults([12, 18, 25, 16])).toEqual([18, 25])
    })

    it('return all ages when all are adults', () => {
        expect(filterAdults([24, 30, 50])).toEqual([24, 30, 50])
    })

    it('return empty array when no adults exist', () => {
        expect(filterAdults([12, 14, 9])).toEqual([])
    })

    it('return empty array for empty input', () => {
        expect(filterAdults([])).toEqual([])
    })
})
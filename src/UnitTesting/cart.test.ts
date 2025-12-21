import { describe, it, expect } from 'vitest'
import { calculateTotal } from './calculateTotal'

describe('Calculate Total', () => {
    it('calculate total without discount', () => {
        expect(calculateTotal([10, 20, 30])).toBe(60)
    })

    it('applies discount correctly', () => {
        expect(calculateTotal([100], 0.2)).toBe(80)
    })

    it('returns 0 for empty cart', () => {
        expect(calculateTotal([])).toBe(0)
    })
})
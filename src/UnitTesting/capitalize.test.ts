import { describe, it, expect } from 'vitest'
import { capitalize } from './capitalize'

describe('capitalizing first letter', () => {
    it('Should capitalize the first letter', () => {
        expect(capitalize('hello')).toBe('Hello')
    })

    it('Return the word if the first letter already capitalized', () => {
        expect(capitalize('Hello')).toBe('Hello')
    })

    it('Return empty string if no input', () => {
        expect(capitalize('')).toBe('')
    })

    it('Should capitalized only single character', () => {
        expect(capitalize('f')).toBe('F')
    })
})
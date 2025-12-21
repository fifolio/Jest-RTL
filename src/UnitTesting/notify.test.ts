import { describe, it, expect, vi } from 'vitest'
import { notify } from './notify'

// replace notify with a fake function
vi.mock('./notify', () => ({
    notify: vi.fn(),
}))

describe('notify', () => {
    notify('Hello')

    it('should be called with Hello', () => {
        expect(notify).toHaveBeenCalledWith('Hello')
    })

    it('should be called', () => {
        expect(notify).toHaveBeenCalled()
    })
})

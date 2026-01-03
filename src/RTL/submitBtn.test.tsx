import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import SubmitBtn from '../components/RTL/SubmitBtn'

describe('SubmitBtn component', () => {
    it('render enabled submit button', () => {
        render(<SubmitBtn disabled={false} />)
        expect(screen.getByText('Submit')).toBeEnabled();
    })

    it('render a disabled submit button', () => {
        render(<SubmitBtn disabled={true} />)
        expect(screen.getByText('Submit')).toBeDisabled()
    })
})
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import Welcome from '../components/RTL/Welcome.tsx'

describe('Welcome component', () => {
  it('renders Welcome text', () => {
    render(<Welcome />)

    expect(screen.getByText('Welcome to the app')).toBeInTheDocument()
  })
})

import { describe, it, expect } from "vitest"; // Jest

import { render, screen } from "@testing-library/react"; // RTL
import '@testing-library/jest-dom'; // Fake Dom

import userEvent from '@testing-library/user-event'; // User Event

import Toggle from "../components/RTL/Toggle"; // UI Component

describe("Toggle Component", () => {
    it('should change the state to ON when button clicked', async () => {
        const user = userEvent.setup()
        render(<Toggle />)
        
        expect(screen.getByText('OFF')).toBeInTheDocument()
        
        await user.click(screen.getByRole('button', { name: 'Toggle' }))
        expect(screen.getByText('ON')).toBeInTheDocument()
    })

    it('should change the state to OFF when button clicked', async () => {
        const user = userEvent.setup()
        render(<Toggle />)

        await user.click(screen.getByText('OFF'))
        expect(screen.getByRole('button', {name: 'Toggle'})).toBeInTheDocument()
    })
})
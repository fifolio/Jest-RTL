import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { SignupForm } from '../components/RTL/SubmitForm';

describe('SignupForm Component', () => {
    it('shows an error when password is too short', async () => {
        const user = userEvent.setup();
        render(<SignupForm />);

        await user.type(screen.getByLabelText(/password/i), '12345');
        await user.click(screen.getByRole('button', { name: /sign up/i }));

        expect(screen.getByRole('alert')).toHaveTextContent('Password too short');
    });

    it('submits successfully when password is valid', async () => {
        const user = userEvent.setup();
        render(<SignupForm />);

        await user.type(screen.getByLabelText(/password/i), '123456')
        await user.click(screen.getByRole('button', { name: /sign up/i }));
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    }
    );
})

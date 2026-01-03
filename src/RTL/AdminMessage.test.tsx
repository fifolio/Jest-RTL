import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AdminMessage from '../components/RTL/AdminMessage';

describe('AdminMessage Component', () => {
    it('renders Admin Panel for admin users', () => {
        render(<AdminMessage isAdmin={true} />);
        expect(screen.getByText(/admin panel/i)).toBeInTheDocument();
    });

    it('does not render Admin Panel for non-admin users', () => {
        render(<AdminMessage isAdmin={false} />);
        expect(screen.queryByText(/admin panel/i)).not.toBeInTheDocument();
    });
});
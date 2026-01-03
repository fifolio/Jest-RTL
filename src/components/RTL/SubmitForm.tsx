import { useState } from 'react'

export function SignupForm() {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (password.length < 6) {
            setError('Password too short')
            return
        }

        setError('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Password
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>

            <button type="submit">Sign up</button>

            {error && <p role="alert">{error}</p>}
        </form>
    )
}

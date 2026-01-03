import { useState } from "react"

export default function Toggle() {
    const [on, setOn] = useState(false)

    return (
        <>
            <span>{on ? 'ON' : 'OFF'}</span>
            <button onClick={() => setOn(!on)}>
                Toggle
            </button>
        </>
    )
}

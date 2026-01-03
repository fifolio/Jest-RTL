
type ButtonProps = {
    disabled: boolean
}

export default function SubmitBtn({ disabled }: ButtonProps) {
    return (
        <>
            <button disabled={disabled}>Submit</button>
        </>
    )
}
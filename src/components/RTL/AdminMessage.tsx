type MessageProps = {
    isAdmin: boolean;
}

export default function AdminMessage({ isAdmin }: MessageProps) {
    return (
        <>
            {isAdmin && <div>Admin Panel</div>}
        </>
    )
}
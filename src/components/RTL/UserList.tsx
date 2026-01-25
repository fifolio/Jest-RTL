import { useEffect, useState } from "react";

type User = { id: number; name: string };

export function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/api/users")
            .then((res) => res.json())
            .then((data: User[]) => setUsers(data))
            .catch(() => setError("Failed to fetch users"))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (users.length === 0) return <div>No users found</div>;

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

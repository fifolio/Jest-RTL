import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { UserList } from "../components/RTL/UserList"

describe("UserList Component", () => {

    // Loading state
    it("shows loading initially", () => {
        render(<UserList />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    // Success state with 2 users
    it("shows users after successful fetch", async () => {
        // MOCK the fetch
        vi.stubGlobal("fetch", vi.fn(() => Promise.resolve({
            json: () => Promise.resolve([
                {
                    id: 1,
                    name: 'ABC'
                },
                {
                    id: 2,
                    name: 'Victor'
                }
            ]),
        })))

        render(<UserList />);

        await waitFor(() => {
            expect(screen.getByText("ABC")).toBeInTheDocument();
        });
    })

    // Error state
    it("shows error message on fetch failure", async () => {
        vi.stubGlobal("fetch", vi.fn(() => (
            Promise.reject("API failure")
        )));

        render(<UserList />)

        await waitFor(() => {
            expect(screen.getByText("Failed to fetch users")).toBeInTheDocument();
        })
    })

    // Empty state
    it("shows empty state if no users", async () => {
        vi.stubGlobal("fetch", vi.fn(() => Promise.resolve({
            json: () => Promise.resolve([])
        })))

        render(<UserList />)

        await waitFor(() => {
            expect(screen.getByText("No users found")).toBeInTheDocument();
        })
    })

})
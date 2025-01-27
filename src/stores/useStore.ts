// stores/useStore.ts
import create from "zustand"

type User = { id: string; name: string }
type Ticket = { id: string; title: string; description: string; priority: string }
type Role = { id: string; name: string }

interface AppState {
  tickets: Ticket[]
  setTicket: (ticket: Ticket) => void
}

export const useStore = create<AppState>((set) => ({
  tickets: [],
  roles: [],
  setTicket: (ticket) => set((state) => ({ tickets: [...state.tickets, ticket] })),

}))

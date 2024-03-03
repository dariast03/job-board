import { StateCreator, create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Store = {
    history: string[]
}

type Actions = {
    add: (query: string) => void
    clear: () => void
}

type HistoryUserStore = Store & Actions

const initialState: Store = {
    history: [],
}

const storeData: StateCreator<Store & Actions> = (set) => ({
    ...initialState,
    add: (value) => set((state) => ({ history: [value, ...state.history] })),
    clear: () => set(() => ({ history: [] })),
})

export const useHistoryUserStore = create<HistoryUserStore>()(
    persist(storeData, {
        name: 'history-user-store',
        storage: createJSONStorage(() => localStorage),
    })
)

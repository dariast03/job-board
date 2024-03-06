import { IMensaje } from '@/types/mensaje'
import { StateCreator, create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Store = {
    messages: IMensaje[]
}

type Actions = {
    addMessage: (message: IMensaje) => void
    clearMessages: () => void
    setMessages: (messages: IMensaje[]) => void
}

type MessagesStore = Store & Actions

const initialState: Store = {
    messages: [],
}

const storeData: StateCreator<Store & Actions> = (set) => ({
    ...initialState,
    addMessage: (message) =>
        set((state) => ({ messages: [...state.messages, message] })),
    clearMessages: () => set(() => ({ messages: [] })),
    setMessages: (messages) => set(() => ({ messages })),
})

export const useMessagesStore = create<MessagesStore>()(
    persist(storeData, {
        name: 'messages-store',
        storage: createJSONStorage(() => localStorage),
    })
)

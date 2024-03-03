import ChatTopbar from './chat-topbar'
import { ChatList } from './chat-list'
import React from 'react'
import { Message, UserData } from '@/types/all'
import { useMessagesStore } from '@/store/messages-store'
import { IMensaje } from '@/types/mensaje'
import { IUsuario } from '@/types/usuario'

interface ChatProps {
    messages?: IMensaje[]
    selectedUser: IUsuario
    sendMessage: (newMessage: IMensaje) => void
    isMobile: boolean
}

export function Chat({
    messages,
    selectedUser,
    isMobile,
    sendMessage,
}: ChatProps) {
    return (
        <div className='flex h-full w-full flex-col justify-between'>
            <ChatTopbar selectedUser={selectedUser} />

            <ChatList
                messages={messages}
                selectedUser={selectedUser}
                sendMessage={sendMessage}
                isMobile={isMobile}
            />
        </div>
    )
}

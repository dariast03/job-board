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
    sendMessage: (newMessage: string) => void
    isMobile: boolean
    userAuth?: number
}

export function Chat({
    messages,
    selectedUser,
    isMobile,
    sendMessage,
    userAuth,
}: ChatProps) {
    return (
        <div className='flex h-full w-full flex-col justify-between'>
            <ChatTopbar selectedUser={selectedUser} />

            <ChatList
                messages={messages}
                selectedUser={selectedUser}
                sendMessage={sendMessage}
                isMobile={isMobile}
                userAuth={userAuth}
            />
        </div>
    )
}

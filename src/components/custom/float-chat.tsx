import { useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { ChatList } from './chat/chat-list'
import { Message } from '@/types/all'

const FloatChat = () => {
    const [visibleChat, setVisibleChat] = useState(false)

    const toggleChat = () => {
        setVisibleChat(!visibleChat)
    }

    const [messagesState, setMessages] = useState<Message[]>([])

    const sendMessage = (newMessage: Message) => {
        setMessages([...messagesState, newMessage])
    }

    return (
        <>
            <Button
                className='fixed bottom-5 right-10 grid size-14 place-content-center rounded-full '
                onClick={toggleChat}
            >
                CHAT
            </Button>
            <div
                className={cn([
                    'pointer-events-none fixed bottom-24 right-10 w-full rounded-lg border bg-white opacity-0 shadow-2xl transition-all duration-300 ease-in-out sm:w-96',
                    visibleChat && 'pointer-events-auto opacity-100',
                ])}
            >
                <ChatList
                    isMobile
                    messages={messagesState}
                    selectedUser={{
                        avatar: 'null',
                        id: 5,
                        name: 'Yamil',
                    }}
                    sendMessage={sendMessage}
                />
            </div>
        </>
    )
}
export default FloatChat

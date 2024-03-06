import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { ChatList } from './chat/chat-list'
import { Message } from '@/types/all'
import { MessageCircle } from 'lucide-react'
import { mensajes } from '@/data/mensajes'
import { users } from '@/data/users'
import { useMessagesStore } from '@/store/messages-store'
import { IMensaje } from '@/types/mensaje'

const FloatChat = () => {
    const [visibleChat, setVisibleChat] = useState(false)

    const toggleChat = () => {
        setVisibleChat(!visibleChat)
    }

    const { addMessage, messages, setMessages } = useMessagesStore()

    const onNewMessageEmpresa = (message: string) => {
        const newMessage: IMensaje = {
            id: message.length + 1,
            usuario_id: 1,
            fecha_y_hora: new Date(),
            contenido: message.trim(),
            estado: 'Enviado',
        }

        console.log('new message from float button', message)
        addMessage(newMessage)
    }

    useEffect(() => {
        const loadMessagesFromLocalStorage = () => {
            const storedMessages = JSON.parse(
                localStorage.getItem('messages-store')
            )

            if (!storedMessages?.state?.messages) return

            if (storedMessages.state.messages.length !== messages.length)
                setMessages(storedMessages.state.messages)
        }

        loadMessagesFromLocalStorage()

        const interval = setInterval(() => {
            loadMessagesFromLocalStorage()
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <Button
                className='fixed bottom-5 right-10 grid size-14 place-content-center rounded-full '
                onClick={toggleChat}
            >
                <MessageCircle />
            </Button>
            <div
                className={cn([
                    'pointer-events-none fixed bottom-24 right-5 w-[90%] rounded-lg border bg-white opacity-0 shadow-2xl transition-all duration-300 ease-in-out dark:bg-primary sm:w-96 md:right-10',
                    visibleChat && 'pointer-events-auto opacity-100',
                ])}
            >
                <ChatList
                    isMobile
                    messages={messages}
                    selectedUser={users[1]}
                    sendMessage={onNewMessageEmpresa}
                    userAuth={2}
                />
            </div>
        </>
    )
}
export default FloatChat

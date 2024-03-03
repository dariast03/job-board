import { cn } from '@/lib/utils'
import React, { useRef } from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import ChatBottombar from './chat-bottombar'
import { AnimatePresence, motion } from 'framer-motion'
import { UserData } from '@/types/all'
import { ScrollArea } from '@/components/ui/scroll-area'
import { IMensaje } from '@/types/mensaje'
import { IUsuario } from '@/types/usuario'

interface ChatListProps {
    messages?: IMensaje[]
    selectedUser: IUsuario
    sendMessage: (newMessage: IMensaje) => void
    isMobile: boolean
}

export function ChatList({
    messages,
    selectedUser,
    sendMessage,
    isMobile,
}: ChatListProps) {
    const messagesContainerRef = useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        messagesContainerRef.current?.scrollTo({
            top: 10000,
            behavior: 'smooth',
        })

        /*   if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop =
                messagesContainerRef.current.scrollHeight
        } */
    }, [messages])

    return (
        <>
            <div className='flex h-full w-full flex-col overflow-y-auto overflow-x-hidden '>
                <ScrollArea className='h-96' ref={messagesContainerRef}>
                    <AnimatePresence>
                        {messages?.map((message, index) => (
                            <motion.div
                                key={index}
                                layout
                                initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
                                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                                exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                                transition={{
                                    opacity: { duration: 0.1 },
                                    layout: {
                                        type: 'spring',
                                        bounce: 0.3,
                                        duration:
                                            messages.indexOf(message) * 0.05 +
                                            0.2,
                                    },
                                }}
                                style={{
                                    originX: 0.5,
                                    originY: 0.5,
                                }}
                                className={cn(
                                    'flex flex-col gap-2 whitespace-pre-wrap p-4',
                                    !message.empresa_id
                                        ? 'items-end'
                                        : 'items-start'
                                )}
                            >
                                <div className='flex items-center gap-3'>
                                    <span className=' max-w-xs rounded-md bg-popover p-3'>
                                        {message.contenido}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </ScrollArea>
            </div>
            <ChatBottombar sendMessage={sendMessage} isMobile={isMobile} />
        </>
    )
}

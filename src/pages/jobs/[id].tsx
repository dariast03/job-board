import { ChatList } from '@/components/custom/chat/chat-list'
import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Message } from '@/types/all'
import { useState } from 'react'

const DetalleOfertaDeTrabajo = () => {
    const [messagesState, setMessages] = useState<Message[]>([])

    const sendMessage = (newMessage: Message) => {
        setMessages([...messagesState, newMessage])
    }

    const [visibleChat, setVisibleChat] = useState(false)

    const toggleChat = () => {
        setVisibleChat(!visibleChat)
    }

    return (
        <div>
            DetalleOfertaDeTrabajo
            <Button
                className='fixed bottom-5 right-10 grid size-14 place-content-center rounded-full '
                onClick={toggleChat}
            >
                CHAT
            </Button>
            <div
                className={cn([
                    'pointer-events-none fixed bottom-20 right-10 w-full rounded-lg bg-white opacity-0 shadow-md transition-all duration-300 ease-in-out sm:w-96',
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
            {/*  <div className='absolute bottom-10 right-10'>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className=' grid size-16 place-content-center rounded-full '>
                            CHAT
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent
                        side='top'
                        sideOffset={20}
                        className='w-[30rem]'
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
                    </PopoverContent>
                </Popover>
            </div> */}
        </div>
    )
}
export default DetalleOfertaDeTrabajo

import {
    FileImage,
    Mic,
    Paperclip,
    PlusCircle,
    SendHorizontal,
    ThumbsUp,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Textarea } from '@/components/ui/textarea'
import { EmojiPicker } from '../emoji-picker'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Message } from '@/types/all'
import { IMensaje } from '@/types/mensaje'

interface ChatBottombarProps {
    sendMessage: (newMessage: string) => void
    isMobile: boolean
    userAuth: number
}

export const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }]

//TODO: FIX
export const loggedInUserData = {
    id: 5,
    avatar: '/LoggedInUser.jpg',
    name: 'Jakob Hoeg',
}

export default function ChatBottombar({
    sendMessage,
    isMobile,
}: ChatBottombarProps) {
    const [message, setMessage] = useState('')
    const inputRef = useRef<HTMLTextAreaElement>(null)

    const handleInputChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setMessage(event.target.value)
    }

    const handleThumbsUp = () => {
        /*  const newMessage: IMensaje = {
            id: message.length + 1,
            usuario_id: 2,
            fecha_y_hora: new Date(),
            contenido: '👍',
            estado: 'Enviado',
        } */
        sendMessage('👍')
        setMessage('')
    }

    const handleSend = () => {
        if (message.trim()) {
            /*       const newMessage: IMensaje = {
                id: message.length + 1,
                usuario_id: 1,
                fecha_y_hora: new Date(),
                contenido: message.trim(),
                estado: 'Enviado',
            } */
            sendMessage(message.trim())
            setMessage('')

            if (inputRef.current) {
                inputRef.current.focus()
            }
        }
    }

    const handleKeyPress = (
        event: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault()
            handleSend()
        }

        if (event.key === 'Enter' && event.shiftKey) {
            event.preventDefault()
            setMessage((prev) => prev + '\n')
        }
    }

    return (
        <div className='flex w-full items-center justify-between gap-2 p-2'>
            <div className='flex'>
                <Popover>
                    <PopoverTrigger asChild>
                        <Link
                            to='#'
                            className={cn(
                                buttonVariants({
                                    variant: 'ghost',
                                    size: 'icon',
                                }),
                                'h-9 w-9',
                                'dark:bg-card dark:text-muted-foreground  dark:hover:text-white'
                            )}
                        >
                            <PlusCircle
                                size={20}
                                className='text-muted-foreground dark:hover:text-white'
                            />
                        </Link>
                    </PopoverTrigger>
                    <PopoverContent side='top' className='w-full p-2'>
                        {message.trim() || isMobile ? (
                            <div className='flex gap-2'>
                                <Link
                                    to='#'
                                    className={cn(
                                        buttonVariants({
                                            variant: 'ghost',
                                            size: 'icon',
                                        }),
                                        'h-9 w-9',
                                        'dark:bg-card dark:text-muted-foreground  dark:hover:text-white'
                                    )}
                                >
                                    <Mic
                                        size={20}
                                        className='text-muted-foreground dark:hover:text-white'
                                    />
                                </Link>
                                {BottombarIcons.map((icon, index) => (
                                    <Link
                                        key={index}
                                        to='#'
                                        className={cn(
                                            buttonVariants({
                                                variant: 'ghost',
                                                size: 'icon',
                                            }),
                                            'h-9 w-9',
                                            'dark:bg-card dark:text-muted-foreground dark:hover:text-white'
                                        )}
                                    >
                                        <icon.icon
                                            size={20}
                                            className='text-muted-foreground dark:hover:text-white'
                                        />
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <Link
                                to='#'
                                className={cn(
                                    buttonVariants({
                                        variant: 'ghost',
                                        size: 'icon',
                                    }),
                                    'h-9 w-9',
                                    'dark:bg-card dark:text-muted-foreground dark:hover:text-white'
                                )}
                            >
                                <Mic
                                    size={20}
                                    className='text-muted-foreground'
                                />
                            </Link>
                        )}
                    </PopoverContent>
                </Popover>
                {!message.trim() && !isMobile && (
                    <div className='flex'>
                        {BottombarIcons.map((icon, index) => (
                            <Link
                                key={index}
                                to='#'
                                className={cn(
                                    buttonVariants({
                                        variant: 'ghost',
                                        size: 'icon',
                                    }),
                                    'h-9 w-9',
                                    'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                                )}
                            >
                                <icon.icon
                                    size={20}
                                    className='text-muted-foreground'
                                />
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <EmojiPicker
                onChange={(value) => {
                    setMessage(message + value)
                    if (inputRef.current) {
                        inputRef.current.focus()
                    }
                }}
            />

            <AnimatePresence initial={false}>
                <motion.div
                    key='input'
                    className='relative w-full'
                    layout
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{
                        opacity: { duration: 0.05 },
                        layout: {
                            type: 'spring',
                            bounce: 0.15,
                        },
                    }}
                >
                    <Textarea
                        autoComplete='off'
                        value={message}
                        ref={inputRef}
                        onKeyDown={handleKeyPress}
                        onChange={handleInputChange}
                        name='message'
                        placeholder='Aa'
                        className=' flex h-8 w-full resize-none items-center overflow-hidden rounded-full border bg-background p-0 px-2 '
                    ></Textarea>
                </motion.div>

                {message.trim() ? (
                    <Link
                        to='#'
                        className={cn(
                            buttonVariants({ variant: 'ghost', size: 'icon' }),
                            'h-9 w-9',
                            'shrink-0 dark:bg-card dark:text-muted-foreground dark:hover:text-white'
                        )}
                        onClick={handleSend}
                    >
                        <SendHorizontal
                            size={20}
                            className='text-muted-foreground dark:hover:text-white'
                        />
                    </Link>
                ) : (
                    <Link
                        to='#'
                        className={cn(
                            buttonVariants({ variant: 'ghost', size: 'icon' }),
                            'h-9 w-9',
                            'shrink-0 dark:bg-card dark:text-muted-foreground  dark:hover:text-white'
                        )}
                        onClick={handleThumbsUp}
                    >
                        <ThumbsUp
                            size={20}
                            className='text-muted-foreground dark:hover:text-white'
                        />
                    </Link>
                )}
            </AnimatePresence>
        </div>
    )
}

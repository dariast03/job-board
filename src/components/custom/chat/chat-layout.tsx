import React, { useEffect, useState } from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable'
import { cn } from '@/lib/utils'
import { Chat } from './chat'
import { users } from '@/data/users'
import { mensajes } from '@/data/mensajes'
import { Sidebar } from '../sidebar'
import { useMessagesStore } from '@/store/messages-store'

interface ChatLayoutProps {
    defaultLayout: number[] | undefined
    defaultCollapsed?: boolean
    navCollapsedSize: number
}

export function ChatLayout({
    defaultLayout = [320, 480],
    defaultCollapsed = false,
    navCollapsedSize,
}: ChatLayoutProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
    const [selectedUser, setSelectedUser] = React.useState(users[1])
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkScreenWidth()

        window.addEventListener('resize', checkScreenWidth)

        return () => {
            window.removeEventListener('resize', checkScreenWidth)
        }
    }, [])

    const { addMessage, messages } = useMessagesStore()

    return (
        <ResizablePanelGroup
            direction='horizontal'
            onLayout={(sizes: number[]) => {
                document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                    sizes
                )}`
            }}
            className='h-full items-stretch'
        >
            <ResizablePanel
                defaultSize={defaultLayout[0]}
                collapsedSize={navCollapsedSize}
                collapsible={true}
                minSize={isMobile ? 0 : 24}
                maxSize={isMobile ? 8 : 30}
                onCollapse={() => {
                    setIsCollapsed(true)
                    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                        true
                    )}`
                }}
                onExpand={() => {
                    setIsCollapsed(false)
                    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                        false
                    )}`
                }}
                className={cn(
                    isCollapsed &&
                        'min-w-[50px] transition-all duration-300 ease-in-out md:min-w-[70px]'
                )}
            >
                <Sidebar
                    isCollapsed={isCollapsed || isMobile}
                    links={users.map((user) => ({
                        name: user.nombre,
                        messages: mensajes ?? [],
                        avatar: '',
                        variant:
                            selectedUser.nombre === user.nombre
                                ? 'grey'
                                : 'ghost',
                    }))}
                    isMobile={isMobile}
                />
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
                <Chat
                    sendMessage={addMessage}
                    messages={messages}
                    selectedUser={selectedUser}
                    isMobile={isMobile}
                />
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}

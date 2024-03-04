import { ChatLayout } from '@/components/custom/chat/chat-layout'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function EmpresaChat() {
    const defaultLayout = undefined

    return (
        <main className='h-screen'>
            <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
        </main>
    )
}

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Info, Phone, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { UserData } from '@/types/all'
import { IUsuario } from '@/types/usuario'

interface ChatTopbarProps {
    selectedUser: IUsuario
}

export const TopbarIcons = [{ icon: Phone }, { icon: Video }, { icon: Info }]

export default function ChatTopbar({ selectedUser }: ChatTopbarProps) {
    return (
        <div className='flex h-20 w-full items-center justify-between border-b p-4'>
            <div className='flex items-center gap-2'>
                <div className='flex flex-col'>
                    <span className='font-medium'>{selectedUser.nombre}</span>
                    <span className='text-xs'>Activo hace 2 minutos</span>
                </div>
            </div>
        </div>
    )
}

import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn(
                'flex items-center space-x-4 lg:space-x-6',
                className
            )}
            {...props}
        >
            <Link
                to='/'
                className='text-sm font-medium transition-colors hover:text-primary'
            >
                Inicio
            </Link>
            <Link
                to='/ofertas-de-trabajo'
                className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
            >
                Ofertas de Trabajo
            </Link>
            <Link
                to='/empresas'
                className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
            >
                Empresas
            </Link>
        </nav>
    )
}

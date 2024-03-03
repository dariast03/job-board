import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'
import React from 'react'
import { navLinks } from '@/data/nav-links'

type Props = {
    withHero?: boolean
} & React.HTMLAttributes<HTMLElement>

export const NavLinks: React.FC<Props> = (props) => {
    const { withHero, className, ...rest } = props

    return (
        <nav
            className={cn(
                'flex items-center space-x-4 lg:space-x-6',
                className
            )}
            {...rest}
        >
            {navLinks.map((link) => (
                <LinkItem key={link.href} {...link} withHero={withHero} />
            ))}
        </nav>
    )
}

export type LinkItemProps = {
    title: string
    href: string
    withHero?: boolean
}

export const LinkItem: React.FC<LinkItemProps> = (props) => {
    const { href, title, withHero } = props
    return (
        <Link
            to={href}
            className={cn([
                'text-sm font-medium text-white transition-colors hover:text-blue-400',
                !withHero &&
                    'text-muted-foreground hover:text-primary dark:text-white',
            ])}
        >
            {title}
        </Link>
    )
}

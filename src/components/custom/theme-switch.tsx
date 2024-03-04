import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from './theme-provider'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
type Props = {
    withHero?: boolean
}

export const ThemeSwitch: React.FC<Props> = (props) => {
    const { withHero } = props
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            document.body.classList.add('dark')
            document.body.classList.remove('light')
        } else {
            setTheme('light')
            document.body.classList.add('light')
            document.body.classList.remove('dark')
        }
    }

    useEffect(() => {
        const themeColor = theme === 'dark' ? '#020817' : '#fff'
        const metaThemeColor = document.querySelector(
            "meta[name='theme-color']"
        )
        metaThemeColor && metaThemeColor.setAttribute('content', themeColor)
    }, [theme])

    return (
        <Button
            size='icon'
            variant='ghost'
            className={cn([
                'rounded-full text-white hover:bg-primary/25',
                !withHero && 'text-primary dark:text-white',
            ])}
            //onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            onClick={toggleTheme}
        >
            {theme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
        </Button>
    )
}

export default ThemeSwitch

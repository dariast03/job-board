import { Outlet } from 'react-router-dom'
import Nav from '../custom/nav'
import { cn } from '@/lib/utils'
import SearchForm from '../custom/search-form'

type Props = {
    withHero?: boolean
}
const MainLayout: React.FC<Props> = (props) => {
    const { withHero } = props
    return (
        <>
            <div className='flex min-h-screen flex-col space-y-6'>
                <header
                    className={cn([
                        'relative  shadow',
                        withHero && 'h-screen ',
                        !withHero && 'bg-card',
                    ])}
                >
                    {withHero && (
                        <>
                            <div className='absolute inset-0 z-[-1]'>
                                <div className='absolute inset-0 bg-black opacity-50'></div>
                                <img
                                    className='h-full w-full object-cover'
                                    src='/img/hero.jpg'
                                    alt='Hero'
                                />
                            </div>
                        </>
                    )}

                    <Nav withHero={withHero} />

                    {withHero && <SearchForm />}
                </header>

                <main className='container m-auto h-auto w-full max-w-7xl py-5 md:p-10'>
                    <Outlet />
                </main>
            </div>
        </>
    )
}
export default MainLayout

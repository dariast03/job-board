import { Outlet } from 'react-router-dom'
import Nav from '../custom/nav'

const MainLayout = () => {
    return (
        <>
            <div className='flex min-h-screen flex-col space-y-6'>
                <header className='relative h-screen border-gray-200  px-4 py-2.5 shadow lg:px-6'>
                    <div className='absolute inset-0 z-[-1]'>
                        <div className='absolute inset-0 bg-black opacity-50'></div>
                        <img
                            className='h-full w-full object-cover'
                            src='/img/hero.jpg'
                            alt='Hero'
                        />
                    </div>

                    <Nav />
                </header>

                <main className='container m-auto h-auto w-full max-w-7xl px-10'>
                    <Outlet />
                </main>
            </div>
        </>
    )
}
export default MainLayout

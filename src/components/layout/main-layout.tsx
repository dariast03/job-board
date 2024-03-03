import { Link, Outlet } from 'react-router-dom'
import { Button } from '../custom/ui/button'
import { MainNav } from './main-nav'
import { SearchBar } from '../search-bar'

const MainLayout = () => {
    return (
        <div vaul-drawer-wrapper=''>
            <header className='border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6'>
                <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
                    <Link to='/' className='flex items-center'>
                        <img
                            src='https://th.bing.com/th/id/OIP.ewFejZYoQiJB3Z8aJ10ZHwAAAA?rs=1&pid=ImgDetMain'
                            className='mr-3 h-6 sm:h-9'
                            alt='Logo Bolsa De Trabajo'
                        />
                        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
                            Bolsa
                        </span>
                    </Link>

                    <div className='flex items-center '>
                        <button
                            data-collapse-toggle='mobile-menu-2'
                            type='button'
                            className='ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden'
                            aria-controls='mobile-menu-2'
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Open main menu</span>
                            <svg
                                className='h-6 w-6'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                                    clipRule='evenodd'
                                />
                            </svg>
                            <svg
                                className='hidden h-6 w-6'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </button>
                    </div>

                    <MainNav />

                    <Button>Iniciar Sesion</Button>

                    <SearchBar />
                </div>
            </header>

            <main className='m-auto h-auto w-full max-w-7xl p-10'>
                <Outlet />
            </main>
        </div>
    )
}
export default MainLayout

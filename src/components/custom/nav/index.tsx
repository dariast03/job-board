import { SearchBar } from '@/components/custom/search-bar'
import { NavLinks } from './links-nav'
import ThemeSwitch from '../theme-switch'
import { UserNav } from './user-nav'
import NavHeader from './header-nav'
import React from 'react'

type Props = {
    withHero?: boolean
}

const Nav: React.FC<Props> = (props) => {
    const { withHero } = props
    return (
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
            <NavHeader />

            <NavLinks withHero={withHero} />

            <div className='flex gap-4'>
                <SearchBar />

                <UserNav />

                <ThemeSwitch />
            </div>
        </div>
    )
}
export default Nav

//TODO: ADD MOBILE MENU
/* 
// MOBILE MENU
 {/*    <div className='flex items-center '>
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
*/

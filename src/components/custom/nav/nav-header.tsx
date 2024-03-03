import { Link } from 'react-router-dom'

const NavHeader = () => {
    return (
        <Link to='/' className='flex items-center'>
            <img
                src='/img/logo.png'
                className='mr-3 h-6 sm:h-9'
                alt='Logo Bolsa De Trabajo'
            />
        </Link>
    )
}
export default NavHeader

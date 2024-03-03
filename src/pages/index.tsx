import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <>
            <div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                <Link
                    to={`/ofertas-de-trabajo/${12}`}
                    className='flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64'
                >
                    ALGUN TRABAJO
                </Link>
                <div className='h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64' />
                <div className='h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64' />
                <div className='h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64' />
            </div>
            <div className='mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600' />
            <div className='mb-4 grid grid-cols-2 gap-4'>
                <div className='h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72' />
                <div className='h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72' />
                <div className='h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72' />
                <div className='h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72' />
            </div>
            <div className='mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600' />
            <div className='grid grid-cols-2 gap-4'>
                <div className='h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72' />
                <div className='h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72' />
                <div className='h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72' />
                <div className='h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72' />
            </div>
        </>
    )
}
export default Index

import JobList from '@/components/custom/job/job-list'
import { jobs } from '@/data/jobs'
import { useHistoryUserStore } from '@/store/history-user-store'

const Index = () => {
    const filterJobs = jobs.slice(0, 10)

    const lengthJobsFormat = new Intl.NumberFormat('es-Es').format(jobs.length)

    const { history: historySearch } = useHistoryUserStore()

    const filterJobsByHistory = jobs
        .filter((job) => {
            const jobTitle = job.titulo.toLowerCase()

            return historySearch.some((searchTerm) => {
                const searchTermsArray = searchTerm.toLowerCase().split(' ')
                return searchTermsArray.some((term) => jobTitle.includes(term))
            })
        })
        .slice(0, 5)

    return (
        <>
            <div className='container max-w-4xl space-y-20'>
                <section>
                    <h1 className='my-10 text-center text-3xl font-bold'>
                        Trabajos relacionados con tu busqueda
                    </h1>
                    <JobList jobs={filterJobsByHistory} />
                </section>

                <section>
                    <h1 className='my-10 text-center text-3xl font-bold'>
                        {lengthJobsFormat} Trabajos esperando por ti
                    </h1>
                    <JobList jobs={filterJobs} />
                </section>
            </div>
        </>
    )
}
export default Index

/* 

import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Component() {
    return (
        <div className='flex min-h-[100dvh] flex-col'>
            <main className='flex-1'>
                <section className='w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48'>
                    <div className='container px-4 md:px-6'>
                        <div className='space-y-4'>
                            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                                Find your next job
                            </h1>
                            <form className='flex flex-col gap-2 min-[400px]:flex-row sm:max-w-sm sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10'>
                                <Input
                                    className='min-w-[300px] flex-1'
                                    placeholder='Enter a job title'
                                    type='text'
                                />
                                <Button type='submit'>Search</Button>
                            </form>
                        </div>
                    </div>
                </section>
                <section className='w-full border-t py-12 md:py-24 lg:py-32'>
                    <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
                        <div className='space-y-3'>
                            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                                Featured Jobs
                            </h2>
                            <p className='mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                                The best jobs from top companies.
                            </p>
                        </div>
                        <div className='divide-y rounded-lg border'>
                            <div className='grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3'>
                                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                                    <img
                                        alt='Logo'
                                        className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                                        height='70'
                                        src='/placeholder.svg'
                                        width='140'
                                    />
                                </div>
                                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                                    <img
                                        alt='Logo'
                                        className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                                        height='70'
                                        src='/placeholder.svg'
                                        width='140'
                                    />
                                </div>
                                <div className='mx-auto flex w-full items-center justify-center p-8'>
                                    <img
                                        alt='Logo'
                                        className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                                        height='70'
                                        src='/placeholder.svg'
                                        width='140'
                                    />
                                </div>
                            </div>
                            <div className='grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3'>
                                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                                    <img
                                        alt='Logo'
                                        className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                                        height='70'
                                        src='/placeholder.svg'
                                        width='140'
                                    />
                                </div>
                                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                                    <img
                                        alt='Logo'
                                        className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                                        height='70'
                                        src='/placeholder.svg'
                                        width='140'
                                    />
                                </div>
                                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                                    <img
                                        alt='Logo'
                                        className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                                        height='70'
                                        src='/placeholder.svg'
                                        width='140'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <Link
                                className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                                to='/'
                            >
                                View All Jobs
                            </Link>
                        </div>
                    </div>
                </section>
                <section className='w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32'>
                    <div className='container grid max-w-5xl items-center gap-6 px-4 md:px-6'>
                        <div className='space-y-2'>
                            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                                Experience the workflow the best frontend teams
                                love.
                            </h2>
                            <p className='mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                                Let your team focus on shipping features instead
                                of managing infrastructure with automated CI/CD.
                            </p>
                        </div>
                        <div className='mx-auto w-full max-w-sm space-y-2'>
                            <form className='flex space-x-2'>
                                <Input
                                    className='max-w-lg flex-1'
                                    placeholder='Enter your email'
                                    type='email'
                                />
                                <Button type='submit'>Sign Up</Button>
                            </form>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                                Sign up to get notified when we launch.
                                <Link
                                    className='underline underline-offset-2'
                                    to='/'
                                >
                                    Terms & Conditions
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
                <section className='w-full border-t py-12 md:py-24 lg:py-32'>
                    <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
                        <div className='space-y-3'>
                            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                                Experience the workflow the best frontend teams
                                love.
                            </h2>
                            <p className='mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                                Let your team focus on shipping features instead
                                of managing infrastructure with automated CI/CD.
                            </p>
                        </div>
                        <div className='mx-auto w-full max-w-sm space-y-2'>
                            <form className='flex space-x-2'>
                                <Input
                                    className='max-w-lg flex-1'
                                    placeholder='Enter your email'
                                    type='email'
                                />
                                <Button type='submit'>Sign Up</Button>
                            </form>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                                Sign up to get notified when we launch.
                                <Link
                                    className='underline underline-offset-2'
                                    to='/'
                                >
                                    Terms & Conditions
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className='flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6'>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                    © 2024 Acme Inc. All rights reserved.
                </p>
                <nav className='flex gap-4 sm:ml-auto sm:gap-6'>
                    <Link
                        className='text-xs underline-offset-4 hover:underline'
                        to='/'
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className='text-xs underline-offset-4 hover:underline'
                        to='/'
                    >
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
        </svg>
    )
}

*/

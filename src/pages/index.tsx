import JobList from '@/components/custom/job/job-list'
import { Button } from '@/components/ui/button'
import { jobs } from '@/data/jobs'
import { useHistoryUserStore } from '@/store/history-user-store'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    const mainJobs = jobs.slice(0, 5)

    const lengthJobsFormat = new Intl.NumberFormat('es-Es').format(jobs.length)

    const { history: historySearch } = useHistoryUserStore()
    console.log(historySearch)
    const filterJobsByHistory = useMemo(() => {
        return jobs
            .filter((job) => {
                const jobTitle = job.titulo?.toLowerCase()

                return historySearch.some((searchTerm) => {
                    const searchTermsArray = searchTerm.detalle
                        ?.toLowerCase()
                        .split(' ')
                        .filter((s) => s.length > 2)

                    return searchTermsArray.some((term) =>
                        jobTitle.includes(term)
                    )
                })
            })
            .slice(0, 5)
    }, [])

    return (
        <>
            <div className='space-y-20 md:container md:max-w-4xl'>
                {!!filterJobsByHistory.length && (
                    <section>
                        <h1 className='my-10 text-center text-3xl font-bold'>
                            Trabajos relacionados con tu busqueda
                        </h1>
                        <JobList jobs={filterJobsByHistory} />
                    </section>
                )}

                <section>
                    <h1 className='my-10 text-center text-3xl font-bold'>
                        {lengthJobsFormat} Trabajos esperando por ti
                    </h1>
                    <JobList jobs={mainJobs} />
                    <Link to="/ofertas-de-trabajo" className='mt-5 flex justify-end'>
                        <Button>Ver más</Button>
                    </Link>
                </section>
            </div>
        </>
    )
}
export default Index

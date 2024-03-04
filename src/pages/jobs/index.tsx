import JobList from '@/components/custom/job/job-list'
import { jobs } from '@/data/jobs'
import { useMemo, useState } from 'react'
import { ScrollRestoration, useSearchParams } from 'react-router-dom'

const OfertasDeTrabajo = () => {
    const urlParams = new URLSearchParams(location.search)

    const [title, setTitle] = useState(urlParams.get('titulo') || '')

    const filterJobs = useMemo(() => {
        if (!title) return jobs

        return jobs.filter((job) => {
            const jobTitle = job.titulo.toLowerCase()

            const searchTermsArray = title
                .toLowerCase()
                .split(' ')
                .filter((s) => s.length > 2)

            return searchTermsArray.some((term) => jobTitle.includes(term))
        })
    }, [title])
    return (
       <>
       <ScrollRestoration/>
        <section className='my-10 md:container md:max-w-4xl'>
            {title && (
                <h1 className='  mb-10 text-2xl font-bold'>
                    Resultados de tu busqueda: {title?.toLocaleUpperCase()}
                </h1>
            )}

            {filterJobs.length > 0 ? (
                <JobList jobs={filterJobs} />
            ) : (
                <p className='my-10'>No se han encontrado resultados</p>
            )}
        </section>
       </>
    )
}
export default OfertasDeTrabajo

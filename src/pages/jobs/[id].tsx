import FloatChat from '@/components/custom/float-chat'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { bussines } from '@/data/bussines'
import { jobs } from '@/data/jobs'
import { ScrollRestoration, useParams, Navigate } from 'react-router-dom'

type Params = { id: string }

const DetailJob = () => {
    const params = useParams<Params>()

    const job = jobs.find((j) => j.id == Number(params.id))
    const company = bussines[Math.floor(Math.random() * bussines.length)]

    if (!job) return <Navigate to='/404' />

    return (
        <div>
            <ScrollRestoration />

            <div className='mx-auto w-full max-w-xl'>
                <div className='grid gap-4 p-6'>
                    <div className='flex items-center space-x-4'>
                        <img
                            alt='Company logo'
                            className='size-10 rounded-full'
                            src={company.logo}
                            style={{
                                aspectRatio: 'square',
                                objectFit: 'contain',
                            }}
                        />
                        <div className='space-y-1.5'>
                            <h1 className='text-2xl font-bold'>
                                {job?.titulo}
                            </h1>
                            <p className='text-sm font-medium leading-none text-gray-500 dark:text-gray-400'>
                                {company.nombre}
                                <span className='font-normal'> · </span>
                                {job?.ubicacion}
                                <span className='font-normal'> · </span>$ {''}
                                {job?.salario}
                            </p>
                        </div>
                    </div>
                    <div className='text-base/leading-7 space-y-4'>
                        <p>{job?.descripcion}</p>
                    </div>
                    <div className='text-sm/leading-6 space-y-4'>
                        <div>
                            <h3 className='text-lg font-semibold'>
                                Qualifications
                            </h3>
                            <ul className='list-inside list-disc'>
                                <li>5+ years of product design experience</li>
                                <li>Strong proficiency with Figma</li>
                                <li>
                                    Excellent communication and collaboration
                                    skills
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold'>Skills</h3>
                            <ul className='list-inside list-disc'>
                                <li>UI/UX design</li>
                                <li>Wireframing and prototyping</li>
                                <li>Design thinking</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Button className='w-full md:w-auto'>
                            Apply for this job
                        </Button>
                    </div>
                </div>
            </div>

            <FloatChat />
        </div>
    )
}

export default DetailJob

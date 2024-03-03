import Company from '@/components/custom/company'
import FloatChat from '@/components/custom/float-chat'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
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

            <div className='mx-auto w-full max-w-4xl'>
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
                                Requerimientos
                            </h3>
                            <ul className='list-inside list-disc'>
                                <li>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit.
                                </li>
                                <li>
                                    Et corrupti impedit harum totam nostrum
                                    aliquam optiom.
                                </li>
                                <li>
                                    Inatus porro libero, illo quaerat, id, nisi
                                    rem placeat officia.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold'>
                                Habilidades
                            </h3>
                            <ul className='list-inside list-disc'>
                                <li>Lorem ipsum dolor.</li>
                                <li>Et corrupti impedit.</li>
                                <li>Inatus porro libero.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <Button className='w-full md:w-auto'>Aplicar</Button>
                        <Button
                            variant={'outline'}
                            className='w-full md:w-auto'
                        >
                            Guardar
                        </Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <header className='text-lg font-bold'>
                            Acerca de la empresa
                        </header>
                    </CardHeader>
                    <CardContent>
                        <Company company={company} />
                    </CardContent>
                </Card>
            </div>

            <FloatChat />
        </div>
    )
}

export default DetailJob

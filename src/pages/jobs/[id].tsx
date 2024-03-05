import Company from '@/components/custom/company'
import FloatChat from '@/components/custom/float-chat'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { bussines } from '@/data/bussines'
import { jobs } from '@/data/jobs'
import { useMemo } from 'react'
import { ScrollRestoration, useParams, Navigate } from 'react-router-dom'

type Params = { id: string }

const DetailJob = () => {
    const params = useParams<Params>()

    const job = jobs.find((j) => j.id == Number(params.id))
    
    const company = useMemo(
        () => bussines[Math.floor(Math.random() * bussines.length)],
        [params.id]
    )

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
                                    Diploma de bachillerato o equivalente.
                                </li>
                                <li>
                                    Conocimientos básicos de informática.
                                </li>
                                <li>
                                    Experiencia como Consultor de Marketing mínima de 2 años.
                                </li>
                                <li>
                                    Experiencia en el uso de herramientas como Adobe Photoshop, Illustrator, u otros programas similares.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold'>
                                Habilidades
                            </h3>
                            <ul className='list-inside list-disc'>
                                <li>
                                <span className='font-semibold'>Trabajo en Equipo: </span>
                                Habilidad para colaborar y trabajar eficazmente con otros en proyectos y tareas.
                                </li>
                                <li>
                                <span className='font-semibold'>Adaptabilidad: </span>
                                Flexibilidad para ajustarse a cambios en el entorno laboral y asumir nuevas responsabilidades.
                                </li>
                                <li>
                                <span className='font-semibold'>Organización: </span>
                                Capacidad para planificar, establecer prioridades y gestionar el tiempo de manera eficiente.
                                </li>
                                <li>
                                <span className='font-semibold'>Empatía: </span>
                                Habilidad para comprender y relacionarse con las emociones y perspectivas de los demás.
                                </li>
                                <li>
                                <span className='font-semibold'>Pensamiento crítico: </span>
                                Habilidad para analizar información de manera objetiva y tomar decisiones fundamentadas.
                                </li>
                                <li>
                                <span className='font-semibold'>Aprendizaje continuo: </span>
                                Actitud de disposición para adquirir nuevos conocimientos, habilidades y competencias a lo largo del tiempo.
                                </li>
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

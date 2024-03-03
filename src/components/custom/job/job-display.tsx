import { Badge } from '@/components/ui/badge'
import { bussines } from '@/data/bussines'
import { categories } from '@/data/categories'
import { cn } from '@/lib/utils'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    job: JobType
}

const JobDisplay: React.FC<Props> = (props) => {
    const { job } = props

    const { id, categoriaId, titulo, descripcion, salario } = job

    const categoria = categories.find((c) => c.id == categoriaId)

    const company = bussines[Math.floor(Math.random() * bussines.length)]

    return (
        <Link
            to={`/ofertas-de-trabajo/${id}`}
            className='grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-12'
        >
            <div className='col-span-2'>
                <img className='size-10 object-contain' src={company.logo} />
            </div>

            <div className='col-span-5 space-y-3'>
                <Badge
                    style={{
                        backgroundColor: categoria?.color ?? undefined,
                    }}
                >
                    {categoria?.nombre ?? 'N/A'}
                </Badge>

                <div>
                    <h2 className='font-bold text-primary'>{titulo}</h2>

                    <p className='text-gray-500'>{descripcion}</p>
                </div>
            </div>

            <div className='col-span-2'>
                <p className='font-bold'>London</p>
                <p className='text-gray-400'>United Kingdom</p>
            </div>

            <div className='col-span-3'>
                <p className='font-bold'>
                    ${salario - 5000} - ${salario + 5000}
                </p>
            </div>
        </Link>
    )
}
export default JobDisplay

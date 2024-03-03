import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
} from '@/components/ui/card'
import { Popover } from '@/components/ui/popover'
import { IEmpresa } from '@/types/empresa'
import { Factory, Map, User } from 'lucide-react'

type Props = {
    company: IEmpresa
}
export const Company: React.FC<Props> = ({ company }) => {
    const { nombre, logo, descripcion } = company
    return (
        <div className=''>
            <CardHeader className='p-4'>
                <div className='flex items-center gap-4'>
                    <div className='h-10 w-10'>
                        <img
                            alt='Company logo'
                            className='aspect-square size-10 overflow-hidden rounded-lg object-contain'
                            src={logo}
                        />
                    </div>
                    <div className='grid gap-1.5'>
                        <CardTitle className='text-base'>{nombre}</CardTitle>
                        <CardDescription className='text-sm'>
                            {descripcion}
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className='grid gap-1.5 p-4'>
                <div className='flex items-center gap-1.5 text-sm'>
                    <User className='h-4 w-4' />
                    <span className='font-medium'>10,000 trabajadores</span>
                </div>
                <div className='flex items-center gap-1.5 text-sm'>
                    <Factory className='h-4 w-4' />
                    <span className='font-medium'>Bienes de consumo</span>
                </div>
                <div className='flex items-center gap-1.5 text-sm'>
                    <Map className='h-4 w-4' />
                    <span className='font-medium'>{company.ubicacion}</span>
                </div>
            </CardContent>

            <CardFooter className='p-4'>
                <div className=' w-full divide-y overflow-hidden  rounded-lg'>
                    <div className='grid gap-2 p-4'>
                        <h3 className='text-lg font-bold'>Mision</h3>
                        <p className='text-sm/relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iste illo optio cupiditate nam. Beatae, id
                            aperiam aliquid laudantium officiis maiores qui est
                            impedit eaque neque labore, facere voluptates velit
                            aut.
                        </p>
                    </div>
                    <div className='grid gap-2 p-4'>
                        <h3 className='text-lg font-bold'>Vision</h3>
                        <ul className='grid gap-2'>
                            <li>Lorem</li>
                            <li>Iste</li>
                            <li>Beatae</li>
                        </ul>
                    </div>
                    <div className='grid gap-2 p-4'>
                        <h3 className='text-lg font-bold'>Logros</h3>
                        <ul className='grid gap-2'>
                            <li>
                                2023: Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dignissimos totam corrupti
                                harum accusamus dolorum maxime odio.
                            </li>
                            <li>
                                2022: Similique at obcaecati, quasi libero
                                consequuntur iure sapiente vero recusandae nihil
                                placeat, numquam dolores.
                            </li>
                        </ul>
                    </div>
                </div>
            </CardFooter>
        </div>
    )
}

export default Company

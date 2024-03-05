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
                            En {company.nombre}, nuestra misión es proporcionar soluciones innovadoras 
                            que mejoren la vida de nuestros clientes. Nos comprometemos a ofrecer productos 
                            y servicios de alta calidad que satisfagan las necesidades y expectativas de nuestros clientes,
                            manteniendo siempre un enfoque en la excelencia y la satisfacción del cliente.
                        </p>
                    </div>
                    <div className='grid gap-2 p-4'>
                        <h3 className='text-lg font-bold'>Vision</h3>
                        <ul className='grid gap-2'>
                            <li className='text-sm/relaxed'>Convertirnos en líderes del mercado en la industria.</li>
                            <li className='text-sm/relaxed'>Proporcionar soluciones innovadoras que superen las expectativas de nuestros clientes.</li>
                            <li className='text-sm/relaxed'>Expandir nuestra presencia global y llegar a nuevos mercados.</li>
                            <li className='text-sm/relaxed'>Establecer relaciones duraderas y de confianza con nuestros clientes.</li>
                            <li className='text-sm/relaxed'>Innovar constantemente nuestros productos y servicios para satisfacer las necesidades cambiantes del mercado.</li>
                        </ul>
                    </div>
                    <div className='grid gap-2 p-4'>
                        <h3 className='text-lg font-bold'>Logros</h3>
                        <ul className='grid gap-2'>
                            <li>
                                2023: En {company.nombre}, alcanzamos un hito significativo al expandir 
                                nuestro alcance y aumentar nuestra base de clientes. Nos enorgullece haber podido
                                satisfacer las necesidades de un número cada vez mayor de clientes y esperamos 
                                seguir creciendo en el futuro.
                            </li>
                            <li>
                                2022: Durante el año pasado, {company.nombre} logró importantes avances en 
                                la mejora de nuestros productos y servicios. Nos esforzamos por brindar una experiencia 
                                excepcional a cada cliente, y estos esfuerzos se reflejaron en el aumento de la satisfacción 
                                del cliente y la lealtad a la marca.
                            </li>
                        </ul>
                    </div>
                </div>
            </CardFooter>
        </div>
    )
}

export default Company

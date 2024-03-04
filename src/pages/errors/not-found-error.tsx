import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFoundError() {
    const navigate = useNavigate()
    return (
        <div className='h-svh'>
            <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
                <h1 className='text-[7rem] font-bold leading-tight'>404</h1>
                <span className='font-medium'>Oops! Pagina no Encontrada!</span>
                <p className='text-center text-muted-foreground'>
                    Parece que la pagina que estas buscando <br />
                    no existe o puede haber sido removida.
                </p>
                <div className='mt-6 flex gap-4'>
                    <Button variant='outline' onClick={() => navigate(-1)}>
                        Regresar
                    </Button>
                    <Button onClick={() => navigate('/')}>Volver al Inicio</Button>
                </div>
            </div>
        </div>
    )
}

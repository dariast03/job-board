import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface GeneralErrorProps extends React.HTMLAttributes<HTMLDivElement> {
    minimal?: boolean
}

export default function GeneralError({
    className,
    minimal = false,
}: GeneralErrorProps) {
    const navigate = useNavigate()
    return (
        <div className={cn('h-svh w-full', className)}>
            <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
                {!minimal && (
                    <h1 className='text-[7rem] font-bold leading-tight'>500</h1>
                )}
                <span className='font-medium'>
                    Oops! Algo malio sal {`:')`}
                </span>
                <p className='text-center text-muted-foreground'>
                    Pedimos disculpas por las molestias. <br /> Por favor,
                    inténtelo de nuevo más tarde. <br />
                    Si el error persiste contacta con un adminstrador
                </p>
                {!minimal && (
                    <div className='mt-6 flex gap-4'>
                        <Button variant='outline' onClick={() => navigate(-1)}>
                            Regresar
                        </Button>
                        <Button onClick={() => navigate('/')}>
                            Ir al inicio
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

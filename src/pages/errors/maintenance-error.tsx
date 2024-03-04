import { Button } from '@/components/ui/button'

export default function MaintenanceError() {
    return (
        <div className='h-svh'>
            <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
                <h1 className='text-[7rem] font-bold leading-tight'>503</h1>
                <span className='font-medium'>
                    El sitio web se encuentra en Mantenimiento!
                </span>
                <p className='text-center text-muted-foreground'>
                    El sistio no se encuentra disponible en este momento. <br />
                    Estaremos de vuelta muy pronto.
                </p>
                <div className='mt-6 flex gap-4'>
                    <Button variant='outline'>Saber mas</Button>
                </div>
            </div>
        </div>
    )
}

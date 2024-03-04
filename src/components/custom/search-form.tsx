import { Search } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { useHistoryUserStore } from '@/store/history-user-store'
import { useNavigate } from 'react-router-dom'

type FormData = {
    titulo: string
}

const SearchForm = () => {
    const { add: addHistory } = useHistoryUserStore()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        const { titulo } = data

        if (titulo) {
            addHistory({
                detalle: titulo,
                fecha_hora: new Date(),
                id: new Date().getTime(),
                usuarioId: 1,
            })
            return navigate(`/ofertas-de-trabajo?titulo=${titulo}`)
        }
        navigate(`/ofertas-de-trabajo`)
    }

    return (
        <div className='grid h-[85%] place-content-center '>
            <h1 className='text-center text-4xl font-bold text-white'>
                Encuentra el trabajo de tu sueños
            </h1>

            <section className='mt-10'>
                <form
                    className='grid grid-cols-4 gap-4'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <Input
                            className='min-w-60 bg-white'
                            placeholder='Titulo del trabajo'
                            {...register('titulo')}
                        />
                        {errors.titulo && (
                            <small className='text-red-400'>
                                {errors.titulo.message}
                            </small>
                        )}
                    </div>

                    <Input className='bg-white' placeholder='Ubicacion' />
                    <Input className='bg-white' placeholder='Tiempo' />

                    <Button>
                        <Search /> Buscar
                    </Button>
                </form>
            </section>
        </div>
    )
}
export default SearchForm

import { IUsuario } from '@/types/usuario'

export const users: IUsuario[] = [
    {
        id: 1,
        nombre: 'Juan',
        apellido: 'Pérez',
        correo: 'juan@example.com',
        contrasena: '123456',
        nombre_usuario: 'juanito123',
        descripcion: 'Usuario activo desde hace un año.',
    },
    {
        id: 2,
        nombre: 'María',
        apellido: 'González',
        correo: 'maria@example.com',
        contrasena: 'qwerty',
        nombre_usuario: 'maria89',
        descripcion: 'Nuevo usuario en el sistema.',
    },
]

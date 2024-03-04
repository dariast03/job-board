import { IMensaje } from '@/types/mensaje'

export const mensajes: IMensaje[] = [
    {
        id: 1,
        contenido:
            'Hola, ¿estás interesado en alguna posición en nuestra empresa?',
        fecha_y_hora: new Date(),
        estado: 'Enviado',
        usuario_id: 1,
        empresa_id: null,
    },
    {
        id: 2,
        contenido:
            '¡Hola! Sí, estoy buscando oportunidades laborales. ¿Tienen alguna vacante disponible?',
        fecha_y_hora: new Date(),
        estado: 'Recibido',
        usuario_id: null,
        empresa_id: 1,
    },
    {
        id: 3,
        contenido: 'Buenos días, ¿cuál es tu experiencia laboral?',
        fecha_y_hora: new Date(),
        estado: 'Enviado',
        usuario_id: 2,
        empresa_id: null,
    },
    {
        id: 4,
        contenido: 'Hola, tengo experiencia en ventas y atención al cliente.',
        fecha_y_hora: new Date(),
        estado: 'Recibido',
        usuario_id: null,
        empresa_id: 2,
    },
    {
        id: 5,
        contenido:
            'Excelente. ¿Podrías enviarme tu currículum vitae para revisarlo?',
        fecha_y_hora: new Date(),
        estado: 'Enviado',
        usuario_id: 3,
        empresa_id: null,
    },
    {
        id: 6,
        contenido: 'Sí, por supuesto. Voy a enviarlo ahora mismo.',
        fecha_y_hora: new Date(),
        estado: 'Recibido',
        usuario_id: null,
        empresa_id: 3,
    },
    {
        id: 7,
        contenido: '¡Hola! ¿Cuándo podrías venir a una entrevista presencial?',
        fecha_y_hora: new Date(),
        estado: 'Enviado',
        usuario_id: 4,
        empresa_id: null,
    },
    {
        id: 8,
        contenido:
            'Hola, estaría disponible para una entrevista la próxima semana.',
        fecha_y_hora: new Date(),
        estado: 'Recibido',
        usuario_id: null,
        empresa_id: 4,
    },
    {
        id: 9,
        contenido:
            'Perfecto. Te enviaré los detalles de la entrevista por correo electrónico.',
        fecha_y_hora: new Date(),
        estado: 'Enviado',
        usuario_id: 5,
        empresa_id: null,
    },
    {
        id: 10,
        contenido: 'Estupendo. Estaré atento a tu mensaje. Gracias.',
        fecha_y_hora: new Date(),
        estado: 'Recibido',
        usuario_id: null,
        empresa_id: 5,
    },
]

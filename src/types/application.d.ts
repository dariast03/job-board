type ApplicationType = {
    id: number
    trabajoId: number
    usuarioId: number
    fecha_postulacion: Date
    estado: 'pending' | 'accepted' | 'rejected'
}

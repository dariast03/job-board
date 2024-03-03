export interface IMensaje {
    id: number
    contenido: string
    fecha_y_hora: Date
    estado: string
    usuario_id?: number | null
    empresa_id?: number | null
}

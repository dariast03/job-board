import { createBrowserRouter } from 'react-router-dom'
import GeneralError from '../pages/errors/general-error'
import NotFoundError from '../pages/errors/not-found-error'
import MaintenanceError from '../pages/errors/maintenance-error'

const routes = createBrowserRouter([
    {
        path: '/',
        lazy: async () => {
            const AppShell = await import('../components/layout/main-layout')
            return { Component: AppShell.default }
        },
        errorElement: <GeneralError />,
        children: [
            {
                index: true,
                lazy: async () => ({
                    Component: (await import('../pages/index')).default,
                }),
            },
            {
                path: 'ofertas-de-trabajo',
                lazy: async () => ({
                    Component: (await import('../pages/ofertas-de-trabajo'))
                        .default,
                }),
            },
            {
                path: 'ofertas-de-trabajo/:id',
                lazy: async () => ({
                    Component: (await import('../pages/ofertas-de-trabajo/[id]'))
                        .default,
                }),
            },
        ],
    },
    { path: '/500', Component: GeneralError },
    { path: '/404', Component: NotFoundError },
    { path: '/503', Component: MaintenanceError },
    { path: '*', Component: NotFoundError },
])

export default routes

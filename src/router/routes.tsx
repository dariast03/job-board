import { createBrowserRouter } from 'react-router-dom'
import GeneralError from '../pages/errors/general-error'
import NotFoundError from '../pages/errors/not-found-error'
import MaintenanceError from '../pages/errors/maintenance-error'
import Layout from '../components/layout/main-layout'

const routes = createBrowserRouter([
    {
        path: '/',
        /*        lazy: async () => {
            const AppShell = await import('../components/layout/main-layout')
            return { Component: AppShell.default }
        }, */
        errorElement: import.meta.env.PROD && <GeneralError />,
        children: [
            {
                element: <Layout withHero />,
                children: [
                    {
                        path: '',
                        lazy: async () => ({
                            Component: (await import('../pages/index')).default,
                        }),
                    },
                ],
            },
            {
                element: <Layout />,
                children: [
                    {
                        path: 'ofertas-de-trabajo',
                        lazy: async () => ({
                            Component: (await import('../pages/jobs')).default,
                        }),
                    },
                    {
                        path: 'ofertas-de-trabajo/:id',
                        lazy: async () => ({
                            Component: (await import('../pages/jobs/[id]'))
                                .default,
                        }),
                    },
                ],
            },
        ],
    },
    { path: '/500', Component: GeneralError },
    { path: '/404', Component: NotFoundError },
    { path: '/503', Component: MaintenanceError },
    { path: '*', Component: NotFoundError },
])

export default routes

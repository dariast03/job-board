import FloatChat from '@/components/custom/float-chat'
import { Link, ScrollRestoration } from 'react-router-dom'

const DetalleOfertaDeTrabajo = () => {
    return (
        <div>
            <ScrollRestoration />
            <>
                <div className='bg-primary py-6 lg:py-12'>
                    <div className='container px-4 md:px-6'>
                        <div className='grid items-center justify-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'>
                            <div className='flex flex-col justify-center space-y-4'>
                                <div className='space-y-2'>
                                    <h1 className='text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl'>
                                        Senior Product Designer
                                    </h1>
                                    <p className='text-gray-300 dark:text-gray-400'>
                                        Full-Time • San Francisco
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                                <Link
                                    className='inline-flex h-10 items-center justify-center gap-1 rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                                    to={'/'}
                                >
                                    Apply for this job
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-6 lg:py-12'>
                    <div className='container px-4 md:px-6'>
                        <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-10'>
                            <div className='space-y-4'>
                                <div className='prose max-w-none'>
                                    <p>
                                        We are looking for a talented Senior
                                        Product Designer to join our team. In
                                        this role, you will be responsible for
                                        leading the design of our flagship
                                        product, working closely with
                                        cross-functional teams to create a
                                        best-in-class user experience.
                                    </p>
                                </div>
                                <h3 className='text-2xl font-bold tracking-tight'>
                                    Responsibilities
                                </h3>
                                <div className='prose prose-sm max-w-none'>
                                    <ul>
                                        <li>
                                            Lead the end-to-end design process
                                            for new features and enhancements,
                                            from concept to launch.
                                        </li>
                                        <li>
                                            Collaborate with product managers
                                            and engineers to define user
                                            requirements and translate them into
                                            intuitive and elegant designs.
                                        </li>
                                        <li>
                                            Conduct user research and usability
                                            testing to gather insights and
                                            validate design decisions.
                                        </li>
                                        <li>
                                            Champion a user-centered design
                                            approach across the organization,
                                            advocating for the needs of our
                                            customers in all aspects of the
                                            product.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='space-y-4'>
                                <h3 className='text-2xl font-bold tracking-tight'>
                                    Requirements
                                </h3>
                                <div className='prose prose-sm max-w-none'>
                                    <ul>
                                        <li>
                                            5+ years of experience as a product
                                            designer.
                                        </li>
                                        <li>
                                            Expertise in interaction design,
                                            information architecture, and visual
                                            design.
                                        </li>
                                        <li>
                                            Proficiency with design tools such
                                            as Figma, Sketch, or Adobe Creative
                                            Suite.
                                        </li>
                                        <li>
                                            Strong communication and
                                            collaboration skills, with the
                                            ability to present and justify
                                            design decisions to stakeholders.
                                        </li>
                                        <li>
                                            Experience working in an agile
                                            development environment, iterating
                                            quickly based on user feedback.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-b border-t border-gray-200 dark:border-gray-800'>
                    <div className='container px-4 md:px-6'>
                        <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-10'>
                            <div className='space-y-4'>
                                <h3 className='text-2xl font-bold tracking-tight'>
                                    Benefits
                                </h3>
                                <div className='prose prose-sm max-w-none'>
                                    <ul>
                                        <li>Flexible remote work options.</li>
                                        <li>
                                            Health, dental, and vision
                                            insurance.
                                        </li>
                                        <li>401(k) retirement savings plan.</li>
                                        <li>
                                            Generous paid time off and holidays.
                                        </li>
                                        <li>
                                            Professional development stipend.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            <FloatChat />
        </div>
    )
}

export default DetalleOfertaDeTrabajo

import JobDisplay from './job-display'
import { Separator } from '@/components/ui/separator'

type Props = {
    jobs: JobType[]
}

const JobList: React.FC<Props> = ({ jobs }) => {
    if (!jobs) return null

    return (
        <div className='flex flex-col gap-5'>
            {jobs.map((job, i) => (
                <div key={job.id}>
                    <JobDisplay job={job} />

                    {jobs.length - 1 !== i && <Separator className='mt-10' />}
                </div>
            ))}
        </div>
    )
}
export default JobList

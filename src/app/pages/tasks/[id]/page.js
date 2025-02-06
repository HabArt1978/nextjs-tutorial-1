import EditForm from '@/components/Tasks/EditForm/EditForm'
import { getTask } from '@/utils/actions'
import Link from 'next/link'

const SingleTaskPage = async ({ params }) => {
  const { id } = await params

  const task = await getTask(id)

  return (
    <section className="mx-auto mt-10 flex max-w-[50%] flex-col space-y-10 text-center">
      <h1 className="text-2xl">Single task</h1>

      <EditForm task={task} />

      <Link
        href="/pages/tasks"
        className="btn btn-success btn-sm m-auto w-40"
      >
        back to tasks
      </Link>
    </section>
  )
}

export default SingleTaskPage

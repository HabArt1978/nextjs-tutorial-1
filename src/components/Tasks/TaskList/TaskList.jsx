import { getAllTasks } from '@/utils/actions'
import Link from 'next/link'
import DeleteForm from '../DeleteForm/DeleteForm'

const TaskList = async () => {
  const tasks = await getAllTasks()

  if (tasks.length === 0) {
    return <h2 className="mt-8 text-lg font-medium">No tasks to show ...</h2>
  }

  return (
    <>
      <h2 className="text-md mt-8 font-medium">Your tasks</h2>
      <ul className="my-2 space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between rounded-lg border-2 px-3 py-3 shadow-lg"
          >
            <h2
              className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}
            >
              {task.content}
            </h2>

            <div className="flex gap-2">
              <Link
                href={`/pages/tasks/${task.id}`}
                className="btn btn-accent btn-xs"
              >
                edit
              </Link>
              <DeleteForm id={task.id} />
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export { TaskList }

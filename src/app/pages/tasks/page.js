import TaskForm from '@/components/Tasks/TaskForm/TaskForm'
import { TaskList } from '@/components/Tasks/TaskList/TaskList'

const Tasks = () => {
  return (
    <section className="mx-auto mt-10 flex max-w-[50%] flex-col text-center">
      <h1 className="mb-10 text-2xl font-medium">Task list</h1>
      <TaskForm />
      <TaskList />
    </section>
  )
}

export default Tasks

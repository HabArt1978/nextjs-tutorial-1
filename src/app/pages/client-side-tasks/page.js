import TaskFormCustom from '@/components/Tasks/TaskFormCustom/TaskFormCustom'
import { TaskList } from '@/components/Tasks/TaskList/TaskList'

const ClientSideTasks = () => {
  return (
    <section className="mx-auto mt-10 flex max-w-[50%] flex-col text-center">
      <h1 className="mb-10 text-2xl font-medium">Client side Task List</h1>

      <TaskFormCustom />
      <TaskList />

      <div className="divider"></div>

      <p>{`"use client"`}</p>
    </section>
  )
}

export default ClientSideTasks

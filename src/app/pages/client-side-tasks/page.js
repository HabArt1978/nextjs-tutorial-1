import TaskFormCustom from '@/components/Tasks/TaskFormCustom/TaskFormCustom'
import { TaskList } from '@/components/Tasks/TaskList/TaskList'

// Измените динамическое поведение макета или страницы на полностью статическое или полностью динамическое.
// export const dynamic = 'auto'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
export const dynamic = 'force-dynamic'

const ClientSideTasks = () => {
  return (
    <section className="mx-auto mt-10 flex max-w-[50%] flex-col text-center">
      <h1 className="mb-10 text-2xl font-medium">Client side Task List</h1>

      <TaskFormCustom />
      <TaskList />

      <div className="divider"></div>

      <p>
        This page works with “use client”, when the client takes an action (
        clicks on a button ), we implement a better user experience, let the
        user see that their action is in processing mode.
      </p>
    </section>
  )
}

export default ClientSideTasks

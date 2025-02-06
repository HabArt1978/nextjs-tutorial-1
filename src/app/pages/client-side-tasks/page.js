import TaskForm from '@/components/Tasks/TaskForm/TaskForm'
import { TaskList } from '@/components/Tasks/TaskList/TaskList'

const TasksClient = () => {
  return (
    <section className="mx-auto mt-10 flex max-w-[50%] flex-col text-center">
      <h1 className="mb-10 text-2xl font-medium">Client side Task List</h1>

      <TaskForm />
      <TaskList />

      <div className="divider"></div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et, error
        ut exercitationem fuga incidunt est hic unde minus culpa, earum
        perferendis sunt nostrum! Facere totam eveniet corrupti incidunt
        molestias saepe, odio eos ratione esse animi et pariatur dicta enim sed.
        Suscipit sed excepturi fuga quaerat, repudiandae laborum libero quia
        nisi quod reiciendis quae quasi vero ex iure quos numquam eligendi
        officiis tenetur doloremque ipsum commodi. Dolorum impedit reiciendis
        quibusdam? Sit assumenda aliquid debitis similique dolores eligendi
        tempore, doloribus ducimus illum deserunt incidunt suscipit quidem ab
        iste sint quos accusamus corporis harum impedit neque facere adipisci
        tempora. Ipsa, voluptatibus qui!
      </p>
    </section>
  )
}

export default TasksClient

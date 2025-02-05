import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'

const createTask = async (formData) => {
  // formData это params которые придут в createTask из form action если createTask добавлена как action
  'use server'
  const taskDescription = formData.get('taskDescription')
  // action предоставляет метод get() для получения данных полей формы по name
  console.log(taskDescription)
  // получим данные поля input в терминале сервера
  await prisma.task.create({
    data: {
      content: taskDescription
    }
  })
  // произошла запись в базу данных, но на странице пользователя отображения новой задачи нет
  // используем revalidatePath next/cache для синхронизации данных сервер - клиент
  revalidatePath('/pages/tasks')
}

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join flex w-full">
        <input
          type="text"
          name="taskDescription"
          placeholder="Add a task description"
          required
          className="input join-item input-bordered w-full"
        />
        <button
          type="submit"
          className="btn btn-primary join-item"
        >
          create task
        </button>
      </div>
    </form>
  )
}

export default TaskForm

'use server'

import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export const createTask = async (formData) => {
  // formData это params которые придут в createTask из form action если createTask добавлена как action

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

export const deleteTask = async (formData) => {
  const taskId = formData.get('taskId')
  await prisma.task.delete({
    where: { id: taskId }
  })
  revalidatePath('/pages/tasks')
}

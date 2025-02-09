'use server'

import { TaskSchema } from '@/library/zodSchemas'
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

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

export const createTaskCustom = async (prevState, formData) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  const taskDescription = formData.get('taskDescription')

  try {
    TaskSchema.parse({ taskDescription })
    await prisma.task.create({
      data: {
        content: taskDescription
      }
    })

    revalidatePath('/pages/tasks')

    return { message: 'success' }
  } catch (error) {
    console.log(error)
    return { errObj: error, message: 'error' }
  }
}

export const deleteTask = async (formData) => {
  const taskId = formData.get('taskId')
  await prisma.task.delete({
    where: { id: taskId }
  })
  revalidatePath('/pages/tasks')
}

export const getTask = async (taskId) => {
  return await prisma.task.findUnique({
    where: { id: taskId }
  })
}

export const updateTask = async (formData) => {
  const id = formData.get('taskId')
  const content = formData.get('taskContent')
  const completed = formData.get('completed')

  console.log(formData)

  await prisma.task.update({
    where: {
      id
    },
    data: {
      content,
      completed: completed === 'on' ? true : false
    }
  })
  redirect('/pages/tasks')
}

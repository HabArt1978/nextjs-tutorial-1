import db from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const tasks = await db.task.findMany()
  return NextResponse.json({ data: tasks })
}

export const POST = async (request) => {
  const data = await request.json()
  const newTask = await db.task.create({
    data: {
      content: data.content
    }
  })

  return NextResponse.json({ data: newTask })
}

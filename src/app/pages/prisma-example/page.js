import prisma from '@/utils/db'

const prismaHandlers = async () => {
  console.log('===| Prisma example |===')

  const allTask = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return allTask
}

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers()

  if (tasks.length === 0) {
    return (
      <h2 className="mt-8 text-center text-lg font-medium">
        No tasks to show ...
      </h2>
    )
  }

  return (
    <div className="text-center">
      <h1 className="py-4 text-7xl">Prisma Example Page</h1>
      {tasks.map((task, idx) => {
        return (
          <div
            key={task.id}
            className="my-4 flex items-center justify-center space-x-6"
          >
            <span className="">№ {idx + 1}</span>
            <span className="text-xl text-orange-500">{task.content}</span>
          </div>
        )
      })}
    </div>
  )
}

export default PrismaExamplePage

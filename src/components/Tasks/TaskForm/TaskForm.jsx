import { createTask } from '@/utils/actions'

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

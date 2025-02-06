import { deleteTask } from '@/utils/actions'

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input
        type="hidden"
        name="taskId"
        value={id}
      />
      <button
        type="submit"
        className="btn btn-error btn-xs uppercase"
      >
        delete
      </button>
    </form>
  )
}

export default DeleteForm

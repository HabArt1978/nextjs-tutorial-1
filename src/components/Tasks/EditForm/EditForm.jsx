import { updateTask } from '@/utils/actions'

const EditForm = ({ task }) => {
  const { id, completed, content } = task

  return (
    <form
      action={updateTask}
      className="border—base-300 m-auto w-full max-w-sm rounded-lg border p-12"
    >
      <input
        type="hidden"
        name="taskId"
        value={id}
      />

      <input
        type="text"
        name="taskContent"
        defaultValue={content}
        className="input input-bordered w-full"
      />

      <div className="form-control mt-2">
        <label
          htmlFor="completed"
          className="label cursor-pointer"
        >
          <span className="label-text text-lg">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox-primary checkbox checkbox-sm"
          />
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-accent mt-4 w-full"
      >
        edit
      </button>
    </form>
  )
}

export default EditForm

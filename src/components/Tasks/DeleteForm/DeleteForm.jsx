'use client'

import { deleteTask } from '@/utils/actions'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="btn btn-error btn-xs uppercase"
    >
      {pending ? 'wait...' : 'delete'}
    </button>
  )
}

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input
        type="hidden"
        name="taskId"
        value={id}
      />

      <SubmitButton />
    </form>
  )
}

export default DeleteForm

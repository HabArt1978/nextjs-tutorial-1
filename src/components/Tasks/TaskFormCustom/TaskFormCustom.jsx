'use client'

import { createTaskCustom } from '@/utils/actions'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { GoTasklist } from 'react-icons/go'

//! useFormState устарел
// ? useActionState это хук, который позволяет обновлять состояние на основе результата действия формы.
//** import { useActionState } from "react";
// В более ранних версиях React Canary этот API был частью React DOM и назывался useFormState

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="btn btn-primary join-item flex items-center justify-center uppercase text-white transition duration-150"
      disabled={pending}
    >
      <div className="flex w-full items-center gap-2">
        {pending ? (
          <>
            <span className="loading loading-spinner align-middle"></span>
            <span className="w-40 align-middle">please wait ...</span>
          </>
        ) : (
          <>
            <GoTasklist className="h-6 w-6" />
            <span className="w-40 align-middle">create task custom</span>
          </>
        )}
      </div>
    </button>
  )
}

const initState = {
  message: null
}

const TaskFormCustom = () => {
  const [state, formAction] = useActionState(createTaskCustom, initState)

  return (
    <form action={formAction}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}
      <div className="join flex w-full">
        <input
          type="text"
          name="taskDescription"
          placeholder="Add a task description"
          required
          className="input join-item input-bordered w-full"
        />
        <SubmitButton />
      </div>
    </form>
  )
}

export default TaskFormCustom

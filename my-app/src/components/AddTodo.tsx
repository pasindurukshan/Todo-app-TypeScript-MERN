import React, { useState } from 'react'

type Props = { 
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void 
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor='title'>Title</label>
          <input onChange={handleForm} type='text' id='title' placeholder="Title of Todo"/>
        </div>
        <div>
          <label htmlFor='date'>End Date</label>
          <input onChange={handleForm} type='text' id='date' placeholder="DD / MM / YY"/>
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add New Todo</button>
    </form>
  )
}

export default AddTodo

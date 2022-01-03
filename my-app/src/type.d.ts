interface ITodo {
    _id: string
    title: string
    date: string
    status: boolean
    createdAt?: string
    updatedAt?: string
}

type TodoProps = {
    todo: ITodo
}

type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
  }
  
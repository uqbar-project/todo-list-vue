import TodoAction from '@/domain/TodoAction';

export default class TodoService {

    todos: TodoAction[] = []

    addTodo(todoAction: TodoAction) {
        this.todos.push(todoAction)
    }

    private static _instance: TodoService

    static get instance() {
        return this._instance || (this._instance = new TodoService())
    }

}

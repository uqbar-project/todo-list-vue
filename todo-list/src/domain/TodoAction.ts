import TodoService from '@/domain/TodoService';

export default class TodoAction {
    message = ''
    errors : String[] = []

    validate() {
        this.errors = []
        if (!this.message) {
            this.errors.push('Message is mandatory')
        }
    }

    isValid() {
        this.errors = []
    }
}

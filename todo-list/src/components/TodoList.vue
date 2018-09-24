<template>
    <div>
        <ul v-if="todoService">
            <li v-for="(todoAction, index) in todoService.todos" :key="index">
                {{todoAction.message}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';
    import TodoAction from "../domain/TodoAction";
    import TodoService from "../domain/TodoService";

    @Component
    export default class TodoList extends Vue {

        data() {
            return {
                todoService: TodoService.instance
            }
        }


    }
</script>

<style scoped>
</style>

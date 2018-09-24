<template>
    <div>
        <h1>Create a Todo</h1>
        <form>
            <input type="text" v-model="todoAction.message" placeholder="What do you need to do?">
            <button @click="addTodo()">DO!</button>
        </form>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import TodoAction from "../domain/TodoAction";
    import TodoService from "../domain/TodoService";

    @Component
    export default class TodoCreator extends Vue {

        todoService: TodoService = TodoService.instance;
        todoAction: TodoAction = new TodoAction();

        addTodo() {
            this.todoService.addTodo(this.todoAction);
            this.todoAction = new TodoAction();
        }

    };
</script>

<style scoped>
</style>

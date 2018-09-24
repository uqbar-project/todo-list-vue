<template>
    <div>
        <TodoCreator/>
        <TodoList/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import TodoList from "/home/pino/todo-list/src/components/TodoList.vue"; // @ is an alias to /src
    import TodoCreator from "/home/pino/todo-list/src/components/TodoCreator.vue";

    @Component({
        components: {
            TodoCreator,
            TodoList,
        },
    })
    export default class Home extends Vue {
    }
</script>

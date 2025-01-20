<script setup>
    import {reactive, ref,useTemplateRef} from 'vue';

    const notes = reactive([]);
    const note = ref("");
    const noteInput = useTemplateRef("noteInput");

    function addTodoList() {
        notes.push(note.value);
        note.value = "";
        noteInput.value.focus();
    }
</script>

<template>
    <h2>Input todo here: </h2>
    <input type="text" ref="noteInput" v-model="note"><br>

    <button @click="addTodoList">Add Todo</button>

    <h3>My Todo List</h3>
    <ul v-for="note in notes">
        <p>{{ note }}</p>
    </ul>

</template>
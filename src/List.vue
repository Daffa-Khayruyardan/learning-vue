<script setup>
    import { reactive, ref } from 'vue';

    const persons = reactive([
        {
            id: 1,
            name: "Daffa",
            done: false,
        },
        {
            id: 2,
            name: "Diffa",
            done: false,
        },
        {
            id: 3,
            name: "Della",
            done: true,
        }
    ]);
</script>

<template>
    <h1>hello, List</h1>

    <template v-for="person in persons">
        <ul :key="person.id" v-if="person.done">
            <li v-for="(value,index) in person">{{ person.name }}</li>
        </ul>
    </template>

    <h3 v-for="i in 4">no-{{ i }}</h3>
</template>
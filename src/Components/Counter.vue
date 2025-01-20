<script setup>
    import { ref } from 'vue';

    const counter = ref(0);

    const props = defineProps(["name"]);
</script>

<template>
    <h1>Hello, {{ props.name }}</h1>
    <h2>Counter: {{ counter }}</h2>
    <button @click="counter++">Increment</button>
</template>
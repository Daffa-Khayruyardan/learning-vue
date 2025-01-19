<script setup>
    import { ref } from 'vue';

    const counter = ref(0);

    function increment() {
        counter.value++;
    }
</script>

<template>
    <h2>Counter: {{ counter }}</h2>
    <button v-on:click="increment">Increment</button>
</template>

<style scoped>

</style>
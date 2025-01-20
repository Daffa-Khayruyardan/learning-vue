<script setup>
    import { ref } from 'vue';

    const emits = defineEmits(['click']);
    const {count} = defineProps(['count']);


</script>

<template>
    <h1>Counter New: {{ count }}</h1>
    <button @click="emits('click')">Increment</button>
</template>
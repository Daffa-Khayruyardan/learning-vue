<script setup>
    import {onBeforeMount, onMounted, onUpdated, ref} from 'vue';

    const counter = ref(0);

    onBeforeMount(() => {
        console.log("OnBeforeMounted");
    })

    onMounted(() => {
        console.log("OnMounted");
    });

    onUpdated(() => {
        console.log("OnUpdated");
    })
</script>

<template>
    <h2>Counter: {{ counter }}</h2>
    <button @click="counter++">Increment</button>
</template>


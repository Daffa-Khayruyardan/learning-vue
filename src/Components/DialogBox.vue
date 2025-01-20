<script setup>
    const emits = defineEmits(["close"])
</script>

<template>
    <div class="parent-dialog">
        <div class="dialog">
            <h1>Hello World</h1>
            <button @click="emits('close')">Close</button>
        </div>
    </div>
</template>

<style scoped>
    .parent-dialog {
        background-color: rgba(1, 1, 1, 0.2);
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
    }
</style>
<script setup>
    import { ref } from 'vue';

    const score = ref();
</script>

<template>
    <h1>You're score here</h1>
    <div v-show="score > 90">
        <p>excelent</p>
    </div>
    <div v-if="score > 80">
        <p>very good</p>
    </div>
    <div v-else-if="score > 70">
        <p>good</p>
    </div>
    <div v-else>
        <p>bad</p>
    </div>
</template>


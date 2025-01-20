<script setup>
    const {name,counter} = defineProps(["name","counter"]);
</script>

<template>
    <h1>Hello, {{ name }}</h1>
    <h2>Counter: {{ counter }}</h2>
</template>
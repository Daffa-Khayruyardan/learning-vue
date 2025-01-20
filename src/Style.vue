<script setup>
    import { ref } from 'vue';

    const isBlue = ref(false);
    const isBold = ref(false);

    function makeBlue() {
        isBlue.value = !isBlue.value;
    }

    function makeBold() {
        isBold.value = !isBold.value;
    }
</script>

<template>
    <p v-bind:class="{blue: isBlue, bold: isBold}">Hello, Style</p><br>
    <button v-on:click="makeBlue">Blue</button>
    <button v-on:click="makeBold">Bold</button>
</template>

<style scoped>
    .blue {
        color: blue;
    }

    .bold {
        font-weight: bold;
    }
</style>
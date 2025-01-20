<script setup>
    import { ref } from 'vue';

    import DialogBox from './Components/DialogBox.vue';

    const modalsVisible = ref(false);

    function toggleModals() {
        modalsVisible.value = !modalsVisible.value;
        console.log("You clicked me")
    }
</script>

<template>
    <div class="modals-parent">
        <button @click="toggleModals">Open</button>
        <DialogBox v-if="modalsVisible" @close="toggleModals" />
    </div>

    
</template>

<style scoped>
    .modals-parent {
        display: flex;
        justify-content: center;
    }
</style>
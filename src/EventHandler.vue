<script setup>
    import { computed, reactive } from 'vue';

    const personBio = reactive({
        firstname: '',
        lastname: '',
    })

    function getFirstname(e) {
        personBio.firstname = e.target.value;
    }

    function getLastname(e) {
        personBio.lastname = e.target.value;
    }

    const getFullBio = computed(() => {
        return `${personBio.firstname} ${personBio.lastname}`
    }) 

    function Click() {
        console.log("You clicked  me");
    }
</script>

<template>
    <form>
        <input type="text" @input="getFirstname" id="firstname"><br>
        <input type="text" @input="getLastname" id="lastname"><br>
        <button @click.prevent="Click">Show</button>
    </form>
    <h3>Hai, {{ personBio.firstname }} {{ personBio.lastname }}</h3>
    <h2>Hello, {{ getFullBio }}</h2>
</template>
<script setup> 
    import { ref,reactive, computed } from 'vue';

    const counter = ref(0);

    const fullname = reactive({
        firstname: '',
        lastname: '',
    })

    function increment() {
        console.log("Increment counter");
        counter.value++;
    }

    function fullnameCall() {
        fullname.firstname = document.getElementById("firstname").value;
        fullname.lastname = document.getElementById("lastname").value;
    }

    const fullnamePerson = computed(() => {
        console.log("Call fullname of person");
        return `${fullname.firstname} ${fullname.lastname}`;
    })
</script>

<template>
    <h2>Counter: {{ counter }}</h2><br>
    <button v-on:click="increment">Increment</button><br>

    <label>Firstname</label>
    <input type="text" id="firstname"><br>

    <label>Lastname</label>
    <input type="text" id="lastname"><br>

    <h3>Hello, {{ fullnamePerson }}</h3><br>

    <button v-on:click="fullnameCall">Call My Name</button>
</template>


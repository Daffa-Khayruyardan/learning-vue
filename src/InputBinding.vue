<script setup>
    import { reactive } from 'vue';
    
    const person = reactive({
        name: '',
        age: 0,
        gender: "male",
        adult: false,
    })
</script>

<template>
    <form>
        <label>Name : </label>
        <input type="text" id="name" v-model="person.name"><br>

        <label>Age : </label>
        <input type="number" id="age" v-model="person.age"><br>
        
        <label>Gender : </label>
        <select name="" id="" v-model="person.gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select><br>

        <label>isAdult : </label>
        <input type="checkbox" v-model="person.adult">

        <h2>Person Biodata</h2>

        <p>Name: {{ person.name }}</p>
        <p>Age: {{ person.age }}</p>
        <p>Gender: {{ person.gender }}</p>
        <p>isAdult: {{ person.adult }}</p>
    </form>
</template>
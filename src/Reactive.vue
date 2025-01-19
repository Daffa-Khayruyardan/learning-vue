<script setup>
  import { reactive } from 'vue';

  const person = reactive({
    firstname: '',
    lastname: ''
  })

  function getName() {
    person.firstname = document.getElementById("firstname").value;
    person.lastname = document.getElementById("lastname").value;
  }
</script>

<template>
  <label>Firstname: </label>
  <input type="text" id="firstname"><br>

  <label>Lastname: </label>
  <input type="text" id="lastname">

  <h2>Hello, {{ person.firstname }} {{ person.lastname }}</h2>
  <button v-on:click="getName">Click</button>
</template>

<style scoped>
  
</style>
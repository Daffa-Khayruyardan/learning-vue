<script setup>
    const {id,name,price} = defineProps({
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    });
</script>

<template>
    <h1>Product</h1>
    <h2>Id: {{ id }}</h2>
    <h2>Name: {{ name }}</h2>
    <h2>Price: ${{ price }}</h2>
</template>
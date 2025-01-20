<script setup>
    import { ref, watch } from 'vue';

    const pdId = ref('product1');
    const pdDetails = ref(null);

    watch(pdId, async (newVal,oldVal) => {
        if(newVal) {
            const fetching =  await fetch(`/${newVal}.json`);
            const resp = await fetching.json();

            pdDetails.value = await resp;
        }else {
            pdDetails.value = null;
        }
    }, {
        immediate: true
    });

    
</script>

<template>
    <label>Products : </label>
    <select name="" id="" v-model="pdId">
        <option value="product1">Product1</option>
        <option value="product2">Product2</option>
    </select>

    <h3>Result</h3>
    <div v-if="pdDetails">
        <p>Id: {{ pdDetails.id }}</p>
        <p>Name: {{ pdDetails.name }}</p>
        <p>Price: {{ pdDetails.price }}</p>
    </div>

</template>


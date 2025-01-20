<script setup>
    import { ref } from 'vue';

    import Counter from './Components/Counter.vue';
    import CounterStateless from './Components/CounterStateless.vue';
    import PropsValidation from './Components/PropsValidation.vue';
    import Emits from './Components/Emits.vue';

    const name1 = "DaffaKhayru";
    const counter = ref(0);

    const id = 1;
    const name = "PS4";
    const price = 250
</script>

<template>
    <Counter :name="name1" />
    <CounterStateless :counter="counter" />
    <button @click="counter++">Increment</button>

    <br>

    <PropsValidation :id="id" :name="name" :price="price" />

    <br>

    <Emits :count="counter" @click="counter += 2" />
</template>
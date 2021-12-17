<script setup>
const counter = useCounter();
function subtractCounter() {
    counter.value--;
}
</script>

<template>
    <button @click="subtractCounter">
        Subtract
    </button>
</template>

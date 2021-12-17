<script setup>
const conter = useCounter();
function addToCounter() {
    conter.value++;
}
</script>

<template>
    <button @click="addToCounter">
        Add
    </button>
</template>

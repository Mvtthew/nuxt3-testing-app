<script setup>
const props = defineProps({
    prop1: {
        type: Number,
        default: 0,
    },
});
const couter = useCounter();
</script>

<template>
    <p>{{ couter }}</p>
    {{ props.prop1 }}
</template>

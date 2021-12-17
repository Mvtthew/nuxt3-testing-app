<script setup>

const { data } = await useFetch('https://jsonplaceholder.typicode.com/users');
</script>

<template>
    <ul>
        <li
            v-for="user in data"

            :key="user.id"
        >
            {{ user.id }} {{ user.name }}
        </li>
    </ul>
</template>

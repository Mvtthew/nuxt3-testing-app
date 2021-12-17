<script setup lang="ts">
useMeta({
    title: 'Index',
});

const conter = useCounter();
const { $hello } = useNuxtApp();
</script>

<template>
    <div>
        <h1>Witam</h1>
        {{ $hello() }}

        <nuxt-link to="/users">
            Users
        </nuxt-link>

        <nuxt-link to="/pages">
            Pages
        </nuxt-link>

        <counter-text :prop1="conter" />
        <counter-add-button />
        <counter-subtract-button />
    </div>
</template>

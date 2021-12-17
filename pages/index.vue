<script setup lang="ts">
const conter = useCounter();
const { $hello } = useNuxtApp();
</script>

<template>
    <div>
        <Html>
            <Title>Indeks</Title>
        </Html>

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

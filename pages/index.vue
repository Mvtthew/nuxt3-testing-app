<script setup lang="ts">

useMeta({
    title: 'Index',
});

const conter = useCounter();
const { locales, changeLocales } = useLocales();
const { $hello } = useNuxtApp();

</script>

<template>
    <div>
        <h1>{{ locales.welcome }}</h1>
        {{ $hello() }}

        <nuxt-link to="/users">
            {{ locales.users }}
        </nuxt-link>

        <nuxt-link to="/pages">
            {{ locales.pages }}
        </nuxt-link>

        <button @click=" changeLocales('pl')">
            pl
        </button>
        <button @click=" changeLocales('en')">
            en
        </button>

        <counter-text :prop1="conter" />
        <counter-add-button />
        <counter-subtract-button />
    </div>
</template>

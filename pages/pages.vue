<script>
export default {
    layout: 'custom',
};
</script>

<script setup>
useMeta({
    title: 'Pages',
});
</script>

<template>
    <div>
        <h1>pages parent</h1>

        <nuxt-link to="/">
            Home
        </nuxt-link>
        <nuxt-link to="/pages/about">
            Pages/about
        </nuxt-link>

        <NuxtChild />
    </div>
</template>

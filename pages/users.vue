<script setup lang="ts">
useMeta({
    title: 'Users',
});
</script>

<template>
    <div>
        <nuxt-link to="/">
            Home
        </nuxt-link>

        <fetching-users />
    </div>
</template>

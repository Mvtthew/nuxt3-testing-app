<script setup>
const { user, isLoggedIn } = useUser();
</script>

<template>
    <div>
        <p v-if="isLoggedIn">
            Welcome user {{ user.id }}
        </p>
        <p v-else>
            You need to logout first
        </p>

        <nuxt-link to="/user">
            User
        </nuxt-link>
    </div>
</template>

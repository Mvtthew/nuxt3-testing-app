<script setup>
const { user, setNewUser, clearUser, isLoggedIn } = useUser();

function login() {
    setNewUser({ id: 1 });
}

function logout() {
    clearUser();
}
</script>

<template>
    <div>
        user: {{ user }}<br>
        isLoggedIn: {{ isLoggedIn }}<br><br>

        <button @click="login">
            Login
        </button>
        <button @click="logout">
            Logout
        </button>

        <nuxt-link to="/dashboard">
            Dashboard
        </nuxt-link>
    </div>
</template>

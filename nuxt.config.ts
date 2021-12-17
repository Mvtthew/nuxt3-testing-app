import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/index.css'],
    publicRuntimeConfig: {
        API_BASE: '/api',
    },
    privateRuntimeConfig: {
        API_SECRET: '123',
    },
});

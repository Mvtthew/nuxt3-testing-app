import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/index.css'],
    typescript: {
        strict: true,
    },
    publicRuntimeConfig: {
        API_BASE: '/api',
    },
    privateRuntimeConfig: {
        API_SECRET: '123',
    },
});

import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            hello: (message?: string) => message ?? 'world',
        },
    };
});

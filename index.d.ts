declare module '@nuxt/schema' {
    
    interface PublicRuntimeConfig {
        BASE_URL: string;
    }

    interface PrivateRuntimeConfig {
        API_SECRET: string;
    }

}

export { };

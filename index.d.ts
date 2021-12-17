declare module '@nuxt/schema' {

    interface PublicRuntimeConfig {
        BASE_URL: string;
    }

    interface PrivateRuntimeConfig {
        API_SECRET: string;
    }

}

declare module '#app' {
    interface NuxtApp {
        $hello(msg: string): string
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $hello(msg: string): string
    }
}


export { };

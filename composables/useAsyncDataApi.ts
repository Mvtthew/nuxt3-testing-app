export const useAsyncDataApi = async<T>(endpoint: string, method: string = 'get') => {
    const config = useRuntimeConfig();
    return await useAsyncData<T>(
        endpoint,
        () => $fetch(
            endpoint,
            {
                baseURL: config.BASE_URL,
                method,
            },
        ),
    );
};

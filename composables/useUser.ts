export const useUser = () => {
    const user = useState(
        'user',
        () => ({}),
    );
    const isLoggedIn = computed(() => 'id' in user.value);

    const setNewUser = (newUser: any) => {
        user.value = { ...newUser };
    };

    const clearUser = () => {
        user.value = {};
    };
    return { user, setNewUser, clearUser, isLoggedIn };
};

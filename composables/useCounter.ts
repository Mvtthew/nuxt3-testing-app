export const useCounter = () => {
    return useState<number>(
        'counter',
        () => 0,
    );
};

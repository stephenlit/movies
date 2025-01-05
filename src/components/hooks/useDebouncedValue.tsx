import { useState, useEffect } from "react";

function useDebouncedValue<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler); // Clean up the timeout on value or delay change
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebouncedValue;
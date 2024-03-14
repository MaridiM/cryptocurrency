import { useState } from "react";

export const useForm = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;

        const regex = /^-?[0-9]+(?:\.[0-9]+)?$/;

        const maxLength = 10;
        const decimalPlaces = 2;

        if (!regex.test(value)) {
            if (value.includes(".")) {
            if (value.split(".").length > 2) return;
            }
        }

        if (value.length > maxLength) return;

        if (value.split(".").length === 2 && value.split(".")[1].length > decimalPlaces) return;

        const formattedValue = value.replace(/[^0-9.]/g, "");

        setValue(formattedValue);
    };


    return { value, handleChange }
}
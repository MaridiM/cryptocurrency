import { useEffect, useState } from "react";

export const useDerivedRecive = (amount: string, price: string) => {
    const [recive, setRecive] = useState(null)

    useEffect(() => {
        if (amount) {
        const calcRecive = +price * +amount;
        const formattedRecive = calcRecive.toString().split(".")
            .length > 1
            ? calcRecive.toString().split(".")[0] + "." + calcRecive.toString().split(".")[1].slice(0, 2)
            : calcRecive.toString()
        setRecive(formattedRecive)
        } else {
        setRecive(null)
        }
    }, [amount])

    return recive
}
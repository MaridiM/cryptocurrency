import { useEffect, useState } from "react";

export const useWSPairPrice = () => {
    const [price, setPrice] = useState("0");

    useEffect(() => {
        const ws = new WebSocket(`wss://fstream.binance.com/stream?streams=ethusdt@aggTrade`);
        ws.onopen = () => console.log("Websocket connection opened");

        ws.onmessage = (event) => {
        const { data: { p: price } } = JSON.parse(event.data);
        setPrice(price);
        };

        ws.onerror = (error) => console.error("Websocket error:", error);

        return () => ws.close();
    }, []);
    return price;
}
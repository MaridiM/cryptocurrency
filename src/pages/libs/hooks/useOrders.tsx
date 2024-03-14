import { useState } from "react";
import { Order } from "widgets/types";

export const useOrders = () => {
    const [orders, setOrders] = useState([]);

    const addOrder = (order: Order) => {
        setOrders((prevOrders) => [...prevOrders, order]);
    };

    const removeOrder = (id: number) => {
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    };

    return { orders, addOrder, removeOrder };
};

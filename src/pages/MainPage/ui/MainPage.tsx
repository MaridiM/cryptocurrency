import { useState } from "react"
import { TAction } from "features/types"
import { Orders, Widgets } from "widgets/ui"
import { useWSPairPrice, useForm, useDerivedRecive, useOrders, useGraphQLPrice } from "pages/libs/hooks"

const MainPage = () => {
    const [ actionState, setActionState ] = useState<TAction>('none')
    const ethPrice = useWSPairPrice();
    // const ethPrice1 = useGraphQLPrice();
    const { value: amount, handleChange } = useForm(null);
    const recive = useDerivedRecive(ethPrice, amount);
    const { orders, addOrder, removeOrder } = useOrders();

       
    const handlehandleButtonClick = (key: "buy" | "sell") => {
        if (amount) {
            const item = {
                id: orders.length + 1,
                amount,
                recive,
                type: key,
            };
            addOrder(item);
        }
        amount && setActionState(key)
    };

    return (
        <div className="flex flex-row flex-wrap gap-4 justify-center items-start h-screen bg-gray-200">
            <Widgets
                amount={amount}
                handleChange={handleChange}
                ethPrice={ethPrice}
                recive={recive}
                actionState={actionState}
                handleButtonClick={handlehandleButtonClick}
            />
            <Orders orders={orders} removeOrder={removeOrder} />

        </div>
    )
}

export default MainPage


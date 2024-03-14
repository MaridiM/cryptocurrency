import { FC } from "react"
import { TrashSVG } from "shared/assets/icons"

interface OrderItemProps {
    id: number
    type: 'sell' | 'buy'
    amount: string
    recive: string
    onClick: (id: number) => void
}

const OrderItem: FC<OrderItemProps> = ({ id, type, amount, recive, onClick }) => {
    const classedWrapper= {
        buy: 'border-green-600',
        sell: 'border-red-500'
    }
    const classedText= {
        buy: 'text-green-600',
        sell: 'text-red-500'
    }
    return (
        <div className={`flex flex-row border rounded-md shadow bg-white w-full hover:ml-2 transition-all duration-500 cursor-default ${classedWrapper[type]} overflow-hidden`}>
            <div className="flex flex-grow justify-between p-4 border-r">
                <span className={`font-semibold text-xs ${classedText[type]}`}>USDT/ETH</span>
                <div className="font-semibold text-xs">{amount}<span className="text-black opacity-90">ETH</span></div>
                <div className="font-semibold text-xs">{recive} <span className="text-black opacity-90">USDT</span></div>
            </div>
            <button
                className="font-semibold text-md w-10 flex justify-center items-center text-black opacity-50 hover:opacity-100 hover:bg-neutral-100  cursor-default transition-all duration-500"
                onClick={() => onClick(id)}
            ><TrashSVG className="stroke-current" /></button>
        </div>
    )
}

export default OrderItem

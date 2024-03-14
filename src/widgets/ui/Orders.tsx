import { FC } from 'react'
import { OrderItem } from 'shared/ui'
import { Order } from 'widgets/types'

interface OrdersProps {
    orders: Order[]
    removeOrder: (id: number) => void
}

const Orders: FC<OrdersProps> = ({ orders, removeOrder }) => {
    return (
        <div className="flex flex-col gap-1 justify-start items-center w-full max-w-[360px] pb-12">
            {
                orders.length 
                    ? orders.map(order => {
                            return <OrderItem 
                                key={order.id}
                                id={order.id}
                                type={order.type}
                                amount={order.amount}
                                recive={order.recive}
                                onClick={removeOrder}
                            />
                        })
                    : <span className="opacity-75 p-4 cursor-default">Orders is not founds!</span>
            }
        </div>

    )
}

export default Orders

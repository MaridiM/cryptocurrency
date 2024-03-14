import { FC } from 'react'
import { Block, Title, Input } from 'shared/ui'

interface AmountProps {
    amount: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    ethPrice: string
}

const Amount: FC<AmountProps> = ({ amount, handleChange, ethPrice}) => {
    return (
        <Block>
            <Title text='ETH amount:' />
            <Input
                name='amount'
                value={!amount ? '' : amount}
                onChange={handleChange}
            />  
            <div className="w-full flex justify-between gap-2">
                <span>1 ETH: </span>
                <span>{ethPrice} USDT</span>
            </div>
        </Block>
    )
}

export default Amount

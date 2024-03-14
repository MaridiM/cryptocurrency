import { TAction } from 'features/types'
import { FC } from 'react'
import { Block, Title, Label, Button } from 'shared/ui'

interface ActionsProps {
    actionState: TAction
    amount: string
    handleButtonClick: (type: "buy" | "sell") => void
}

const Actions: FC<ActionsProps> = ({ actionState, amount, handleButtonClick }) => {
    const btnClasses = {
        buy: `${actionState === 'buy' && 'text-white bg-green-600'} border-green-600 rounded-l-md text-green-600 ${amount && 'focus:text-white focus:bg-green-600'}`,
        sell: `border-red-600 rounded-r-md text-red-600 ${amount && 'focus:text-white focus:bg-red-600'}`,
    }
    return (
        <Block>
            <div className="p-2 font-semibold flex justify-between ">
                <Title text='Action:' />
                { actionState !== 'none' && <Label type={actionState} />}
            </div>
            
            <div className="w-full flex gap-[2px]">
                <Button
                    className={btnClasses.buy}
                    onClick={() => handleButtonClick('buy')}
                >Buy</Button>

                <Button
                    className={btnClasses.sell}
                    onClick={() => handleButtonClick('sell')}
                >Sell</Button>
            </div>
        </Block>
    )
}

export default Actions

import { FC } from "react"
import { Amount, Recive, Actions } from "features/ui"
import { TAction } from "features/types"

interface WidgetsProps {
    amount: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    ethPrice: string
    recive: string
    actionState: TAction
    handleButtonClick: (type: 'sell' | 'buy') => void
}

const Widgets: FC<WidgetsProps> = ({ amount, handleChange, ethPrice, recive, actionState, handleButtonClick }) => {
    return (
        <div className="flex flex-col gap-4 justify-start items-center w-full max-w-[320px]">
            <Amount amount={amount} handleChange={handleChange} ethPrice={ethPrice} />
            <Recive recive={recive} />
            <Actions actionState={actionState} amount={amount} handleButtonClick={handleButtonClick} />
        </div>
    )
}

export default Widgets

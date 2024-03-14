import { FC } from "react"
import { Block, Title } from "shared/ui"

interface ReciveProps {
    recive: string
}

const Recive: FC<ReciveProps> = ({ recive }) => {
    return (
        <Block>
            <Title text='You will recive:' />
            <div className="w-full border rounded-md py-2 px-4 text-right  text-lg bg-gray-100 cursor-default">
                {!recive ? '0' : recive}
            </div>
        </Block>
    )
}

export default Recive

import { FC } from 'react'

interface LabelProps {
    type: 'buy' | 'sell' | 'none'
}


const Label: FC<LabelProps> = ({ type }) => {
    const classed = {
        buy: 'text-green-600 border-green-600',
        sell: 'text-red-500 border-red-500',
        none: ''
    } 
    return (
        <span className={`px-2 pb-[1px] h-6 flex justify-center items-center rounded-md border transition-all duration-300 ${classed[!type ? 'none' : type]}`}>
            {type.toUpperCase()}
        </span>
    )
}

export default Label

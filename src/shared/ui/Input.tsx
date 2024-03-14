import { FC } from 'react'

interface InputProps {
    name: string
    value: number | string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ name, value, onChange}) => {
    const classes = "border rounded-md py-2 px-4 text-right min-w-[180px] text-lg bg-gray-100"
    return <input
        className={classes}
        type="text"
        name={name}
        placeholder='0'
        value={`${value}`}
        onChange={(e) => onChange(e)}
    />
}

export default Input

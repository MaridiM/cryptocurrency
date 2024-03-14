import { FC } from 'react'

interface TitleProps {
    text: string
}

const Title: FC<TitleProps> = ({ text }) => {
    return <span className="px-2 font-semibold">{text}</span>
}

export default Title

import { FC, ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    onClick: (e: any) => void
    className?: string
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
    const classes = `w-full h-12 flex justify-center items-center pb-[3px] border text-lg transition-all duration-500 ${className}`
    return <button className={classes} onClick={onClick} >{children}</button>
}

export default Button
import { FC, ReactNode } from 'react'

interface BlockProps {
    children: ReactNode
}

const Block: FC<BlockProps> = ({ children }) => {
    return (
        <div className="flex flex-col gap-2 border p-4 rounded-md shadow bg-white w-full">
            {children}
        </div>
    )
}

export default Block

import React from 'react'

const StickyIcon = ({Icon}) => {
    return (
        <div className="rounded-full bg-gray-200 items-center cursor-pointer hover:bg-gray-300">
            <Icon className="h-10 p-2 text-black " />
        </div>
    )
}

export default StickyIcon

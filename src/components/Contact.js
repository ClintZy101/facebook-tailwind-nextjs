import Image from 'next/image'
import React from 'react'

const Contact = ({ src, name }) => {
    return (
        <div className="relative flex space-x-2 pt-2 hover:bg-gray-200 cursor-pointer p-2 rounded-md">
            <Image
            src={src} 
            className="rounded-full"
            objectFit="cover"
            width={40}
            height={40}
            layout="fixed"
            />
            <p>{name}</p>
            <div className="absolute bottom-2 left-7 rounded-full h-3 w-3 bg-green-400 border border-gray-200 " />
        </div>
    )
}

export default Contact

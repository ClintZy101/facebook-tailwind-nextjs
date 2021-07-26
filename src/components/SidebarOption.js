import React from 'react'


const SidebarOption = ({Icon, title, src }) => {
    return (
        <div className="flex items-center text-center p-2 hover:bg-gray-200 rounded-md cursor-pointer" >
            <Icon 
            height={30}
            width={30}
            className="text-blue-500 "
            />
            <h1 className=" text-xl pl-3">{title}</h1>
        </div>
    )
}

export default SidebarOption

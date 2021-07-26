import React from 'react'


const HeaderIcon = ({ Icon }) => {
    return (

            <div className="hidden lg:flex lg:px-6 xl:px-8 py-2 cursor-pointer  hover:bg-gray-100  rounded-xl  ">
                <Icon className="h-8  text-gray-600 hover:text-blue-500 " />
            </div>

    )
}

export default HeaderIcon

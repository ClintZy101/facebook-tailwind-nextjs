import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Widgets from './Widgets'


const Body = ({posts}) => {
    return (
        <div className="flex bg-gray-100 relative">
            <Sidebar  />
            <Feed posts={posts}/>
            <Widgets />
        </div>
    )
}

export default Body

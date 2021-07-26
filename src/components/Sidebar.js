import React from 'react'
import SidebarOption from './SidebarOption'
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
}
    from "@heroicons/react/outline";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
}
    from "@heroicons/react/solid";
import Image from 'next/image';
import { useSession } from 'next-auth/client';



const Sidebar = () => {
    const session = useSession();

    return (
        <div className="hidden lg:grid  grid-cols-1 ml-5 items-center text-center pt-5  w-80 max-h-80 top-0 sticky">
            <div>
            {/* <Image 
                src={session.user.image} 
                width={40}
                height={40}/>
            <p>{session.user.name}</p> */}
            </div>

            <SidebarOption Icon={UsersIcon} title="Friends"/>
            <SidebarOption Icon={UserGroupIcon} title="Groups"/>
            <SidebarOption Icon={DesktopComputerIcon} title="Watch"/>
            <SidebarOption Icon={ClockIcon} title="Memories"/>
            <SidebarOption Icon={CalendarIcon} title="Events"/>
            <SidebarOption Icon={ShoppingBagIcon} title="Shopping"/>
            <SidebarOption Icon={ChevronDownIcon} title="See More"/>

        </div>
    )
}

export default Sidebar

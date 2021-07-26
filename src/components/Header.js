import React from 'react'
import { useRouter } from "next/router"
import Image from 'next/image'
import {
    SearchIcon,
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
    PlusIcon
} from "@heroicons/react/outline";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
} from "@heroicons/react/solid";



import HeaderIcon from './HeaderIcon';
import StickyIcon from './StickyIcon';
import { signOut, useSession } from 'next-auth/client';


const Header = () => {
    const router = useRouter();
    const [session] =useSession();

    return (
        <header>

            <div className="flex items-center bg-white shadow-2xl border-b-2 p-2 top-0 sticky" >
                {/* Left Side */}
                <div className="flex space-x-2">
                    {/* Logo */}
                    <Image
                        // onClick={() => router.push('/')}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                        width={40}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer "
                    />
                    <div className="flex rounded-full bg-gray-100 items-center  text-center p-2">
                        <SearchIcon className="rounded-full h-6 text-gray-400 cursor-pointer" />
                        <input type="text" placeholder="Search Facebook" className="hidden md:flex bg-transparent outline-none " />
                    </div>
                </div>


                {/* Middle */}
                <div className="flex flex-grow flex-shrink justify-center ml-2 mr-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                </div>

                {/* Right Side */}

                <div className="flex items-center space-x-1 mx-2">
                    {/* Avatar */}
                    <Image 
                    onClick={signOut}
                    src={session.user.image} 
                    height={40} 
                    width={40} 
                    layout="fixed"
                    className="rounded-full group cursor-pointer duration-200 ease-in transform sm:hover:scale-105 hover:z-50 " 
                    />

                    <p className="hidden xl:flex text-lg font-semibold mr-3 truncate">Clinton Taypoc</p>
                </div>

                <div className="flex justify-end space-x-2 mr-2">
                    <StickyIcon Icon={PlusIcon} />
                    <StickyIcon Icon={ChatIcon} />
                    <StickyIcon Icon={BellIcon} />
                    <StickyIcon Icon={ChevronDownIcon} />
                </div>

            </div>
        </header>

    )
}

export default Header

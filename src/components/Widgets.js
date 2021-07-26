import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import React from 'react'
import Contact from './Contact';


const contacts = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Neel_profile_2.jpg/640px-Neel_profile_2.jpg", name: "Jeff Henry" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Profile_Yovel.png/640px-Profile_Yovel.png", name: "Mark Awesome" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/YAJUSH_PROFILE_PICTURE.jpg/640px-YAJUSH_PROFILE_PICTURE.jpg", name: "Yajush Isidro" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Profile_picture_cereghino.jpg/640px-Profile_picture_cereghino.jpg", name: "I Am Guitarist" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Profile_picture_cereghino.jpg/640px-Profile_picture_cereghino.jpg", name: "I Am Singer" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Profile_photo_of_Szymon_Klarman.png/640px-Profile_photo_of_Szymon_Klarman.png", name: "Who Am I" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/-George_Richmond-_MET_DP-386-275.jpg/640px--George_Richmond-_MET_DP-386-275.jpg", name: "George Richmond" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Pinastika_Profile_Pic.jpg/640px-Pinastika_Profile_Pic.jpg", name: "Lina Montana" },
];

const Widgets = () => {

    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5 top-0 sticky">
            <hr className=" mb-4 "/>

            <div className="flex justify-between">

                <p className="text-gray-600">Contacts</p>

                <div className="flex space-x-2 text-gray-500">
                    <VideoCameraIcon className="h-5 cursor-pointer" />
                    <SearchIcon className="h-5 cursor-pointer" />
                    <DotsHorizontalIcon className="h-5 cursor-pointer" />
                </div>

            </div>

            {contacts.map((contact)=> (
                <Contact key={contact.src} src={contact.src}  name={contact.name} />
            ))}

        </div>
    )
}

export default Widgets

import { ChatIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

const Post = ({ name, image, message, postImage, email, timestamp }) => {
    return (
        <div className="flex flex-col p-5 bg-white rounded-xl shadow-md md:mx-10 mb-5">
            <div className="flex items- space-x-2">
                <Image
                    src={image}
                    height={40}
                    width={40}
                    className="rounded-full"
                />
                <div className="flex flex-col">
                    <p className="font-medium">{name}</p>
                    <p className="text-xs text-gray-400">
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </p>
                </div>
            </div>
            <div>
                <p className="pt-4">{message}</p>
            </div> 

            {postImage && (
                <div className="relative h-72 md:h-96 bg-white">
                    <Image 
                    src={postImage}
                    objectFit="cover"
                    layout="fill"
                    />
                </div>
            )}
                {/* Line */}
                <hr className="my-3"/>

                {/* {Post Footer} */}
            <div className="flex justify-around items-center bg-white  text-gray-400 ">
                <div className="flex space-x-2 items-center cursor-pointer hover:bg-gray-300 py-2 px-5 rounded-md">
                    <ThumbUpIcon className="h-8 " />
                    <p>Like</p>
                </div>
                <div className="flex space-x-2 items-center cursor-pointer hover:bg-gray-300 py-2 px-5 rounded-md">
                    <ChatIcon className="h-8" />
                    <p>Comment</p>
                </div>
                <div className="flex space-x-2 items-center cursor-pointer hover:bg-gray-300 py-2 px-5 rounded-md">
                    <ShareIcon className="h-8" />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post

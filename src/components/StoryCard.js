import Image from 'next/image'


const StoryCard = ({ src }) => {
    return (
        <div className=" flex flex-col shadow-lg rounded-2xl ">
            <div className="flex items-center  p-1 rounded-t-2xl  bg-black text-white">
                <Image src={src} height={40} width={40} objectFit="cover" className="rounded-full" />

                <p className="text-center ml-3 truncate">Christine Joy</p>
            </div>

            <Image src={src} height={250} width={200} className="rounded-b-2xl group cursor-pointer duration-200 ease-in transform sm:hover:scale-105 hover:z-50 " />

        </div>
    )
}

export default StoryCard

import { signIn } from 'next-auth/client'
import Image from 'next/image'
import React from 'react'

const Login = () => {
    return (
        <div className="grid place-items-center">
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                width={300}
                height={300}
                objectFit="contain"
            />
            <h1 onClick={signIn} className="place-items-center p-5 m-8 bg-blue-500 rounded-full cursor-pointer text-white">Login with Facebook</h1>
        </div>
    )
}

export default Login

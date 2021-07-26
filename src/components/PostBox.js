import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { VideoCameraIcon, PhotographIcon, EmojiHappyIcon } from "@heroicons/react/solid"
import { useSession } from 'next-auth/client'
import { db, storage } from '../../firebase'
import firebase from 'firebase'


const PostBox = () => {
    const [session] = useSession();
    // null = initialize/initial state is empty/null
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const sendPost = (e) => {
        e.preventDefault();
        // evaluate input and then return
        if (!inputRef.current.value) return;

        // add post with details to firestore database
        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
            if (imageToPost) {
                // upload image from database
                const uploadTask = storage
                .ref(`posts/${doc.id}`)
                // convert image to string/data_url
                .putString(imageToPost, 'data_url');

                removeImage();

                uploadTask.on(
                    // listen to state change
                    "state_change",
                    // progress
                    null,
                    // completion
                    (error) => console.error(error),
                    () => {
                        // when the upload completes
                        storage
                        .ref('posts')
                        .child(doc.id)
                        .getDownloadURL()
                        .then((url) => {
                            db.collection('posts').doc(doc.id).set(
                                {
                                    postImage:url,
                                },
                                // this merge is important: not to delete the docs or data
                                { merge: true }
                            );
                        });
                    }
                );
            }
        })
        // clears the input box for you to type afresh
        inputRef.current.value = "";
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        // this will load the file to store. while the file is loading to the store, do this:set the result as imageToPost
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className="bg-white mt-7 mb-5 rounded-xl shadow-md md:mx-10" >
            <div className="flex content-center p-4 space-x-5 group group-hover:scale-105">
                <Image src={session.user.image} height={40} width={40} objectFit="cover" className="rounded-full" />

                <form className="flex flex-1" >

                    <input
                        type="text"
                        ref={inputRef}
                        placeholder={`What's on Your Mind, ${session.user.name}?`}
                        className="flex-grow outline-none rounded-full bg-gray-100 px-10"
                    />

                    <button hidden type="submit"
                        onClick={sendPost}>
                        Submit
                    </button>
                </form>

                {imageToPost && (
                    <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                        <img className="h-10 object-contain" src={imageToPost} alt="" />

                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}

            </div>

            <hr className="mx-7" />

            {/* Icons */}

            <div className="mx-10 my-2 flex justify-between items-center">

                <div className="flex items-center space-x-2">
                    <VideoCameraIcon className="h-8 text-red-500" />
                    <h1>Live Video</h1>
                </div>

                <div
                    onClick={() => filepickerRef.current.click()}
                    className="flex items-center space-x-2 cursor-pointer" >
                    <PhotographIcon className="h-8 text-green-400" />
                    <h1>Photo/Video</h1>
                    <input ref={filepickerRef} onClick={addImageToPost} type="file" hidden />
                </div>

                <div className="flex items-center space-x-2">
                    <EmojiHappyIcon className="h-8 text-yellow-300" />
                    <h1>Feeling/Activity</h1>
                </div>

            </div>

        </div>
    )
}

export default PostBox

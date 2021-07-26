import React from 'react'
import Posts from './Posts'
import PostBox from './PostBox'
import StoryRow from './StoryRow'

const Feed = ({posts}) => {
    return (
        <div className="flex flex-col pt-5 content-center ">
            <StoryRow />
            <PostBox />
            <Posts posts={posts}/>
        </div>
    )
}

export default Feed

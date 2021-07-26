import React from 'react'
import StoryCard from './StoryCard'

const StoryRow = () => {
    return (
        <div className="flex  md:mx-3 space-x-3 ">

            <StoryCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Eurasian_blue_tit_Lancashire.jpg/640px-Eurasian_blue_tit_Lancashire.jpg" />
            <StoryCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/%D0%9A%D1%80%D0%B8%D1%88%D1%82%D0%B0%D0%BB%D0%B5%D0%B2%D1%96_%D0%BA%D1%80%D0%B8%D0%BB%D0%B0.jpg/640px-%D0%9A%D1%80%D0%B8%D1%88%D1%82%D0%B0%D0%BB%D0%B5%D0%B2%D1%96_%D0%BA%D1%80%D0%B8%D0%BB%D0%B0.jpg" />
            <StoryCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Giraffes_Mikumi_National_Park.jpg/640px-Giraffes_Mikumi_National_Park.jpg" />
            <StoryCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.jpg/640px-Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.jpg" />
          
        </div>
    )
}

export default StoryRow

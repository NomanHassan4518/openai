import React from 'react'
import OverviewHome from './OverviewHome'
import TextOverview from './TextOverview'
import ImageOverview from './ImageOverview'
import AudioOverview from './AudioOverview'
import PastOverviews from './PastOverviews'
import Featured from './Featured'


const Overview = () => {

  return (
    <div  >
     <div>
      <OverviewHome/>
     </div>

     <div>
      <TextOverview/>
     </div>

     <div>
      <ImageOverview/>
     </div>

     <div>
      <AudioOverview/>
     </div>

     <div>
      <PastOverviews/>
     </div>

     <div>
      <Featured/>
     </div>
    </div>
  )
}

export default Overview

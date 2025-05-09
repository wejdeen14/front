import React from 'react'
import ModIncluDash from './ContenueDash/ModIncluDash'
import Header from './Header'
import TabModerateur from './TabModerateur'

function ModerateurMenu() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
    <TabModerateur/>
      <div className='flex-1 flex flex-col overflow-hidden'>
   <Header/>
   <div className='flex-1 grap-12 w-full mt-2 overflow-auto'> 
       <ModIncluDash/>
    </div>
    </div>
    </div>
  )
}

export default ModerateurMenu
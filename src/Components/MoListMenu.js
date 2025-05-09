import React from 'react';
import Header from './Header';
import ListMenu from './ListMenu';
import TabModerateur from './TabModerateur';
function MoListMenu () {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
    <TabModerateur/>
      <div className='flex-1'>
   <Header/>
   <div className='flex-1 grap-12 w-full mt-2'> 
       <ListMenu/>
    </div>
    </div>
    </div>
  );
}

export default MoListMenu;
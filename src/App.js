import React from 'react'
import ProfilePhoto from './components/profile/ProfilePhoto' 
import FullName from './components/profile/FullName' 
import Address from './components/profile/Address'



function App() {
  
  return ( 
 <>   
<div style={{
      display : "flex" , 
      flexWrap : "wrap" ,
       justifyContent : "space-evenly" ,
        width:"80%" ,
         margin:"auto" }} >
   
    <ProfilePhoto />
    <div>
    <FullName />
    <Address />
    </div>
   </div> 
   </>
  )
  
}


export default App;

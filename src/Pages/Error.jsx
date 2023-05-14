import React from 'react'
import background from '../Assets/Error_Page.jpg'
function Error() {
  return (
  <>
    <div style ={{display:"flex", justifyContent:"center", alignItems: "center",padding:"100px"}}>
        <img src={background} alt="" />
    </div>
    <div className="d-grid gap-2 col-6 mx-auto">
        <button type="button" class="btn btn-primary"><b>Back To Home</b></button>
    </div>
  </>
  )
}

export default Error

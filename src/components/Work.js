import React from 'react'
import construction from "../images/contruction.jpg"

export default function Work() {
  return (
    <div>
     
        <div className="workPage" bg="black">
          <img src={construction} alt="" height={600} width={1300} style={{ marginLeft:90, paddingTop: 40, paddingBottom: 40, paddingLeft: 20, paddingRight: 20 }} />
        </div>
    </div>
  )
}

import React from 'react'
import gog from "../Comp/gog.svg";


const Google = () => {
  return (
    <div className='container   bg-light'>
        <div className='d-flex justify-content-around pt-5 pb-5'>
         <div className='my-auto'>
            <p  style={{ fontSize: "32px" }}>See how LPU students prepare <br /> and bag <span style={{ color: "#e46a19" }}>  Rs. 1 Cr.</span> placements at <br /> <span style={{ color: "#e46a19" }}>Top companies</span>!</p>
            <p>LPU students are guided on niche technologies ind emand. <br /> Possessing such skill sets separates them from the ordinary <br /> and leads them to grab top placements around the world!</p>
         </div>
         <div>
            <img src={gog} alt="gog" />
         </div>
         </div>
    </div>
  )
}

export default Google
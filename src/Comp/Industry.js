import React from 'react'
import ad from '../Comp/logo/adaitya.png';
import lef from '../Comp/logo/lef.png';
import rig from '../Comp/logo/rig.png';
import Carousel from './Carousel';


const Industry = () => {
  const cic=[ 
  <div> 
    <div className='d-flex justify-content-center mt-5'>
  <img src={ad}  alt="" />  
   </div>
   <p style={{ fontSize: "20px"}} className='text-center fw-bold'>Aditya Pal Singh</p>
   <p style={{ fontSize: "14px"}} className='text-center fst-italic mt-1'>Director Head, Talent Acquisition</p>
   <p style={{ fontSize: "18px"}} className='text-center  my-1'>Recruiting from LPU has always been fruitful to us, no matter what the requirement is, this <br /> campus always has the best to offer. Being a strategic partner, LPU can be called one of the <br /> best talent pools as they have understood the demand of the industry and well equipped <br /> students with the same.</p> 
   </div>,<div> 
    <div className='d-flex justify-content-center mt-5'>
  <img src={ad}  alt="" />  
   </div>
   <p style={{ fontSize: "20px"}} className='text-center fw-bold'>Aditya Pal Singh</p>
   <p style={{ fontSize: "14px"}} className='text-center fst-italic mt-1'>Director Head, Talent Acquisition</p>
   <p style={{ fontSize: "18px"}} className='text-center  my-1'>Recruiting from LPU has always been fruitful to us, no matter what the requirement is, this <br /> campus always has the best to offer. Being a strategic partner, LPU can be called one of the <br /> best talent pools as they have understood the demand of the industry and well equipped <br /> students with the same.</p> 
   </div>,<div> 
    <div className='d-flex justify-content-center mt-5'>
  <img src={ad}  alt="" />  
   </div>
   <p style={{ fontSize: "20px"}} className='text-center fw-bold'>Aditya Pal Singh</p>
   <p style={{ fontSize: "14px"}} className='text-center fst-italic mt-1'>Director Head, Talent Acquisition</p>
   <p style={{ fontSize: "18px"}} className='text-center  my-1'>Recruiting from LPU has always been fruitful to us, no matter what the requirement is, this <br /> campus always has the best to offer. Being a strategic partner, LPU can be called one of the <br /> best talent pools as they have understood the demand of the industry and well equipped <br /> students with the same.</p> 
   </div>
   ]
  return (
    <div className='container mt-5'>
    
      <p className='text-center mt-5' style={{ fontSize: "40px", "line-height": "130%" }}  > What <span style={{ color: "#e46a19" }}>Industry and Students </span>
        Speak  <br />about<span style={{ color: "#e46a19" }}> LPU Placements</span> </p>
        <Carousel items={cic} mob={3} tab={3} lap={1}/>
       
        <div className='d-flex justify-content-center my-3'>
        <img src={lef}  alt="" />  
        <img src={rig}  alt="" />  
        </div>
  
    </div>
  )
}

export default Industry
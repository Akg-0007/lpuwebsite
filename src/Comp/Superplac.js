import React from 'react'
import ukt from '../Comp/logo/ukt.png';
import mic from '../Comp/logo/micro.png';
import gog from '../Comp/logo/gooogle.png';
import byj from '../Comp/logo/byju.png';


const Superplac = () => {
  return (
    <div className='container'>
    <p style={{ fontSize: "40px", "line-height": "130%" }}>Super Dream  <span style={{ color: "#e46a19" }}>Placements</span> </p>
    <div className="">
        <div className=" d-flex justify-content-between mb-3">
        <p className='my-auto ' style={{ fontSize: "26px" }}>CTC   <span style={{ color: "#e46a19" }}>   ₹ 30 Lacs </span> <br /> or <span style={{ color: "#e46a19" }}>above</span></p>
         <div className="d-flex">
         <div class="card m-1 border border-warning bg-light p-2" style={{width: "18rem"}}>
  <img src={ukt} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Utkarsh Kumar</h5>
    <p class="card-text">LPU Alumni, Class of 2007</p>
    <img src={byj} alt="" />

  </div>
        </div>
        <div class="card m-1 bg-light p-2" style={{width: "18rem"}}>
  <img src={ukt} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Utkarsh Kumar</h5>
    <p class="card-text">LPU Alumni, Class of 2007</p>
    <img src={gog} alt="" />

  </div>
        </div>
        <div class="card m-1 bg-light p-2" style={{width: "18rem"}}>
  <img src={ukt} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Utkarsh Kumar</h5>
    <p class="card-text">LPU Alumni, Class of 2007</p>
    <img src={mic} alt="" />

  </div>
        </div>
         </div>
        </div>
        <div className=" d-flex justify-content-between mb-3">
        <p className='my-auto ' style={{ fontSize: "26px" }}>CTC   <span style={{ color: "#e46a19" }}>   ₹ 30 Lacs </span> <br /> or <span style={{ color: "#e46a19" }}>above</span></p>
         <div className="d-flex">
         <div class="card m-1 bg-light p-2" style={{width: "18rem"}}>
  <img src={ukt} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Utkarsh Kumar</h5>
    <p class="card-text">LPU Alumni, Class of 2007</p>
    <img src={byj} alt="" />

  </div>
        </div>
        <div class="card m-1 bg-light p-2" style={{width: "18rem"}}>
  <img src={ukt} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Utkarsh Kumar</h5>
    <p class="card-text">LPU Alumni, Class of 2007</p>
    <img src={gog} alt="" />

  </div>
        </div>
        <div class="card m-1 bg-light p-2" style={{width: "18rem"}}>
  <img src={ukt} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Utkarsh Kumar</h5>
    <p class="card-text">LPU Alumni, Class of 2007</p>
    <img src={mic} alt="" />

  </div>
        </div>
         </div>
        </div>
    </div>
    
    
    </div>
  )
}

export default Superplac
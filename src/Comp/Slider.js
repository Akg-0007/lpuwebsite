import React from 'react'
import im1 from '../Comp/logo/image 33.png';
import im2 from '../Comp/logo/image 33 (1).png';
import im3 from '../Comp/logo/image 33 (2).png';
import im4 from '../Comp/logo/image 33 (3).png';



const Slider = () => {
  return (
    <div className='container'>
        <div className="d-flex my-5">
        <div class="card m-1 bg-light p-2" style={{width: "22rem"}}>
  <img src={im1} class="card-img-top" alt="..."/>
  <div class="card-body">   
    <p class="card-text text-start" style={{fontSize:"18px",color:"#F37335"}}>Students' diversity and <br /> interaction with Industry <br /> experts shaped my career <br /> at LPU</p>
    <p className='fst-italic'> Karan Mittal . CSE </p>
  </div>
  
        </div>

        <div class="card m-1 bg-light p-2" style={{width: "22rem"}}>
  <img src={im2} class="card-img-top" alt="..."/>
  <div class="card-body">   
    <p class="card-text text-start" style={{fontSize:"18px",color:"#F37335"}}>Students' diversity and <br /> interaction with Industry <br /> experts shaped my career <br /> at LPU</p>
    <p className='fst-italic'> Tanya Arora . CSE </p>
  </div>
        </div>

        <div class="card m-1 bg-light p-2" style={{width: "22rem"}}>
  <img src={im3} class="card-img-top" alt="..."/>
  <div class="card-body">   
    <p class="card-text text-start" style={{fontSize:"18px",color:"#F37335"}}>Students' diversity and <br /> interaction with Industry <br /> experts shaped my career <br /> at LPU</p>
    <p className='fst-italic'> Satyam Kumar . CSE </p>
  </div>
        </div>

        <div class="card m-1 bg-light p-2" style={{width: "22rem"}}>
  <img src={im4} class="card-img-top" alt="..."/>
  <div class="card-body">   
    <p class="card-text text-start" style={{fontSize:"18px",color:"#F37335"}}>Students' diversity and <br /> interaction with Industry <br /> experts shaped my career <br /> at LPU</p>
    <p className='fst-italic'> Ayush Sharma . CSE </p>
  </div>
        </div>
        </div>

    </div>
  )
}

export default Slider
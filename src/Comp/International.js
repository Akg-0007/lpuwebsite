import React from 'react'
import int from '../Comp/logo/int.png';
import Carousel from './Carousel';

const International = () => {
  const items=[ <div class="card m-1 bg-light p-2" style={{width: "30rem"}} >
  <img src={int} height="200px" width="400px" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Crore Club (Alumni)</h5>
    <p class="card-text">The Crore club of LPU graduates is getting bigger day by day. Several vertos from LPU are earning in crores annually from industry giants around the world like Apple, Google, Microsoft, Facebook, Amazon, Adobe, Cox, Walmart, EY etc.</p>
    
  </div>
        </div>,
         <div class="card m-1 bg-light p-2" style={{width: "30rem"}} >
         <img src={int} height="200px" width="400px" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">Crore Club (Alumni)</h5>
           <p class="card-text">The Crore club of LPU graduates is getting bigger day by day. Several vertos from LPU are earning in crores annually from industry giants around the world like Apple, Google, Microsoft, Facebook, Amazon, Adobe, Cox, Walmart, EY etc.</p>
           
         </div>
               </div>, <div class="card m-1 bg-light p-2" style={{width: "30rem"}} >
  <img src={int} height="200px" width="400px" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Crore Club (Alumni)</h5>
    <p class="card-text">The Crore club of LPU graduates is getting bigger day by day. Several vertos from LPU are earning in crores annually from industry giants around the world like Apple, Google, Microsoft, Facebook, Amazon, Adobe, Cox, Walmart, EY etc.</p>
    
  </div>
        </div>, <div class="card m-1 bg-light p-2" style={{width: "30rem"}} >
  <img src={int} height="200px" width="400px" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Crore Club (Alumni)</h5>
    <p class="card-text">The Crore club of LPU graduates is getting bigger day by day. Several vertos from LPU are earning in crores annually from industry giants around the world like Apple, Google, Microsoft, Facebook, Amazon, Adobe, Cox, Walmart, EY etc.</p>
    
  </div>
        </div>, <div class="card m-1 bg-light p-2" style={{width: "30rem"}} >
  <img src={int} height="200px" width="400px" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Crore Club (Alumni)</h5>
    <p class="card-text">The Crore club of LPU graduates is getting bigger day by day. Several vertos from LPU are earning in crores annually from industry giants around the world like Apple, Google, Microsoft, Facebook, Amazon, Adobe, Cox, Walmart, EY etc.</p>
    
  </div>
        </div>]
  return (
    <div className='container my-5 ' >
    <p style={{ fontSize: "40px", "line-height": "130%" }}>LPU Students Shining On <br /> <span style={{ color: "#e46a19" }}>International Platforms</span> </p>
    <div>
    
     <div className=''> 
     <div className="d-flex ">
     <Carousel items={items} mob={1} tab={3} lap={3}/>
     </div>
    
     
     </div>
    
  </div>
    </div>
  )
}

export default International
import React from 'react'
import img1 from '../Comp/Sanjay Gandhi 1.jpg'
import Carousel from './Carousel';

const Nav = () => {
  const photo=[ <img src={img1}  alt="lpu" />,
   <img src={img1}  alt="lpu" />,
   <img src={img1}  alt="lpu" />]
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a class="navbar-brand ms-5" href="#">
      <img src="https://i.pinimg.com/736x/c9/12/d4/c912d49f5f63e3c25aae2465f7577e7a.jpg" alt="" width="100%" height="40px"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
      
        <a class=" nav-link active nav-ho " aria-current="page" href="#">About</a>
        <a class="nav-link nav-ho" href="#">Academics</a>
        <a class="nav-link nav-ho" href="#">Admissions</a>
        <a class="nav-link  nav-ho" href="#">Research</a>
        <a class="nav-link nav-ho-1" href="#">Placements</a>
        <a class="nav-link nav-ho" href="#">Campus Life</a>
        <a class="nav-link nav-ho me-5" href="#">Disciplines</a>
        <button class="btn btn-secondary me-5">Apply Now</button>


      </div>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
  
    
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav  ">
      
        <a class="nav-ho-1 nav-link active" aria-current="page" href="#">About</a>
        <a class="nav-ho nav-link text-secondary" href="#">Academics</a>
        <a class="nav-ho nav-link" href="#">Admissions</a>
        <a class="nav-ho nav-link " href="#" >Research</a>
        <a class="nav-ho nav-link" href="#">Placements</a>
        <a class="nav-ho nav-link" href="#">Campus Life</a>
        <a class="nav-ho nav-link " href="#">Disciplines</a>
        


      </div>
    </div>
  </div>
</nav>
<div className="container  bg-light d-flex justify-content-around">
    <div className='d-flex-column justify-content-center my-auto'>
        <p className='' style={{fontSize:"50px"}}>Top Placements with <br/> <span className='faang'>FAANG and Fortune </span> <br/>500 Companies</p>
        <p>Go from diagrams, wireframes and prototypes  without <br />switching apps or updating across platforms.</p>
    </div>
    
    <div className='shadow-lg p-3 my-5 d-flex  bg-body rounded '>
        {/* <img src={img1} style={{fontSize:"16px"}} alt="lpu" /> */}
        <Carousel items={photo} mob={3} tab={3} lap={1}/>
    </div>
    {/* <Carousel items={photo} mob={3} tab={3} lap={1}/> */}

   

    
    
    
   
</div>
</>
  )
}

export default Nav
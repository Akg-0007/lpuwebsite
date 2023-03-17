import React from 'react'
import pep from '../Comp/logo/pep.png';


const Pepac = () => {
  return (
    <div className='container'>
            <p style={{ fontSize: "40px", "line-height": "130%" }}><span style={{ color: "#e46a19" }}>Placement </span>Focussed Activities </p>
            <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
  
    
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav  ">
      
        <a class="nav-ho-1 nav-link active" aria-current="page" href="#">PROFESSIONAL ENHANCEMENT</a>
        <a class="nav-ho nav-link text-secondary" href="#">INTERNSHIPS & TRAININGS</a>
        <a class="nav-ho nav-link" href="#">CAREER MENTORING</a>
        <a class="nav-ho nav-link " href="#" >INDUSTRY WORKSHOPS & PROJECTS</a>
        <a class="nav-ho nav-link" href="#">JOINT CAMPUS PLACEMENTS</a>
        


      </div>
    </div>
  </div>
             </nav>
             <div className="d-flex">
                <img src={pep} alt="" />
                {/* Center for Professional Enhancement */}
                <div className='mx-auto my-auto'>
                <p style={{ fontSize: "40px", "line-height": "130%" }}>Center for<span style={{ color: "#e46a19" }}>Professional <br></br>Enhancement</span></p>
                <p>Center for Professional Enhancement (CPE) at LPU  aims at <br /> imparting new skill sets relevant to the current industry <br /> demands, ensuring holistic development of students with <br /> regard to aptitude, verbal ability, soft skills, behavioral and <br /> managerial skills.  </p>
                </div>
             </div>
    </div>
  )
}

export default Pepac
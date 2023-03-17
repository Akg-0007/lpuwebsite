import React from 'react'
import stat from '../Comp/logo/stat.png';


const Placstat = () => {
  return (
    <div className='container'>
     <div className="d-flex justify-content-between">
        <div className="">
            <p style={{ fontSize: "40px", "line-height": "130%" }}>Placement <span style={{ color: "#e46a19" }}>Statistics</span> </p>
        </div>
        <div className="">
        <div class="dropdown">
            <span className='px-2'>Select Stream:</span>
  <button class="btn btn-light btn-lg dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Computer Science
  </button>
  <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Ece</a></li>
    <li><a class="dropdown-item" href="#">Mec</a></li>
    <li><a class="dropdown-item" href="#">Civil</a></li>
  </ul>
</div>
        </div>
     </div>
     <div className="d-flex justify-content-around border border-dark pt-3 rounded">
        <div>
          <p className='m-0'
            style={{
              fontSize: "30px",
              "line-height": "130%",
              color: "#e46a19",
            }}
          >
            1600+
          </p>
          <p  style={{
              fontSize: "12px",
              "line-height": "150%"}}>
            Recruiters hired <br /> LPU students
          </p>
        </div>
        <div>
          <p className='m-0'
            style={{
              fontSize: "30px",
              "line-height": "130%",
              color: "#e46a19",
            }}
          >
            1600+
          </p>
          <p style={{
              fontSize: "12px"}}>
            Recruiters hired <br /> LPU students
          </p>
        </div>
        <div>
          <p className='m-0'
            style={{
              fontSize: "30px",
              "line-height": "130%",
              color: "#e46a19",
            }}
          >
            1600+
          </p>
          <p style={{
              fontSize: "12px"}}>
            Recruiters hired <br /> LPU students
          </p>
        </div>
        <div>
          <p className='m-0'
            style={{
              fontSize: "30px",
              "line-height": "130%",
              color: "#e46a19",
            }}
          >
            1600+
          </p>
          <p style={{
              fontSize: "12px"}}>
            Recruiters hired <br /> LPU students
          </p>
        </div>
        <div>
          <p className='m-0'
            style={{
              fontSize: "30px",
              "line-height": "130%",
              color: "#e46a19",
            }}
          >
            1600+
          </p>
          <p style={{
              fontSize: "12px"}}>
            Recruiters hired <br /> LPU students
          </p>
        </div>
      </div >
      <div className='d-flex justify-content-between '>
      <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
  
    
    <div class="collapse navbar-collapse d-flex justify-content-start" id="navbarNavAltMarkup">
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
    <div className="">
        <img src={stat} width="26px" className='mt-3' height="26px" alt="" />
    </div>
</div>
     


<table class="table table-hover">
  <thead className='table-dark'>
    <tr>
      <th scope="col"></th>
      <th scope="col">2019</th>
      <th scope="col">2020</th>
      <th scope="col">2021</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th scope="row">Average CTC of Top 10%</th>
      <td>Rs. 4.5 Lakh</td>
      <td>Rs. 4.5 Lakh</td>
      <td>Rs. 4.5 Lakh</td>
    </tr>
    <tr>
      <th scope="row">Average CTC of Top 30%</th>
      <td>Rs. 4.5 Lakh</td>
      <td>Rs. 4.5 Lakh</td>
      <td>Rs. 4.5 Lakh</td>
    </tr>
    <tr className=''>
      <th scope="row">Average CTC of Top 50%</th>
      <td>Rs. 4.5 Lakh</td>
      <td>Rs. 4.5 Lakh</td>
      <td>Rs. 4.5 Lakh</td>
    </tr>
    <tr>
      <th scope="row">Average CTC of Complete Batch</th>
      <td>Rs. 4.5 Lakh</td>
      <td>Rs. 4.5 Lakh</td>
      <td>Rs. 4.5 Lakh</td>
    </tr>
    <tr>
      <th scope="row">Median CTC</th>
      <td>Rs. 4.5 Lakh</td>
      <td>Rs. 4.5 Lakh</td>
      <td>Rs. 4.5 Lakh</td>
    </tr>
    <tr>
      <th scope="row">Higher CTC</th>
      <td>Rs. 4.5 Lakh</td>
      <td>Rs. 4.5 Lakh</td>
      <td>Rs. 4.5 Lakh</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Placstat
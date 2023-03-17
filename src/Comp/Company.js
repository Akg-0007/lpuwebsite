import React from "react";
import img22 from '../Comp/logo/image 22.png';
import img23 from '../Comp/logo/image 23.png';
import img24 from '../Comp/logo/image 24.png';
import img26 from '../Comp/logo/image 26.png';
import img27 from '../Comp/logo/image 27.png';
import img28 from '../Comp/logo/image 28.png';
import img29 from '../Comp/logo/image 29.png';
import img30 from '../Comp/logo/image 30.png';
import img31 from '../Comp/logo/image 31.png';
import Carousel from './Carousel';


const Company = () => {
  const imag=[<div className=""><img src={img22} alt="g" /></div>,
  <div className=""><img src={img23} alt="g" /></div>,
  <div className=""><img src={img24} alt="g" /></div>,
  <div className=""><img src={img26} alt="g" /></div>,
  <div className=""><img src={img27} alt="g" /></div>,
  <div className=""><img src={img28} alt="g" /></div>,
  <div className=""><img src={img29} alt="g" /></div>,
  <div className=""><img src={img30} alt="g" /></div>,
  <div className=""><img src={img31} alt="g" /></div>]
  return (
    <div className="container mb-5">
      <div className="d-flex justify-content-around bg-dark w-100 pt-5 pb-5">
        <div>
          <p
            style={{
              fontSize: "40px",
              "line-height": "130%",
              color: "#e46a19",
            }}
          >
            1600+
          </p>
          <p style={{color:"white"}}>
            Recruiters hired <br /> LPU students
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "40px",
              "line-height": "130%",
              color: "#e46a19",
            }}
          >
            1600+
          </p>
          <p style={{color:"white"}}>
            Recruiters hired <br /> LPU students
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "40px",
              "line-height": "130%",
              color: "#e46a19",
            }}
          >
            1600+
          </p>
          <p style={{color:"white"}}>
            Recruiters hired <br /> LPU students
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "40px",
              "line-height": "130%",
              color: "#e46a19",
            }}
          >
            1600+
          </p>
          <p style={{color:"white"}}>
            Recruiters hired <br /> LPU students
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "40px",
              "line-height": "130%",
              color: "#e46a19",
            }}
          >
            1600+
          </p>
          <p style={{color:"white"}}>
            Recruiters hired <br /> LPU students
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-around  w-100 pt-2 pb-2">
        {/* <div className=""><img src={img22} alt="g" /></div>
        <div className=""><img src={img23} alt="g" /></div>
        <div className=""><img src={img24} alt="g" /></div>
        <div className=""><img src={img26} alt="g" /></div>
        <div className=""><img src={img27} alt="g" /></div>
        <div className=""><img src={img28} alt="g" /></div>
        <div className=""><img src={img29} alt="g" /></div>
        <div className=""><img src={img30} alt="g" /></div>
        <div className=""><img src={img31} alt="g" /></div> */}
             <Carousel items={imag} mob={3} tab={6} lap={6}/>

      </div>
    </div>
  );
};

export default Company;

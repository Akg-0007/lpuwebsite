import React from 'react'
import { AiFillApple ,AiFillAndroid,AiFillFacebook,AiFillTwitterSquare,AiFillLinkedin,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';
import { TbBrandTelegram} from 'react-icons/tb';

const Footer = () => {
  return (
    <div className="container bg-dark text-light">
      <div className="d-flex justify-content-between p-5">
        <div className="">
          <p>Admissions</p>
          <ul>
            <li>Admissions 2002-23</li>
            <li>International Admissions 2022-2023</li>
            <li>Distance Education Admissio</li>
            <li>Online Education Admissions</li>
            <li>Scholarship</li>
            <li>Fee Deposit</li>
            <li>FAQ,s</li>
            <li>Top Engineering Colleges</li>
            <li>Top MBA Colleges</li>
          </ul>
          <p>Media</p>
          <ul>
            <li>TV Ads</li>
            <li>Media Coverage</li>
          </ul>
        </div>

        <div className="">
          <p>Other Links:</p>
          <ul>
            <li>
              Application for Recogination <br /> (ODL)
            </li>
            <li>
              Application for Recogination <br /> (Online)
            </li>
            <li>
              Application for Recogination <br /> (Online) <br />
              (without prior approval of the UGC' <br />
              category)
            </li>
            <li>Alumni</li>
            <li>Enterpreneurship</li>
            <li>Download Event Certificate</li>
            <li>Certificate Authentication</li>
            <li>Digilocker NAD</li>
            <li>Joint Placement Drive</li>
            <li>10th Convaction Gallary</li>
            <li>Knowledge Brainstorm</li>
          </ul>
        </div>

        <div className="">
          <p>Other Links:</p>
          <ul>
            <li>ICAR</li>
            <li>NIRF</li>
            <li>
              Document <br /> Verification
            </li>
            <li>ARRIA</li>
            <li>I-STEM</li>
            <li>Distance Education</li>
            <li>Education Awards</li>
            <li>Explorica</li>
            <li>LPU Summer School</li>
            <li>Parent's Login</li>
            <li>UMS Login</li>
            <li>Campus Visit</li>
            <li>Jobs At LPU</li>
            <li>Supplier Registration</li>
          </ul>
        </div>

        <div className="">
          <img
            width="auto"
            height="auto"
            src="https://www.lpu.in/images/360.gif"
          />

          <div className="d-flex">
            <h4>Download App</h4>
            <AiFillApple fontSize={"2rem"} />
            <AiFillAndroid fontSize={"2rem"} />
          </div>
          <p>Subscribe Newsletter</p>
          <div class="input-group mb-3">
            <span class="input-group-text bg-dark" id="addon-wrapping">
              <TbBrandTelegram color="white" />
            </span>

            <input
              type="text"
              class="form-control bg-light"
              placeholder="Enter your Email "
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-warning"
              type="button"
              id="button-addon2"
            >
              Go
            </button>
          </div>
          <p className='mb-0'>Tel: +91-1824-517000</p>
          <p className='mb-0'>Tel: +91-1824-517000</p>
          <div className="d-flex my-4">
            <span>
              <AiFillFacebook fontSize={"2rem"} />
            </span>
            <span>
              <AiFillTwitterSquare fontSize={"2rem"} />
            </span>
            <span>
              <AiFillInstagram fontSize={"2rem"} />
            </span>
            <span>
              <AiFillLinkedin fontSize={"2rem"} />
            </span>
            <span>
              <AiFillYoutube fontSize={"2rem"} />
            </span>
          </div>
          <img className='mb-4'
            src="https://www.lpu.in/images/digilocker-dark.png"
            alt="digilocker"
          />
          <h6>Student feedback Counter</h6>
          <span id="dvCount" aria-label="16444">
            <span>
              <button className='btn-dark me-1'>1</button>
            </span>
            <span class="char2" aria>
            <button className='btn-dark me-1'>6</button>
            </span>
            <span>
            <button className='btn-dark me-1'>4</button>
            </span>
            <span>
            <button className='btn-dark me-1'>4</button>
            </span>
            <span>
            <button className='btn-dark me-1'>4</button>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer
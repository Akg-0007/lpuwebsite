import React from 'react'

const Form = () => {
  return (
    <div className='container bg-dark'>
        <div className='bg-light'>
        <p className='ms-5' style={{ color: "#e46a19" ,fontSize:"30px" }}>Recurit form LPU</p>
        <div className="d-flex justify-content-evenly pb-4">
            <input className='rounded border' type="text" placeholder='Name'/>
            <input className='rounded border' type="text" placeholder='Company name'/>
            <input className='rounded border' type="number" placeholder='Phone number'/>
            <input className='rounded border' type="email" placeholder='Email'/>
            <input className='rounded border' type="text" placeholder='Hiring For'/>
            <button className='rounded border' type="button" class="btn btn-secondary">Submit</button>

        </div>
        </div>

    </div>
  )
}

export default Form
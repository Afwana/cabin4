import React from 'react'

function Features() {
  return (
    <div className='mt-5 d-flex row'>
        <ul className='col-md-4 mb-3'> 
            <li className='mb-3 fw-bolder'> <span className='text-secondary'>Air Conditioning</span> </li>
            <li className='mb-3 fw-bolder'> <span className='text-secondary'>Microwave</span> </li>
            <li className='mb-3 fw-bolder'> <span className='text-secondary'>Swimming Pool</span> </li>
        </ul>
        <ul className='col-md-4 mb-3'> 
            <li className='mb-3 fw-bolder'> <span className='text-secondary'>Gym</span> </li>
            <li className='mb-3 fw-bolder'> <span className='text-secondary'>Outdoor Shower</span> </li>
            <li className='mb-3 fw-bolder'> <span className='text-secondary'>TV Cable</span> </li>
        </ul>
        <ul className='col-md-4 mb-3'> 
            <li className='mb-3 fw-bolder'> <span className='text-secondary'>Lawn</span> </li>
            <li className='mb-3 fw-bolder'> <span className='text-secondary'>Refrigerator</span> </li>
            <li className='mb-3 fw-bolder'> <span className='text-secondary' >Washer</span> </li>
        </ul>
    </div>
  )
}

export default Features
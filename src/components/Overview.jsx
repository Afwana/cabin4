import React from 'react'
import Details from './Details'
import Features from './Features'
import Requestform from './Requestform'

function Overview() {
  return (
    <div className='container mt-3 d-flex'>
        <div className='col-lg-8 col-md-12 p-3'>
            <h5 className='fw-bolder'>Overview</h5>
            <p className='text-sm'>Come live in this terrific low turnover, single story apartment that is just perfect for 1 or two. One bedroom, living room, full bath, kitchen and a private free laundry facility on-site for units without washer & dryer. This brick sided home is just 5 minutes from Lea Hill and the college, really fast commute over to Hwy 18 and SR 167, plenty of shopping and restaurants close by or for delivery and just a couple minutes walk to the river, low key </p>
            <a href="" className='text-dark fw-bolder'> Show more </a>
            <Details />
            <Features />
        </div>
        <div className='col-lg-4 col-md-12 p-3'>
            <div className='mt-3 ms-lg-5'>
                <h5 className='text-primary fw-bolder'> Boney Mathew </h5>
                <p className='fw-bolder'> Phone: <span className='text-secondary'> 206-724-5577 </span> <br />
                Email: <span className='text-secondary'> Boneymathew@johnIscott.com </span> </p>
            </div>
            <Requestform />
        </div>
    </div>
  )
}

export default Overview
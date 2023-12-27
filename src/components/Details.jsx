import React from 'react'

function Details() {
  return (
    <div className='mt-5 d-flex row'>
        <div className='col-md-4 mb-5'> 
            <p className='mb-3 fw-bolder'> Listing Id: <span className='text-secondary'> 2182179 </span> </p>
            <p className='mb-3 fw-bolder'> Lot area (sqft): <span className='text-secondary'> 200 sqft </span> </p>
            <p className='mb-3 fw-bolder'> Baths: <span className='text-secondary'> 2 </span> </p>
        </div>
        <div className='col-md-4 mb-3'> 
            <p className='mb-3 fw-bolder'> Property Sub Type: <span className='text-secondary'> Rental </span> </p>
            <p className='mb-3 fw-bolder'> Home area (sqft): <span className='text-secondary'> 150 sqft </span> </p>
            <p className='mb-3 fw-bolder'> Garages: <span className='text-secondary'> 1 </span> </p>
        </div>
        <div className='col-md-4 mb-3'> 
            <p className='mb-3 fw-bolder'> Subdivision: <span className='text-secondary'> Aubum </span> </p>
            <p className='mb-3 fw-bolder'> Beds: <span className='text-secondary'> 6 </span> </p>
            <p className='mb-3 fw-bolder'> Price ($): <span className='text-secondary'> 4,667 </span> </p>
        </div>
    </div>
  )
}

export default Details
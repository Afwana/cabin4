import React from 'react'

function PropDetails() {
  return (
    <div className='container d-flex property'>
        {/* adjust columns using col-lg-6 and col-md-12 */}
        <div className='col-lg-6 col-md-12'>
            <h5> Kent, Washington 98031 </h5>
            <div className='d-flex' style={{color:'#888787'}}>
                <p className='me-3'> 106 SE 22905 Place SE </p>
                <p style={{color: '#ff0000'}} className='me-3'> <i className="fa-solid fa-circle"></i> For Sale </p>
                <p className='me-3'> <i class="fa-regular fa-clock"></i> 10 months ago </p>
            </div>
            <div className='d-flex' style={{color:'#888787'}}>
                <p className='me-3'> 3 Beds </p>
                <p className='me-3'> 2 Baths </p>
                <p className='me-3'> 1440 Sqft </p>
                <p className='me-3'> 0.190 Acres </p>
            </div>
            <div className='d-flex'>
                <p className='ms-4'> <i className="fa-regular fa-bookmark"></i> Save </p>
                <p className='ms-4'> <i className="fa-solid fa-arrow-up-from-bracket"></i> Share </p>
            </div>
        </div>
        {/* adjust columns using col-lg-6 and col-md-12 */}
        <div className='col-lg-6 col-md-12'>
            <h4 className='fw-bolder mb-3' style={{marginLeft:'80%',marginTop:'8%'}}> $ 4,667 </h4>
            <div style={{marginLeft:'35%'}}>
                <button className='btn btn-outline-primary' style={{borderRadius:'25px'}}> Download Printable Flyer </button>
                <button className='btn btn-primary ms-3' style={{borderRadius:'25px'}}> Submit a tour request </button>
            </div>
        </div>
    </div>
  )
}

export default PropDetails
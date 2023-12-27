import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../Assets/DV Homes.png'

function Footer() {
  return (
    <div>
      <div className='d-flex justify-content-between ms-4 mt-5'>
        <div>
          <img src={LogoImg} alt="" />
        </div>
        <div className="icons fs-4 d-flex mt-3 align-items-center">
          <h6 className='me-4'> Follow us </h6>
          <Link to={'https://getbootstrap.com/'} className='text-dark me-3' style={{ textDecoration: 'none' }}> <i className='fa-brands fa-facebook'></i> </Link>
          <Link to={'https://getbootstrap.com/'} className='text-dark me-3' style={{ textDecoration: 'none' }}> <i className='fa-brands fa-instagram'></i> </Link>
          <Link to={'https://getbootstrap.com/'} className='text-dark me-3' style={{ textDecoration: 'none' }}> <i className='fa-brands fa-linkedin'></i> </Link>
          <Link to={'https://getbootstrap.com/'} className='text-dark me-3' style={{ textDecoration: 'none' }}> <i class="fa-brands fa-square-x-twitter"></i> </Link>
        </div>
      </div>
      <div className='d-flex mt-3 ms-4'>
        <div className="footer d-flex flex-wrap justify-content-between w-100">
          <div className='col-lg-6 d-flex mb-4 mb-lg-0 justify-content-between'>
            <div className="d-flex flex-column">
              <h5> Explore property types </h5>
              <Link to={''} className='text-secondary mt-1' style={{ textDecoration: 'none' }}> Apartments for Sale
              </Link>
              <Link to={''} className='text-secondary mt-1' style={{ textDecoration: 'none' }}> Apartments for Rent
              </Link>
              <Link to={''} className='text-secondary mt-1' style={{ textDecoration: 'none' }}> Office for Sale
              </Link>
              <Link to={''} className='text-secondary mt-1' style={{ textDecoration: 'none' }}> Office for Rent
              </Link>
            </div>
            <div className="d-flex flex-column">
              <h5> Quick Links </h5>
              <Link to={''} className='text-secondary mt-1' style={{ textDecoration: 'none' }}> Terms of Use
              </Link>
              <Link to={''} className='text-secondary mt-1' style={{ textDecoration: 'none' }}> Privacy Policy
              </Link>
              <Link to={''} className='text-secondary mt-1' style={{ textDecoration: 'none' }}> Admin Login
              </Link>
              <Link to={''} className='text-secondary mt-1' style={{ textDecoration: 'none' }}> Contact
              </Link>
              <Link to={''} className='text-secondary mt-1' style={{ textDecoration: 'none' }}> FAQs
              </Link>
            </div>
            <div className="d-flex flex-column">
              <h5> Discover </h5>
              <Link to={''} className='text-secondary mt-1' style={{ textDecoration: 'none' }}> Broadview
              </Link>
              <Link to={''} className='text-secondary mt-1' style={{ textDecoration: 'none' }}> Bitter Lake
              </Link>
              <Link to={''} className='text-secondary mt-1' style={{ textDecoration: 'none' }}> Crown Hill
              </Link>
              <Link to={''} className='text-secondary mt-1' style={{ textDecoration: 'none' }}> Green wood
              </Link>
            </div>
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-center">
            <h5 className='ms-5'> Toll Free Customer Care </h5>
            <p className='text-secondary ms-5'> 206-338-4663 </p>
            <h5 className='ms-5'> Need Support? </h5>
            <p className='text-secondary ms-5'> team@dreamvisionhomes.com </p>
            <h5 className='ms-5'> Office Address </h5>
            <p className='text-secondary ms-5'> 26943 168th PI SE, Covington, WA 98042 </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
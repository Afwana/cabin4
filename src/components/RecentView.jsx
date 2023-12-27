import React from 'react'
import { Card } from 'react-bootstrap'
import Frame1 from '../Assets/Frame 48095429.png'
import img1 from '../Assets/Frame 48095433.png'
import img2 from '../Assets/Frame 48095434.png'

function RecentView() {
    return (
        <div className='container mt-3'>
            <h4 className='fw-bolder'> Recently Viewed Listing </h4>
            <p className='text-secondary'> Navigate your dream home effortlessly - Explore properties by city with DV Homes. </p>
            <div className='mt-5 d-flex row'>
                <div className='col-md-4 mb-4'>
                    <Card style={{ width: '20rem' }} className='p-1 me-5'>
                        <Card.Img className='container' variant="top" src={Frame1} height={'200px'}/>
                        <div className='button-container'>
                            <img src={img1} alt="featured" className='mb-5' /> <br />
                            <img src={img2} alt="price" className='mt-5' />
                        </div>
                        <Card.Body>
                            <Card.Title>Kent, Washington 98031</Card.Title>
                            <Card.Text>
                                <h6 className='fw-bolder text-secondary'> 106 SE 22905 Place SE </h6>
                                <div className='d-flex mt-4'>
                                    <div className='me-5'>
                                        <p className='text-secondary'> 3 Beds </p>
                                        <p className='text-secondary'> 1,440 Sqft </p>
                                    </div>
                                    <div>
                                        <p className='text-secondary'> 2 Baths </p>
                                        <p className='text-secondary'> 0.190 Acres </p>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-4 mb-4'>
                    <Card style={{ width: '20rem' }} className='p-1 me-5'>
                        <Card.Img className='container' variant="top" src={Frame1} height={'200px'}/>
                        <div className='button-container'>
                            <img src={img1} alt="featured" className='mb-5' /> <br />
                            <img src={img2} alt="price" className='mt-5' />
                        </div>
                        <Card.Body>
                            <Card.Title>Kent, Washington 98031</Card.Title>
                            <Card.Text>
                                <h6 className='fw-bolder text-secondary'> 106 SE 22905 Place SE </h6>
                                <div className='d-flex mt-4'>
                                    <div className='me-5'>
                                        <p className='text-secondary'> 3 Beds </p>
                                        <p className='text-secondary'> 1,440 Sqft </p>
                                    </div>
                                    <div>
                                        <p className='text-secondary'> 2 Baths </p>
                                        <p className='text-secondary'> 0.190 Acres </p>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-4 mb-4'>
                    <Card style={{ width: '20rem' }} className='p-1 me-5'>
                        <Card.Img className='container' variant="top" src={Frame1} height={'200px'}/>
                        <div className='button-container'>
                            <img src={img1} alt="featured" className='mb-5' /> <br />
                            <img src={img2} alt="price" className='mt-5' />
                        </div>
                        <Card.Body>
                            <Card.Title>Kent, Washington 98031</Card.Title>
                            <Card.Text>
                                <h6 className='fw-bolder text-secondary'> 106 SE 22905 Place SE </h6>
                                <div className='d-flex mt-4'>
                                    <div className='me-5'>
                                        <p className='text-secondary'> 3 Beds </p>
                                        <p className='text-secondary'> 1,440 Sqft </p>
                                    </div>
                                    <div>
                                        <p className='text-secondary'> 2 Baths </p>
                                        <p className='text-secondary'> 0.190 Acres </p>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default RecentView
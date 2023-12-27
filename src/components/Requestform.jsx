import React from 'react'
import { Button, Form } from 'react-bootstrap'

function Requestform() {
  return (
    <div className='mt-5 p-2'>
        <h5 className='fw-bolder'> Request More Information </h5>
        <p className='fw-bolder'> Listing ID: <span className='text-secondary'> 2182179 </span> </p>

        <Form.Group controlId="validationCustom01" className='mb-3'>
          <Form.Label>First name</Form.Label>
          <Form.Control required type="text" placeholder="Enter your first name" />
        </Form.Group>

        <Form.Group controlId="validationCustom02" className='mb-3'>
          <Form.Label>Last name</Form.Label>
          <Form.Control required type="text" placeholder="Enter your last name" />
        </Form.Group>

        <Form.Group controlId="validationCustom03" className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control required type="text" placeholder="Enter your email address" />
        </Form.Group>

        <Form.Group controlId="validationCustom04" className='mb-3'>
          <Form.Label>Phone number</Form.Label>
          <Form.Control required type="text" placeholder="Enter your phone number" />
        </Form.Group>

        <Form.Group controlId="validationCustom05" className='mb-3'>
          <Form.Label>Message name</Form.Label>
          <Form.Control required type="text" placeholder="Message" />
        </Form.Group>

        <Button className='mt-4 btn' style={{borderRadius:'25px'}}> Send Request </Button>
    </div>
  )
}

export default Requestform
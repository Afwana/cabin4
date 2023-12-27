import React from 'react'
import Frame1 from '../Assets/Frame 48095429.png'
import Frame2 from '../Assets/Frame 48095429 (1).png'
import Frame3 from '../Assets/Frame 48095429 (2).png'

function ImageGrid() {
    return (
        // display images as a grid
        <div className='mt-2'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Frame1} alt="frame 1" className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6 p-2">
                                <img src={Frame2} alt="frame 2" className='img-fluid' />
                            </div>
                            <div className="col-6 p-2">
                                <img src={Frame3} alt="frame 3" className='img-fluid' />
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-6">
                                <img src={Frame2} alt="frame 2" className='img-fluid' />
                            </div>
                            <div className="col-6">
                                <img src={Frame3} alt="frame 3" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGrid
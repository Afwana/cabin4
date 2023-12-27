import React from 'react'
import logoimg from '../Assets/DV Homes.png'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-light m-2 headr">
                <div className="container-fluid d-flex">
                    {/* logo */}
                    <a className="navbar-brand" href="/">
                        <img src={logoimg} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-3 me-2 fw-bolder">
                                <a className="nav-link active" aria-current="page" href="/" >Home</a>
                            </li>
                            <li className="nav-item ms-3 me-2 fw-bolder">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item ms-3 me-2 fw-bolder">
                                <a className="nav-link" href="#">Home Valuation</a>
                            </li>
                            <li className="nav-item ms-3 me-2 fw-bolder">
                                <a className="nav-link" href="#">Market Report</a>
                            </li>
                            <li className="nav-item ms-3 me-2 fw-bolder">
                                <a className="nav-link" href="#" style={{color:'cyan'}}>Buy</a>
                            </li>
                            <li className="nav-item ms-3 me-5 fw-bolder">
                                <a className="nav-link" href="#">Sell</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-primary" type="submit" style={{borderRadius:'25px'}}>Get in touch</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
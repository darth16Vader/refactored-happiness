import React from 'react'
import { MDBBtn } from "mdbreact";
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <div>
            <div className="d-flex bd-highlight example-parent special-color-dark px-2 shadow-sm mb-2">
                <div className="d-flex align-items-center flex-grow-1 text-light font-sm"><i className="fal fa-industry-alt deep-orange-text mr-1"></i>batching operation</div>
                <LinkContainer to='/user'>
                    <div className="bd-highlight col-example"><MDBBtn color='amber' size='sm'> user account</MDBBtn></div>
                </LinkContainer>
                <LinkContainer to='/product'>
                    <div className="bd-highlight col-example"><MDBBtn color='amber' size='sm'>product & category</MDBBtn></div>
                </LinkContainer>
                <LinkContainer to='/material'>
                <div className="bd-highlight col-example"><MDBBtn color='amber' size='sm' href='/user'>material & client</MDBBtn></div>
                </LinkContainer>
                <div className="bd-highlight col-example"><MDBBtn color='primary' size='sm'><i className="fas fa-home"></i> back to home</MDBBtn></div>
            </div>
        </div>
    )
}

export default Header

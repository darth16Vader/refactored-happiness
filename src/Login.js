import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBIcon, MDBBtn } from "mdbreact";

import './css/login.css'

const Login = () => {
    return (
        <div className='login-page sunny-morning-gradient'>
            <div className='form-body shadow-lg'>
                <div className='login-side'>
                    <h1>Welcome!</h1>
                    <h1><MDBIcon icon="user-circle" /></h1>
                    <h5>LOGIN</h5>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="12">
                            <form>
                                <div className="grey-text">
                                <MDBInput label="Your name" icon='user' group type="text" validate error="wrong"
                                    success="right" />
                                <MDBInput className='mb-0' label="password" icon='lock' group type="password" validate error="wrong"
                                    success="right" />
                                </div>
                                <p className='text-right'>forgot password? contact <span className='blue-text'>ITEC</span></p>
                                <div className="text-center">
                                <MDBBtn outline color="pink">
                                    signin
                                    <MDBIcon far icon="paper-plane" className="ml-1" />
                                </MDBBtn>
                                </div>
                            </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        </div>
    )
}

export default Login

import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBBtnGroup } from 'mdbreact'
import profile from '../../img/dv.jpg'

const UserAccount = () => {
    return (
        <MDBContainer className='page-font'>
            <h2 className='py-3 text-left'>User account</h2>
            <MDBRow>
                <MDBCol md='3'>
                    <img src={profile} className="img-fluid z-depth-3 rounded-circle d-block mx-auto" alt='darth' style={{height:'200px',width:'200px'}} />
                    <h3 className='text-center mt-4 special-color-dark py-2 text-light card'>darth vader</h3>
                </MDBCol>
                <MDBCol md='6'>
                <div className='py-4'>
                    <h5 className=''>&bull; User details</h5>
                    <hr />
                    <div className="d-flex flex-row mb-4">
                        <div className="p-2 align-self-center mr-auto">
                            <h4>user ID: <span className='blue-text'>#DeathStar-01</span></h4>
                            <h4>user access: admin</h4>
                        </div>
                    </div>
                    <h5 className=''>&bull; personal info</h5>
                    <hr />
                    <div className="d-flex flex-row">
                        <div className="p-2 align-self-center mr-auto">
                            <h4>lastname: vader</h4>
                            <h4>firstname: Darth</h4>
                            <h4>middlename: star</h4>
                        </div>
                    </div>
                </div>
                </MDBCol>
                <MDBCol md='3'>
                    <MDBBtnGroup vertical>
                        <MDBBtn>add account</MDBBtn>
                        <MDBBtn>edit profile</MDBBtn>
                        <MDBBtn color='danger'>delete profile</MDBBtn>
                    </MDBBtnGroup>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default UserAccount

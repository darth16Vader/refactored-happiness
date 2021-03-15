import React, { useState } from 'react'
import { MDBContainer, MDBInputGroup, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import BasicDetailsTable from './table/BatchDetailsTable';
import JobOrder from './modal/JobOrder';


const BatchDetailsPage = () => {

    const [modal, setModal ] = useState(false)

    const toggle = () => {
        setModal(m => !modal)
    }
    
    return (
        <div>
            <JobOrder modal={modal} toggle={toggle} />

            <div className='card m-1 p-1 shadow special-color-dark'>
                <div className='d-flex bd-highlight example-parent font-sm'>
                    <div className='d-flex align-items-center flex-grow-1 green-text'><i className="fal fa-file-alt deep-orange-text mr-1"></i> batch details</div>
                    <div className="bd-highlight col-example text-light"><i className="fas fa-user deep-orange-text mr-1"></i><font className='green-text'>Operator:</font> <span className='font-weight-bold'>Allen De Jesus</span></div>
                </div>
            </div>
            <div className='card m-1 p-1 shadow'>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="5"><MDBInputGroup material containerClassName="mb-3 mt-0" prepend="Fabrication No.:" hint="000091695" size="sm"/></MDBCol>
                        <MDBCol md="5"><MDBInputGroup material containerClassName="mb-3 mt-0" prepend="JO No.:" hint="016" size="sm"/></MDBCol>
                        <MDBCol md="2"><MDBBtn color="amber" size='sm' onClick={toggle}><i className="fal fa-random text-white"></i></MDBBtn></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="12">
                            <MDBInputGroup
                            containerClassName="mb-3"
                            size='sm'
                            inputs={
                                <select className="browser-default custom-select">
                                <option value="0">Category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                            }
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="12"><MDBInputGroup material containerClassName="mb-3 mt-0" prepend="Product Code:" hint="016" size="sm"/></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="12">
                            <MDBInputGroup
                            containerClassName="mb-3"
                            size='sm'
                            inputs={
                                <select className="browser-default custom-select">
                                <option value="0">Product version</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                            }
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4">
                            <MDBInputGroup material containerClassName="mb-3 mt-0" prepend="Batch Required:" hint="016" size="sm"/>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBInputGroup material containerClassName="mb-3 mt-0" prepend="Batch:" hint="016" size="sm"/>
                        </MDBCol>
                        <MDBCol md="4" className='text-center'>
                            <MDBBtn color="amber" size='sm'><i className="fal fa-percent"></i> Percentage</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <BasicDetailsTable />
            </div>
        </div>
    )
}

export default BatchDetailsPage

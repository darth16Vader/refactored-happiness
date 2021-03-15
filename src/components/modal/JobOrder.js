import React from 'react';
import { MDBContainer, MDBBtn, MDBModalHeader, MDBModal, MDBModalBody, MDBModalFooter, MDBInputGroup, MDBRow, MDBCol} from 'mdbreact';

const JobOrder = ({modal, toggle}) => {

  console.log(toggle, modal)

  return (
    <MDBContainer>
      <MDBModal centered  isOpen={modal} toggle={toggle}>
      <MDBModalHeader className='special-color-dark green-text' toggle={toggle}>job order</MDBModalHeader>
        <MDBModalBody>
          <MDBRow>
            <MDBCol md='4' className='text-right'>
              job order number:
            </MDBCol>
            <MDBCol md='8'>
             <MDBInputGroup material containerClassName="mb-2 mt-0" hint="091695"/>
            </MDBCol>
            <MDBCol md='4' className='text-right'>
              customer name:
            </MDBCol>
            <MDBCol md='8'>
            <MDBInputGroup
              containerClassName="mb-2"
              inputs={
                <select className="browser-default custom-select">
                  <option value="0">N/a</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              }
            />
            </MDBCol>
            <MDBCol md='4' className='text-right'>
              DR number:
            </MDBCol>
            <MDBCol md='8'>
              <MDBInputGroup material containerClassName="mb-2 mt-0" hint="091695"/>
            </MDBCol>
          </MDBRow>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="danger" onClick={toggle} size='sm'><i className="fas fa-window-close"></i> Close</MDBBtn>
          <MDBBtn color="indigo" size='sm'><i className="fas fa-check-square"></i> accept</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
}


export default JobOrder;
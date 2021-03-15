import React from 'react';
import { MDBContainer, MDBBtn, MDBModalHeader, MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';
import TankCutTableEdit from '../table/TankCutTableEdit';

const CutSpeedSetUp = ({modal, toggle}) => {

  return (
    <MDBContainer>
      <MDBModal centered size="lg" isOpen={modal} toggle={toggle}>
      <MDBModalHeader className='special-color-dark green-text' toggle={toggle}>Set cut-off</MDBModalHeader>
        <MDBModalBody>
          <TankCutTableEdit />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="danger" onClick={toggle} size='sm'><i className="fas fa-window-close"></i> Close</MDBBtn>
          <MDBBtn color="indigo" size='sm'><i className="fas fa-check-square"></i> accept</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
}


export default CutSpeedSetUp;
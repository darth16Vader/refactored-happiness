import React from 'react';
import { MDBTable, MDBTableBody } from 'mdbreact';

const TankCutTable = () => {
  return (
    <>
    <div className=''>
      <MDBTable responsive small hover striped scrollY maxHeight='25vh' className='mb-0'>
        <MDBTableBody className='webkit-style'>
            <tr>
                <td>Cut off</td>
                <td>speed(L)</td>
                <td>Speed(H)</td>
            </tr>
            <tr>
                <td>21 kg.</td>
                <td>10 Hz</td>
                <td>60 Hz</td>
            </tr>
            <tr>
                <td>21 kg.</td>
                <td>10 Hz</td>
                <td>60 Hz</td>
            </tr>
            <tr>
                <td>21 kg.</td>
                <td>10 Hz</td>
                <td>60 Hz</td>
            </tr>
            <tr>
                <td>21 kg.</td>
                <td>10 Hz</td>
                <td>60 Hz</td>
            </tr>
            <tr>
                <td>21 kg.</td>
                <td>10 Hz</td>
                <td>60 Hz</td>
            </tr>
            <tr>
                <td>21 kg.</td>
                <td>10 Hz</td>
                <td>60 Hz</td>
            </tr>
            <tr>
                <td>21 kg.</td>
                <td>10 Hz</td>
                <td>60 Hz</td>
            </tr>
            <tr>
                <td>21 kg.</td>
                <td>10 Hz</td>
                <td>60 Hz</td>
            </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
    </>
  );
}

export default TankCutTable;
import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const BatchingTable = () => {
  return (
    <>
    <MDBTable responsive small className='table-layout mb-0 pr-5'>
      <MDBTableHead>
        <tr>
          <th className='font-weight-bold'>JO #</th>
          <th className='font-weight-bold'>OR #</th>
          <th className='font-weight-bold'>Customer</th>
          <th className='font-weight-bold'>product</th>
          <th className='font-weight-bold'>formula</th>
          <th className='font-weight-bold'>batches</th>
          <th className='font-weight-bold'>time start</th>
          <th className='font-weight-bold'>time end</th>
        </tr>
      </MDBTableHead>
    </MDBTable>
    <div className=''>
      <MDBTable responsive small hover striped scrollY maxHeight='17.5vh' className='table-layout mb-0'>
        <MDBTableBody className='webkit-style'>
          <tr>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
          </tr>
          <tr>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
          </tr>
          <tr>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
          </tr>
          <tr>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
          </tr>
          <tr>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
          </tr>
          <tr>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
          </tr>
          <tr>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
          </tr>
          <tr>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>NaN</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
    </>
  );
}

export default BatchingTable;
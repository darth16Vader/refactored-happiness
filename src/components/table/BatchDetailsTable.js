import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const BasicDetailsTable = () => {
  return (
    <>
    <MDBTable responsive small className='table-layout mb-0 pr-5'>
      <MDBTableHead>
        <tr>
          <th className='font-weight-bold font-sm'>tank #</th>
          <th className='font-weight-bold font-sm'>material</th>
          <th className='font-weight-bold font-sm'>required</th>
          <th className='font-weight-bold font-sm'>actual</th>
          <th className='font-weight-bold font-sm text-warning'>difference</th>
          <th className='font-weight-bold font-sm text-danger'>% crit</th>
          <th className='font-weight-bold font-sm text-success'>%</th>
        </tr>
      </MDBTableHead>
    </MDBTable>
    <div className=''>
      <MDBTable responsive small hover striped scrollY maxHeight='15vh' className='table-layout mb-0'>
        <MDBTableBody className='webkit-style'>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
            <tr>
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
      <MDBTable responsive small hover striped scrollY maxHeight='15vh' className='table-layout mb-0'>
        <MDBTableBody>
            <tr>
                <th className='text-right'>Total</th>
                <th className='white' style={{color:'#fff'}}>material</th>
                <th className=''>0.00</th>
                <th className=''>0.00</th>
                <th className='text-warning'>0.00</th>
                <th className='text-danger'>0.00</th>
                <th className='text-success'>0.00</th>
            </tr>
        </MDBTableBody> 
      </MDBTable>
    </div>
    </>
  );
}

export default BasicDetailsTable;
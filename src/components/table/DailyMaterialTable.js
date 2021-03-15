import React from 'react';
import { MDBTable, MDBTableBody } from 'mdbreact';

const DailyMaterialTable = () => {
  return (
    <>
    <div className=''>
      <MDBTable responsive small hover striped scrollY maxHeight='25vh' className='mb-0'>
        <MDBTableBody className='webkit-style'>
            <tr>
                <td>tank</td>
                <td>Name</td>
                <td>target wt.</td>
            </tr>
            <tr>
                <td>1</td>
                <td>argentina soya</td>
                <td>NaN</td>
            </tr>
            <tr>
                <td>2</td>
                <td>feed wheat</td>
                <td>NaN</td>
            </tr>
            <tr>
                <td>3</td>
                <td>pollard</td>
                <td>NaN</td>
            </tr>
            <tr>
                <td>4</td>
                <td>pollard</td>
                <td>NaN</td>
            </tr>
            <tr>
                <td>5</td>
                <td>pollard</td>
                <td>NaN</td>
            </tr>
            <tr>
                <td>6</td>
                <td>pollard</td>
                <td>NaN</td>
            </tr>
            <tr>
                <td>7</td>
                <td>pollard</td>
                <td>NaN</td>
            </tr>
            <tr>
                <td>8</td>
                <td>pollard</td>
                <td>NaN</td>
            </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
    </>
  );
}

export default DailyMaterialTable;
import { MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody } from 'mdbreact'
import React from 'react'

const Material = () => {
    return (
        <MDBContainer className='page-font'>
            <h2 className='py-3 text-left'>Material & client</h2>
            <MDBRow>
                <MDBCol>
                    <h5 className=''>&bull; material details</h5>
                    <hr />
                    <MDBTable responsive borderless small hover className='table-layout mb-0'>
                        <MDBTableBody>
                            <tr>
                                <td className='text-right'>material code:</td>
                                <td>
                                    <input type="text" className="form-control" id="formGroupExampleInput" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-right'>material name:</td>
                                <td>
                                    <input type="text" className="form-control" id="formGroupExampleInput" />
                                </td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                    <h5 className=''>&bull; client details</h5>
                    <hr />
                    <MDBTable responsive borderless small hover className='table-layout mb-0'>
                        <MDBTableBody>
                            <tr>
                                <td className='text-right'>client code:</td>
                                <td>
                                    <input type="text" className="form-control" id="formGroupExampleInput" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-right'>client name:</td>
                                <td>
                                    <input type="text" className="form-control" id="formGroupExampleInput" />
                                </td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Material

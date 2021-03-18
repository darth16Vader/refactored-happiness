import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBInputGroup } from 'mdbreact'
import React from 'react'

const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  };

const Product = () => {
    return (
        <MDBContainer className='page-font'>
            <h2 className='py-3 text-left'>product & category</h2>
            <MDBRow>
                <MDBCol>
                    <h5 className=''>&bull; product details</h5>
                    <hr />
                    <MDBTable responsive borderless small hover className='table-layout mb-0'>
                        <MDBTableBody>
                            <tr>
                                <td className='text-right'>Product code:</td>
                                <td>
                                <input type="text" className="form-control" id="formGroupExampleInput"
                                />
                                </td>
                                <td>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                                        <label className="custom-control-label" htmlFor="defaultUnchecked">include</label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-right'>category:</td>
                                <td>
                                <MDBInputGroup
                                    containerClassName="mb-0"
                                    size='sm'
                                    inputs={
                                        <select className="browser-default custom-select">
                                        <option value="0">choose category</option>
                                        <option value="1">jetstar gold</option>
                                        <option value="2">jetstar silver</option>
                                        <option value="3">happy hoggy</option>
                                        </select>
                                    }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-right'>product name:</td>
                                <td>
                                    <input type="text" className="form-control" id="formGroupExampleInput" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-right'>formulation:</td>
                                <td>
                                    <input type="text" className="form-control" id="formGroupExampleInput"
                                    />
                                </td>
                                <td>
                                    <MDBBtn size='sm'>assign</MDBBtn>
                                </td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                    <h5 className=''>&bull; category details</h5>
                    <hr />
                    <MDBTable responsive borderless small hover className='table-layout mb-0'>
                        <MDBTableBody>
                            <tr>
                                <td className='text-right'>category code:</td>
                                <td>
                                <input type="text" className="form-control" id="formGroupExampleInput"
                                />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-right'>category:</td>
                                <td colSpan='2'>
                                <input type="text" className="form-control" id="formGroupExampleInput"
                                    />
                                </td>
                                <td>
                                    <MDBBtn onClick={handleReset} color='danger' size='sm'>reset inputs</MDBBtn>
                                </td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                    <MDBBtn className='float-right'>save</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Product

import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBTooltip } from "mdbreact";
import DailyMaterialTable from './table/DailyMaterialTable';
import TankCutTable from './table/TankCutTable';
import CutSpeedSetUp from './modal/CutSpeedSetUp';

const MaterialConsPage = () => {

    const [modal, setModal ] = useState(false)

    const toggle = () => {
        setModal(m => !modal)
    }

    return (
        <div>
            <CutSpeedSetUp modal={modal} toggle={toggle}/>

            <MDBContainer fluid>
            <MDBRow>
                <MDBCol md='6' className='p-0 font-sm'>
                    <div className='card m-1 p-1 shadow special-color-dark'>
                        <div className='d-flex bd-highlight example-parent'>
                            <div className='d-flex align-items-center flex-grow-1 green-text'>
                                <i className="fal fa-calendar-day deep-orange-text mr-1"></i> Daily material consumption
                            </div>
                            <MDBTooltip
                            domElement
                            tag="span"
                            placement="top"
                            >
                            <div 
                                className='bd-highlight col-example px-1 rounded cpointer' 
                                style={{backgroundColor:'#ffa000'}}>
                                <i className="fal fa-sync"></i>
                            </div>
                            <span>Refresh Consumption</span>
                            </MDBTooltip>
                        </div>
                    </div>
                    <div className='card m-1 p-2 shadow'>
                        <DailyMaterialTable />
                    </div>
                </MDBCol>
                <MDBCol md='6' className='p-0 font-sm'>
                    <div className='card m-1 p-1 shadow special-color-dark'>
                        <div className='d-flex bd-highlight example-parent'>
                            <div className='d-flex align-items-center flex-grow-1 green-text'>
                                <i className="fal fa-container-storage deep-orange-text mr-1"></i> tank cut-off & speed set-up
                            </div>
                            <MDBTooltip
                            domElement
                            tag="span"
                            placement="top"
                            >
                            <div 
                                className='bd-highlight col-example px-1 rounded cpointer' 
                                style={{backgroundColor:'#ffa000'}} onClick={toggle}>
                                <i className="fal fa-cog"></i>
                            </div>
                            <span>Cut-off & Speed settings</span>
                            </MDBTooltip>
                        </div>
                    </div>
                    <div className='card m-1 p-2 shadow'>
                        <TankCutTable />
                    </div>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
            <div className='card m-1 p-1 shadow'>
                <div className="d-flex bd-highlight example-parent font-sm">
                    <div className="flex-fill bd-highlight col-example text-center"><MDBBtn color="primary" size='sm'><i className="fal fa-play"></i> Start Batching</MDBBtn></div>
                    <div className="flex-fill bd-highlight col-example text-center"><MDBBtn color="primary" size='sm'><i className="fal fa-stop"></i> End Batching</MDBBtn></div>
                    <div className="flex-fill bd-highlight col-example text-center"><MDBBtn color="primary" size='sm'><i className="fal fa-pause"></i> Pause Batching </MDBBtn></div>
                </div>
            </div>
        </div>
    )
}

export default MaterialConsPage

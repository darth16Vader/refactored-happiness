import React, { useEffect } from 'react'
import { MDBBtn, MDBBtnGroup } from "mdbreact";
import Batching from './components/Batching'
import './css/App.css'
import BatchDetails from './components/BatchDetails';

const App = () => {

  useEffect(() => {
    const button = document.querySelector('.menu')
    const close = document.querySelector('.menuclose')
    const side = document.querySelector('.sidenav')
    const home = document.querySelector('.home')

    button.addEventListener('click',() => {
      side.classList.toggle('active-nav')
    })

    if(close){
      close.addEventListener('click',() => {
        side.classList.remove('active-nav')
      })
    }

    if(home){
      home.addEventListener('click',() => {
        side.classList.remove('active-nav')
      })
    }
  },[]);

  return (
    <>
      <div className="d-flex bd-highlight example-parent special-color-dark px-2 shadow-sm mb-2">
          <div className="d-flex align-items-center flex-grow-1 text-light font-sm"><i className="fal fa-industry-alt deep-orange-text mr-1"></i>batching operation</div>
          <div className="bd-highlight col-example"><MDBBtn color='amber' size='sm' className='menu'><i className='fas fa-layer-group'></i> Menu</MDBBtn></div>
          <div className="bd-highlight col-example"><MDBBtn color='amber' size='sm'><i className="fal fa-link"></i> refresh plc connection</MDBBtn></div>
      </div>
      
      <div className='sidenav special-color-dark z-depth-5'>
        <div className='side-menu-list p-3'>
          <div className='menuclose text-light'><i className="fas fa-times"></i></div>
          <h4 className='text-center text-light'>Menu</h4>
          <MDBBtnGroup className='btn-block mb-2' size='sm' vertical>
            <MDBBtn color="primary" size='sm'><h4><i className="fas fa-file-alt"></i></h4> master file</MDBBtn>
            <MDBBtn color="primary" size='sm'><h4><i className="fas fa-pencil-alt"></i></h4> formula</MDBBtn>
            <MDBBtn color="primary" size='sm'><h4><i className="fas fa-print"></i></h4> reports</MDBBtn>
            <MDBBtn color="amber" size='sm'><h4><i className="fal fa-sign-out-alt"></i></h4> logout</MDBBtn>
          </MDBBtnGroup>
          {/* <MDBBtn color='primary' size='sm' className='btn-block mb-2'><h2><i className="fas fa-file-alt"></i></h2> master file</MDBBtn>
          <MDBBtn color='primary' size='sm' className='btn-block mb-2'><h2><i className="fas fa-pencil-alt"></i></h2> formula</MDBBtn>
          <MDBBtn color='primary' size='sm' className='btn-block mb-2'><h2><i className="fas fa-print"></i></h2> reports</MDBBtn>
          <MDBBtn color='amber' size='sm' className='btn-block mb-2'><h2><i className="fal fa-sign-out-alt"></i></h2> logout</MDBBtn> */}
        </div>
      </div>

      <div className='container-fluid home'>
        <div className='row'>
          <div className='col-md-7 px-0'>
            <Batching />
          </div>
          <div className='col-md-5 px-0'>
            <BatchDetails />
          </div>
        </div>
      </div>
    </>
  )

}

export default App
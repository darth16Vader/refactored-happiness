import React from 'react'
import '../css/Batch.css'
import BatchingImg from './BatchingImg'
import BatchingTable from './table/BatchingTable'

const Batching = () => {
    return (
        <>
           <div className='card m-1 p-1 shadow batch-op-sec special-color-dark'>
                <BatchingImg />
           </div>
           <div className='card m-1 p-1 shadow'>
               <BatchingTable />
           </div>
        </>
    )
}

export default Batching


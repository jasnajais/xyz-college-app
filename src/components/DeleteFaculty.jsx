import React, { useState } from 'react'
import Navbar from './Navbar'

const DeleteFaculty = () => {
      const [del,changedel]=useState( 
         
       
               { delfac:"" }    )
       
               const inputHandler= (event)=>{
               changedel({...del, [event.target.name]:event.target.value})
       
               }
       
       
               const readValues=()=>{
                   console.log(del)
               }

  return (
    <div>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label"> Faculty Name:</label>
                        <input type="text" className="form-control"name='delfac' value={del.delfac} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button onClick={readValues} className="btn btn-danger">Delete</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        </div>
  )
}

export default DeleteFaculty
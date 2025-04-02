import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchStudent = () => {
      const [search,changesearch]=useState( 
       
               { studName:"" }    )
       
               const inputHandler= (event)=>{
               changesearch({...search, [event.target.name]:event.target.value})
       
               }
       
       
               const readValues=()=>{
                   console.log(search)
               }

  return (
    <div>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Enter Student Name</label>
                        <input type="text" className="form-control"name='studName' value={search.studName} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button onClick={readValues} className="btn btn-success">Search</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        </div>
  )
}

export default SearchStudent
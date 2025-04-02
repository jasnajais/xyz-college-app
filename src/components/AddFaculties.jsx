import React, { useState } from 'react'
import Navbar from './Navbar'

const AddFaculties = () => {
  const [input,setInput]=useState( 
 
    { facultyName:"",deptName:"",qualification:"",dob:"",designation:"",email:"",pass:"",confrmPass:"" }    )

        const inputHandler= (event)=>{
        setInput({...input, [event.target.name]:event.target.value})

        }

        const readValues=()=>{
            console.log(input)
        }

  return (
    <div>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Faculty Name:</label>
                            <input type="text" className="form-control"name='facultyName' value={input.facName} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Department Name:</label>
                        <input type="text" className="form-control"name='deptName' value={input.deptName} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            
                        <label htmlFor="" className="form-label">Qualification:</label>
                        <input type="text" className="form-control"name='qualification' value={input.qualification} onChange={inputHandler} />
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Date of Birth:</label>
                        <input type="date" className="form-control"name='dob' value={input.dob} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Designation:</label>
                        <input type="text" className="form-control"name='designation' value={input.designation} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Email-ID:</label>
                        <input type="email" className="form-control"name='email' value={input.email} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Password:</label>
                        <input type="password" className="form-control"name='pass' value={input.pass} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Confirm Password:</label>
                        <input type="password" className="form-control"name='confrmPass' value={input.confrmPass} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <button onClick={readValues} className="btn btn-primary">Submit</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
  )
}

export default AddFaculties
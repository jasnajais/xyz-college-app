import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewallFaculties = () => {
  const [faculty,changedata]=useState(
    [
    {
      "name": "Rahul",
      "department": "IT",
      "qualification": "M.Tech",
      "dob": "12-05-1995",
      "designation": "CTO",
      "Email": "rahul.tech@gmail.com",
      "password": "securepass1"
    },
    {
      "name": "Sneha",
      "department": "IT",
      "qualification": "MCA",
      "dob": "25-07-1993",
      "designation": "Senior Developer",
      "Email": "sneha.dev@gmail.com",
      "password": "strongpass2"
    },
    {
      "name": "Arjun",
      "department": "CSE",
      "qualification": "B.Tech",
      "dob": "10-10-1998",
      "designation": "Project Manager",
      "Email": "arjun.pm@gmail.com",
      "password": "project123"
    },
    {
      "name": "Meera",
      "department": "CSE",
      "qualification": "B.Sc CS",
      "dob": "30-06-1996",
      "designation": "Software Engineer",
      "Email": "meera.se@gmail.com",
      "password": "password456"
    },
    {
      "name": "Vikram",
      "department": "IT",
      "qualification": "BCA",
      "dob": "18-02-1997",
      "designation": "Data Scientist",
      "Email": "vikram.ds@gmail.com",
      "password": "data45678"
    },
    {
      "name": "Nisha",
      "department": "CSE",
      "qualification": "M.Tech",
      "dob": "16-09-1994",
      "designation": "AI Researcher",
      "Email": "nisha.ai@gmail.com",
      "password": "aipass789"
    },
    {
      "name": "Rohit",
      "department": "IT",
      "qualification": "B.Sc CS",
      "dob": "11-09-1999",
      "designation": "Cloud Engineer",
      "Email": "rohit.cloud@gmail.com",
      "password": "cloudpass987"
    },
    {
      "name": "Pooja",
      "department": "CSE",
      "qualification": "BCA",
      "dob": "07-07-2000",
      "designation": "Network Engineer",
      "Email": "pooja.network@gmail.com",
      "password": "network123"
    },
    {
      "name": "Aman",
      "department": "IT",
      "qualification": "Diploma",
      "dob": "22-02-2001",
      "designation": "Intern",
      "Email": "aman.intern@gmail.com",
      "password": "internpass456"
    },
    {
      "name": "Kavya",
      "department": "CSE",
      "qualification": "MCA",
      "dob": "05-05-1998",
      "designation": "Cyber Security Analyst",
      "Email": "kavya.cyber@gmail.com",
      "password": "cybersecure789"
    }
    ]
)

  return (
    <div>
        <Navbar />
        <div className="container">
            
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">              

                <table class="table table-hover" >
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Qualification</th>
      <th scope="col">DOB</th>
      <th scope="col">Designation</th>
      <th scope="col">Email ID</th>
      <th scope="col">Password</th>


    </tr>
  </thead>
  <tbody>

    {
        faculty.map(
            (value,index)=>{
                return  <tr>
                <td>{value.name}</td>
                <td>{value.department}</td>
                <td>{value.qualification}</td>
                <td>{value.dob}</td>
                <td>{value.designation}</td>
                <td>{value.Email}</td>
                <td>{value.password}</td>
              </tr>
            }
        )
    }
   
 
  </tbody>
</table>


                </div>
            </div>
        </div>

  
        
        </div>
  )
}

export default ViewallFaculties
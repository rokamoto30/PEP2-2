import CourseApi from "../APIs/CourseApi";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { getSignedInUser } from "../Util/auth";
import SessionApi from "../APIs/SessionApi";
const Courses=()=>{
    const [courseList,setCourseList]=useState([])
    const [courseID,setCourseID]=useState(0)
    const [starttime,setStartTime]=useState("")
    const [endtime,setEndTime]=useState("")
    const [userID,setUserID]=useState(0)
    console.log(courseList);
   const  handleSubmit=(event)=>{
const session={
    "end":endtime,
    "start":starttime,
    "course":{"id":courseID},
    "user": {"id": userID}
}
console.log(session)
SessionApi.addSession(session)
event.preventDefault()
    }
    
    useEffect(()=>{
        CourseApi.getCourses(setCourseList)
        setUserID(parseInt(getSignedInUser().id))
    },[])
    return (
        <>
        <h2>Book a Session</h2>
        {courseList.length===0?
        <div className='empty'>
            
            <p>No Available Courses</p>
        
        </div>: <>
      <div className="table-div">
        <table className='table table-light mt-5'>
       <thead className='thead-light'><tr>
        <th scope='col'>#</th>
        <th scope='col'>Subject</th>
        <th scope='col'>Tutor</th>
        <th scope='col'>Hourly Rate ($)</th>
        <th scope='col'>Tutor Availability</th>
        <th scope="col">Action</th>
        </tr></thead>
        <tbody>
        {
            courseList.map(t =>
            <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.subject.name}</td>
                <td>{t.tutor.username}</td>
                <td>{t.hourly}</td>
                <td>{t.availability}</td>
                <td><button data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={(()=>setCourseID(t.id))}><FontAwesomeIcon icon="fa-solid fa-calendar-plus" /></button>
                </td>
                </tr>
            )
}
        </tbody>
        </table>
        </div>
        <div className="modal fade" id="staticBackdrop" 
         data-bs-backdrop="static" 
         data-bs-keyboard="false" 
         tabIndex="-1" 
         aria-labelledby="staticBackdropLabel"
         aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Book a Session</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className='form' onSubmit={handleSubmit} >
                <label className="form-label">Start Time</label>
                <input type="datetime-local" className="form-control" value={starttime} onChange={(event)=>setStartTime(event.target.value)}></input>
                <label className="form-label mt-3">End Time</label>
                <input type="datetime-local" className="form-control" value={endtime} onChange={(event)=>setEndTime(event.target.value)}></input>
                <button className="btn mt-3">Submit</button>
                </form>
              </div>
            </div>
          </div>
</div>
        </>
        }
        
        </>
        )
}

export default Courses;
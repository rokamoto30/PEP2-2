import React, { useEffect, useState } from "react";
import UserAPI from "../APIs/UserAPI";
import CourseApi from "../APIs/CourseApi";
import SessionApi from "../APIs/SessionApi";
import { Link } from "react-router-dom";
import { getSignedInUser } from "../Util/auth";
import "./CSS/student.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const StudentInfo = () => {
  const [subjectList, setSubjectList] = useState([]);
  const [sessionList, setSessionList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [tutorList, setTutorList] = useState([]);
  const [Availability, setAvailability] = useState("");
  const [Hourly, setHourly] = useState(0);
  const [CourseID, setCourseID] = useState(0);
  const [SubjectID, setSubjectID] = useState(0);
  const [userID, setUserID] = useState(0);
  const [sessionID,setSessionID]=useState(0)
  const [rating,setRating]=useState(0);
  const user = getSignedInUser();
  const username = user.username;
  const handleSubmit = (event) => {
    const course = {
      id: CourseID,
      tutor: { id: userID },
      subject: { id: SubjectID },
      hourly: Hourly,
      availability: Availability,
    };
    console.log(course);
    CourseApi.updateCourse(course).then(() => {
      CourseApi.getCourseByUser(setCourseList);
    });
    event.preventDefault();
  };

  const handleSubmit2 = (event) => {
    const session = {
      id:sessionID,
      rating:rating
    }

    SessionApi.updateSession(session)
  };
  useEffect(() => {
    setUserID(parseInt(getSignedInUser().id));
    UserAPI.getStudentSession(setSessionList);
    CourseApi.getCourseByUser(setCourseList);
    SessionApi.getTutorSession(setTutorList);
  }, []);
  return (
    <>
      <h2 className="welcome-username"> Welcome to your home {username}! </h2>
      <hr className="tutoring-hr" />
         <div className='student-top-nav'>
            <h2 className='selection-header'>Select a Section</h2>
            <hr className='selection-hr'/>
            <a className='student-top-links' href="#enrolled-sessions">Enrolled Sessions</a>
            <a className='student-top-links' href="#tutoring-sessions">Tutoring Sessions</a>
            <a className='student-top-links' href="#courses-offered">Courses Offered</a>
        </div>
      <section className="student-body">
        <section className="left-side">
          {sessionList.length === 0 ? (
            <div className="empty">
              <p>No Past sessions</p>
              <Link className="btn" to="/courses">
                Add a Session
              </Link>
            </div>
          ) : (
            <>
              <h3 className="mt-3 enrolled-sessions-title" id="enrolled-session">
                Your Enrolled Sessions
              </h3>
              <hr className="tutoring-hr" />
             <div className='enrolled-sessions-table'>
              <table className="table table-light mt-3">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Tutor</th>
                    <th scope="col" className="time-period">
                      Time Period
                    </th>
                    <th scope="col">Rating</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {sessionList.map((s) => (
                    <tr>
                      <td>{s.id}</td>
                      <td>{s.course.subject.name}</td>
                      <td>{s.course.tutor.username}</td>
                      <td className="time-period-description">
                      {s.start.join("/").substring(0, 8)}{" "}
                    {s.start.join(":").substring(9)} -{" "}
                    {s.end.join("/").substring(0, 8)}{" "}
                    {s.end.join(":").substring(9)}
                      </td>
                      <td>{s.rating}</td>
                      <td>${s.cost}</td>
                      <td>
                      <button
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop2"
                      onClick={() => {
                        setSessionID(s.id);
                      }}
                    > <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
</div>
            </>
          )}
          
          <h3 className="mt-5 mb-2 tutoring-sessions-title" id="tutoring-sessions">
            Your Tutoring Sessions
          </h3>
          {tutorList.length===0? <><div className='empty'>

            <p>No Past Sessions</p>
           
            </div></>:<>
          <hr className="tutoring-hr" />
            <div className='tutoring-sessions-table' >
          <table className="table table-light mt-3">
            <thead className="thead-light">
              <tr>
                <th>Subject</th>
                <th className="period-header">Period</th>
                <th>User</th>
                <th>User Email</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {console.log(tutorList)}
              {tutorList.map((t) => (
                <tr>
                  <td>{t.course.subject.name}</td>
                  <td className="tutor-period">
                    {t.start.join("/").substring(0, 8)}{" "}
                    {t.start.join(":").substring(9)} -{" "}
                    {t.end.join("/").substring(0, 8)}{" "}
                    {t.end.join(":").substring(9)}
                  </td>
                  <td>{t.user.username}</td>
                  <td>
                    <a href="mailto:`${t.user.email}`">{t.user.email}</a>
                  </td>
                  <td>${t.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
 </div>
 </>}
        </section>
        {courseList.length===0? <></>:<>
        <section className="right-side">
          <h3 className="mt-3 courses-offer-title"  id="courses-offered">Courses you Offer</h3>
          <hr className="tutoring-hr" />
              <div className='courses-offered-table'>
          <table className="table table-light mt-3">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Subject</th>
                <th>Availability</th>
                <th>Hourly</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courseList.map((c) => (
                <tr>
                  <td>{c.id}</td>
                  <td>{c.subject.name}</td>
                  <td>{c.availability}</td>
                  <td>${c.hourly}</td>
                  <td>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => {
                        setCourseID(c.id);
                        setSubjectID(c.subject.id);
                      }}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
</div>
        </section>

        </>}

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Edit Course
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <label className="form-label">Hourly Rate</label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      min="0"
                      step="0.01"
                      value={Hourly}
                      onChange={(event) => {
                        setHourly(event.target.value);
                      }}
                    />
                  </div>

                  <div className="row mb-3">
                    <label className="form-label">Availability</label>
                    <input
                      type="text"
                      className="form-control"
                      value={Availability}
                      onChange={(event) => {
                        setAvailability(event.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="modal-footer">
                    <input type="submit" className="btn submit-button" value="Submit"></input>
                    <button
                      type="button"
                      className="btn close-button"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
              
        
            </div>
          </div>
        </div>
        
        <div
          className="modal fade"
          id="staticBackdrop2"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Edit Rating
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
               <div className="row">
                  <form className="form" onSubmit={handleSubmit2}>
                    <label className="form-label">Rating</label>
                   <input type="number" className="form-control" value={rating}  onChange={(event) => {
                        setRating(event.target.value) }}></input>
                   <div className="modal-footer">
                    <input type="submit" className="btn" value="Submit"  ></input>
                    <button
                      type="button"
                      className="btn"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div> </form>
               </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default StudentInfo;

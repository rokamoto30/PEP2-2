import React, { useEffect, useState } from 'react';
import TutorAPI from '../APIs/TutorApi';
import './CSS/tutor.css';
const Tutor = () => {
    const [tutorList, setTutorList] = useState([])
    useEffect(()=>{
        TutorAPI.getTutors(setTutorList)
    },[])
    return (
        <>
        <h2>Tutors</h2>
        <div className='table-div'>
       <table className='table table-light mt-3'>
       <thead className='thead-light'>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Tutor</th>
                <th scope ='col'>Contact</th>
            </tr>
        </thead>
        <tbody>{
            tutorList.map(t =>
            <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.username}</td>
                <td>{t.email}</td>
            </tr>)
} </tbody>
       </table> 
       </div>
       </>
    )
}
export default Tutor
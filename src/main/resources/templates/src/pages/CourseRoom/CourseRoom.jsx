import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header'
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Course from '../../components/Course/Course';

import './courseRoom.css'

const CourseRoom = () => {
    const [token, setToken] = useState(localStorage.getItem("aprendamais.token"));
    const [courses, setCourses] = useState([]);

    const navigate = useNavigate();

    // a

    useEffect(() => {
        fetch('./courses.json')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Erro ao carregar dados:', error));
    }, []);

    return (
        <>
            <Header />
            <div className="course-room-container">
                <div className="modules-list-column">
                    <ProgressBar />
                    <hr />
                    {courses.map((course, index) => (
                        <Course key={index} courseName={course.courseName} modules={course.modules} />
                    ))}
                </div>
                <div className="content-column">
                <iframe className='iframe-video' width="960" height="515" src="https://www.youtube.com/embed/l0qvxPPISuY?si=6Th1otOYbRd20UrX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </>
    )
}

export default CourseRoom
import React from 'react';
import "./Courses.css";
import ai from "../../assets/img/ai.png";
import sd from "../../assets/img/sd.png";
import dg from "../../assets/img/dg.png";
import hacking from "../../assets/img/hacking.png";

const Courses = () => {
    const course_data = [
        { title: 'AI Development', desc: 'Master AI Development', img: ai },
        { title: 'Digital Marketing', desc: 'Master Digital Marketing', img: dg },
        { title: 'Cyber Security', desc: 'Master Cyber Security', img: hacking },
        { title: 'Software Development', desc: 'Master Software Development', img: sd }
    ];

    return (
        <div className='container course-container'>
            <div className="course-top">
                <h2 className='section-title'>Our Free Courses</h2>
                <p>The Top Trending Free Courses With Certificates</p>
            </div>
            <div className="course-wrapper">
                {course_data.map((course, index) => (
                    <div className="course-item" key={index}>
                        <div className="course-icon">
                            <img src={course.img} alt={course.title} />
                        </div>
                        <div className="course-content">
                            <h4>{course.title}</h4>
                            <p>{course.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;

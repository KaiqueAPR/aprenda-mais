import React, { useState } from 'react';
import CourseLesson from '../CourseLesson/CourseLesson';

const CourseModule = ({ moduleName, lessons }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="module">
      <div className="module-header" onClick={toggleDropdown}>
        <h2>{moduleName}</h2>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="module-content">
          {lessons.map((lesson, index) => (
            <CourseLesson key={index} lessonName={lesson.name} completed={lesson.completed} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseModule;

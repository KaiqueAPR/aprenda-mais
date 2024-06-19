import React from 'react';

const CourseLesson = ({ lessonName, completed }) => {
  return (
    <div className="lesson">
      <span>{lessonName}</span>
      <span className={`status ${completed ? 'completed' : ''}`}></span>
    </div>
  );
};

export default CourseLesson;

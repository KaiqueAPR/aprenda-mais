import CourseModule from '../CourseModule/CourseModule';

const Course = ({ courseName, modules }) => {
    return (
        <div className="course">
            <h1>{courseName}</h1>
            <div className="course-content">
                {modules.map((module, index) => (
                    <CourseModule key={index} moduleName={module.moduleName} lessons={module.lessons} />
                ))}
            </div>
        </div>
    );
};

export default Course;

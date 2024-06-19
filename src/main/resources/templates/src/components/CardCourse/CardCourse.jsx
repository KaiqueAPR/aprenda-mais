import '../CardCourse/cardCourse.css'

const CardCourse = ({ title, image, duration }) => {
    const cardBgImage = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <div className="course-card" style={cardBgImage}>
            <div className="course-info">
                <p>{title}</p>
                <p>{`${duration}h`}</p>
            </div>
        </div>
    )
}

export default CardCourse
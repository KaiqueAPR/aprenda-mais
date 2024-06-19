import { useEffect, useState, React } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header'
import CardCourse from '../../components/CardCourse/CardCourse'
import Typebot from '../../components/ChatBot/TypeBot';

import './coursesList.css'

const CoursesList = () => {
    const [token, setToken] = useState(localStorage.getItem("aprendamais.token"));

    const navigate = useNavigate();

    useEffect(() => {
        if (token == null || token == "") {
            navigate("/login", { replace: true });
        }
    }, [token])

    return (
        <>
            <Header />
            <section className='courses-container'>
                <h1 className='courses-page-title'>Nossos Cursos</h1>
                <div className='all-courses-list'>
                    <CardCourse title={"teste"} duration={"13"} image={"https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010144.jpg?t=st=1717714398~exp=1717717998~hmac=df20be3056144a755d49c6722399e43d84e8c96e555e32c7a476d5694365fe66&w=740"} />
                    <CardCourse title={"teste"} duration={"13"} />
                    <CardCourse title={"teste"} duration={"13"} />
                    <CardCourse title={"teste"} duration={"13"} />
                    <CardCourse title={"teste"} duration={"13"} />
                    <CardCourse title={"teste"} duration={"13"} />
                    <CardCourse title={"teste"} duration={"13"} />
                    <CardCourse title={"teste"} duration={"13"} />
                    <CardCourse title={"teste"} duration={"13"} />
                    <CardCourse title={"teste"} duration={"13"} />
                    <CardCourse title={"teste"} duration={"13"} />
                    <CardCourse title={"teste"} duration={"13"} />
                    <CardCourse title={"teste"} duration={"13"} />
                    <CardCourse title={"teste"} duration={"13"} />
                    <CardCourse title={"teste"} duration={"13"} />
                </div>
                <Typebot />
            </section>
        </>
    )
}

export default CoursesList
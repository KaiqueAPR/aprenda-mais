import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [token, setToken] = useState(localStorage.getItem("aprendamais.token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (token == null || token == "") {
      navigate("/login", { replace: true });
    }
  }, [token])

  return (
    <div>Home</div>
  )
}

export default Home
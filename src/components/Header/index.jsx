import './styles.css'
import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

export function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <Link to={'/'}> <img src="https://static.vecteezy.com/system/resources/previews/000/626/835/original/green-leaf-logo-vector.jpg" alt="" width="80px" /></Link>
            <button onClick={() => {navigate('/createpost')}}>Postar algo</button>
        </header>
    )
}
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <h1>Navbar</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/dash">dashboard</Link>
                            
                        <li>
                            <Link to="/servi">servicios</Link>
                            
                        </li>
                        <li>
                            <Link to="/port/Elige nuestro portafolio">portafolio</Link>
                            
                        </li>
                        <li>
                            <Link to="/sopor/Comunicarse">soporte</Link>
                        </li>
                        <li>
                            
                            <Link to="/proyecto/12345678">proyecto</Link>
                        </li>

                    </li>
                </ul>
            </nav>
        </div> 
    )
}
export default Navbar

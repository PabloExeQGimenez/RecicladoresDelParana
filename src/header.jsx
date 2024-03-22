import "./header.css";
import logo from "./assets/imagenes/logo.png";

function Header() {
    return ( 
        <header className="header">
            <div className="logoH1">
            <img src={logo} alt="logo"  />
            <h1>Recicladores del Paraná</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;

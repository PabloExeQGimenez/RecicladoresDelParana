import logo from './assets/imagenes/logo.png';
import './header.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logoH1">
          <img src={logo} alt="logo" />
          <h1>Recicladores del Paraná {1+5}</h1>
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
    </>
  )
}

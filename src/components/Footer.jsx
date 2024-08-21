import style from "../styles/Footer.module.css"
import { Link } from "react-router-dom";

function scrollToTop(event) {
    event.preventDefault()
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Esto hace que el desplazamiento sea suave
    });
}

// Luego, puedes agregar un listener a los links que deseas que utilicen esta función
/* document.querySelector('a#your-link-id').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el link realice su acción predeterminada (navegar)
    scrollToTop();
});
 */

export default function Footer() {
    return(
        <div className={style.Wrapper}>
            <hr/>
            <div className={style.ContainerFlex}>
                <div className={style.WrapperList}>
                    <Link to="/" onClick={(e) => scrollToTop(e)}><p>Inicio</p></Link>
                    <Link to="/solutions"><p>Soluciones</p></Link>
                    <Link to="/contact"><p>Contacto</p></Link>
                </div>
            </div>
            <p className={style.Copyright}>@2024 Mountains Development</p>
        </div>
    )
}
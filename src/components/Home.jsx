import alpine from "../images/alpine.jpg"
import style from "../styles/Home.module.css"
import room from "../images/room.png"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

// Definimos la variable
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [size, setSize] = useState(isMobile ? "larger" : "xx-large");

  useEffect(() => {
    const updateIsMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setSize(mobile ? "larger" : "xx-large");
    };

    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);
    
    return (
        <div>
            <div className={style.FirstBlock}>
                <img src={alpine} alt="Alpes mountain" className={style.Landscape}/>
                <div className={style.Wrapper}>
                    <h1 className={style.Title}>Mountains Development</h1>
                    <h3 className={style.Subtitle}>Descubre nuestras soluciones en desarrollo web</h3>
                    <Link to="/solutions"><button className={style.Btn}>Descubir soluciones</button></Link>
                </div>
            </div>
            <div className={style.SecondBlock}>
                <div className={style.TextSecondBlock}>
                    <ul className={style.ListSecondBlock}>
                        <li><b>Reservas directas:</b> Se evitan gastos en intermediarios y brinda un mejor control sobre las reservas.</li>
                        <li><b>Accesibilidad:</b> Cuanta más información tengan disponibles los usuarios, mayor será la confianza que tendrán para hacer una reserva, asimismo se ahorra tiempo en responder dudas frecuentes.</li>
                        <li><b>Credibilidad y profesionalismo:</b> Una página web bien diseñada y mantenida transmite confianza y profesionalismo. Los clientes están más inclinados a reservar en un hotel que parece confiable y establecido en línea.</li>
                        <li><b>Diferenciación y visibilidad:</b> En un mercado saturado, es crucial destacar y hacerse visible ante los clientes potenciales</li>
                    </ul>
                </div>
                <img src={room} alt="Hotel roomS" className={style.ImageRoom}/>
                <div className={style.Importancia}>
                    <h3>¿Por qué es importante tener una página web en tu alojamiento?</h3>
                </div>
            </div>
            <div className={style.ThirdBlock}>
                    <img src={alpine} alt="Alpes mountain" className={style.ImgThirdBlock}/>
                    <div className={style.WhyUs}>
                        <h3>¿Por qué elegir Mountains Development?</h3>
                    </div>
                    <div className={style.WrapperBenefits}>
                        <div className={style.WrapperParagraph}>
                            <p style={{ fontFamily: "'Noto Color Emoji', sans-serif" , fontSize: size }} >🖥️</p>
                            <br/>
                            <p className={style.WhyMD}>Páginas Web</p>
                            <p className={style.WhyMD}>intuitivas y fáciles</p>
                            <p className={style.WhyMD}>de usar</p>
                        </div>
                        <div className={style.WrapperParagraph}>
                            <p style={{ fontFamily: "'Noto Color Emoji', sans-serif" , fontSize: size}}>💰</p>
                            <br/>
                            <p className={style.WhyMD}>Descuentos en </p>
                            <p className={style.WhyMD}>futuros productos y</p>
                            <p className={style.WhyMD}>mejorías</p>
                        </div>
                        <div className={style.WrapperParagraph}>
                            <p style={{ fontFamily: "'Noto Color Emoji', sans-serif" , fontSize: size}}>🏨</p>
                            <br/>
                            <p className={style.WhyMD}>Equipo de trabajo </p>
                            <p className={style.WhyMD}>con experiencia en</p>
                            <p className={style.WhyMD}>turismo y hoteleria</p>
                        </div>
                        <div className={style.WrapperParagraph}>
                            <p style={{ fontFamily: "'Noto Color Emoji', sans-serif" , fontSize: size}}>📱</p>
                            <br/>
                            <p className={style.WhyMD}>Diseños</p>
                            <p className={style.WhyMD}>adaptables</p>
                            <p className={style.WhyMD}>a todos los dispositivos</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
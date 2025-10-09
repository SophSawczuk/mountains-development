import alpine from "../images/alpine.jpg"
import style from "../styles/Home.module.css"
import deal from "../images/deal.jpg"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import webdesign from "../images/diseño-web.png"
import why from "../images/por-que-elegirnos.jpg"
import experience from "../images/experience.png"
import star from "../images/star.png"

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
                <img src={alpine} alt="Alpes mountain" className={style.Landscape} />
                <div className={style.Wrapper}>
                    <h1 className={style.Title1}>Mountains Development</h1>
                    <h1 className={style.Title2}>Páginas Web para Hoteles</h1>
                    <h3 className={style.Subtitle}>Diseñamos páginas web que atraen huéspedes y aumentan tus reservas</h3>
                    <p className={style.Description}>En Mountains Development creamos páginas web diseñadas especialmente para alojamientos turísticos. Te ayudamos a mostrar tu hotel de forma profesional, atraer a más huéspedes y recibir reservas directas. </p>
                    <Link to="/solutions"><button className={style.Btn}>Descubir soluciones</button></Link>
                </div>
            </div>
            <div className={style.Experience}>
                <div className={style.Experience_Description}>
                    <h3>La imagen importa, pero la experiencia lo es todo</h3>
                    <h2>Mostrá lo mejor de tu hotel con una web hecha a medida</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias corporis placeat error maiores itaque. Numquam aliquid eveniet cumque impedit facere enim molestiae commodi, sunt aperiam similique possimus deserunt ipsa nobis?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quis, quaerat incidunt nulla odit nemo, velit dignissimos aliquam quasi amet necessitatibus optio placeat quibusdam voluptas sapiente ipsam quidem a est.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ipsum totam cupiditate iste incidunt dolor voluptatum voluptatibus recusandae, maxime placeat minima. Exercitationem at velit quos, numquam id quo quisquam nobis?</p>
                </div>
                <img src={experience} />
            </div>
            <div className={style.Highlights}>
                <div className={style.Highlight}>
                    <img src={star} />
                    <p>Calidad</p>
                </div>
                <div className={style.Highlight}>
                    <img src={star} />
                    <p>Calidad</p>
                </div>
                <div className={style.Highlight}>
                    <img src={star} />
                    <p>Calidad</p>
                </div>
                <div className={style.Highlight}>
                    <img src={star} />
                    <p>Calidad</p>
                </div>
            </div>
            <div className={style.SegundoBloque}>
                <h2 className={style.TituloSegundoBloque}>Esto es lo que una buena página</h2>
                <h2 className={style.TituloSegundoBloque}>web puede hacer por tu hotel</h2>
                <h3 className={style.SubtituloSegundoBloque}>Más reservas, menos comisiones, mejor imagen</h3>
                <div className={style.CardsSegundoBloque}>
                    <div className={style.CardSegundoBloque}>
                        <img src={deal} className={style.ImgCardSegundoBloque} />
                        <div className={style.WrapperCardSegundoBloque}>
                            <h3>MÁS RESERVAS DIRECTAS</h3>
                            <p>Tu nueva web se convierte en un canal de ventas propio, sin intermediarios. Así, cada consulta se transforma en una oportunidad concreta de ingreso.</p>
                        </div>
                    </div>
                    <div className={style.CardSegundoBloque}>
                        <img src={deal} className={style.ImgCardSegundoBloque} />
                        <div className={style.WrapperCardSegundoBloque}>
                            <h3>MÁS RESERVAS DIRECTAS</h3>
                            <p>Tu nueva web se convierte en un canal de ventas propio, sin intermediarios. Así, cada consulta se transforma en una oportunidad concreta de ingreso.</p>
                        </div>
                    </div>
                    <div className={style.CardSegundoBloque}>
                        <img src={deal} className={style.ImgCardSegundoBloque} />
                        <div className={style.WrapperCardSegundoBloque}>
                            <h3>MÁS RESERVAS DIRECTAS</h3>
                            <p>Tu nueva web se convierte en un canal de ventas propio, sin intermediarios. Así, cada consulta se transforma en una oportunidad concreta de ingreso.</p>
                        </div>
                    </div>
                    <div className={style.CardSegundoBloque}>
                        <img src={deal} className={style.ImgCardSegundoBloque} />
                        <div className={style.WrapperCardSegundoBloque}>
                            <h3>MÁS RESERVAS DIRECTAS</h3>
                            <p>Tu nueva web se convierte en un canal de ventas propio, sin intermediarios. Así, cada consulta se transforma en una oportunidad concreta de ingreso.</p>
                        </div>
                    </div>

                </div>



            </div>
            <div className={style.TercerBloque}>
                <h2 className={style.TituloTercerBloque}>Todo lo que tu alojamiento necesita</h2>
                <h2 className={style.TituloTercerBloque}>para destacar online</h2>
                <br />
                <h3 className={style.SubtituloTercerBloque}>Creamos sitios web pensados para alojamientos turísticos de todo tipo: </h3>
                <h3 className={style.SubtituloTercerBloque}>hoteles, hosterías, cabañas, apartamentos, hostels o campings.</h3>
                <div className={style.CardsTercerBloque}>
                    <div className={style.CardContainerTercerBloque}>
                        <div className={style.WrapperTituloTercerBloque}>
                            <img src={webdesign} className={style.LogoCardTercerBloque} />
                            <h3>DISEÑO WEB</h3>
                        </div>
                        <p>Transmití confianza desde el primer clic. Creamos un diseño visual profesional, atractivo y adaptado a la identidad de tu alojamiento, pensado para enamorar a tus futuros huéspedes.</p>
                        <button className={style.BtnCardTercerBloque}>Ver más</button>
                    </div>
                    <div className={style.CardContainerTercerBloque}>
                        <div className={style.WrapperTituloTercerBloque}>
                            <img src={webdesign} className={style.LogoCardTercerBloque} />
                            <h3>DISEÑO WEB</h3>
                        </div>
                        <p>Transmití confianza desde el primer clic. Creamos un diseño visual profesional, atractivo y adaptado a la identidad de tu alojamiento, pensado para enamorar a tus futuros huéspedes.</p>
                        <button className={style.BtnCardTercerBloque}>Ver más</button>
                    </div>
                    <div className={style.CardContainerTercerBloque}>
                        <div className={style.WrapperTituloTercerBloque}>
                            <img src={webdesign} className={style.LogoCardTercerBloque} />
                            <h3>DISEÑO WEB</h3>
                        </div>
                        <p>Transmití confianza desde el primer clic. Creamos un diseño visual profesional, atractivo y adaptado a la identidad de tu alojamiento, pensado para enamorar a tus futuros huéspedes.</p>
                        <button className={style.BtnCardTercerBloque}>Ver más</button>
                    </div>
                    <div className={style.CardContainerTercerBloque}>
                        <div className={style.WrapperTituloTercerBloque}>
                            <img src={webdesign} className={style.LogoCardTercerBloque} />
                            <h3>DISEÑO WEB</h3>
                        </div>
                        <p>Transmití confianza desde el primer clic. Creamos un diseño visual profesional, atractivo y adaptado a la identidad de tu alojamiento, pensado para enamorar a tus futuros huéspedes.</p>
                        <button className={style.BtnCardTercerBloque}>Ver más</button>
                    </div>
                </div>

            </div>

            <div className={style.CuartoBloque}>
                <div className={style.ContenidoCuartoBloque} >
                    <h3>¿Por qué elegirnos?</h3>
                    <blockquote className={style.Frase}>
                        No hacemos webs en serie. Escuchamos tu historia, entendemos tu alojamiento y lo convertimos en una web que transmite confianza.
                    </blockquote>
                    <ul className={style.ItemsCuartoBloque}>
                        <li>En Mountains Development somos una agencia 100% argentina, especializada en crear páginas web para alojamientos del país. </li>
                        <li>Contamos con desarrolladores  web con sólida formación técnica y especialistas con experiencia en el sector turístico., lo que nos permite entender a fondo las necesidades de tu alojamiento.</li>
                        <li>Diseñamos sitios atractivos, rápidos y pensados para atraer más huéspedes, destacarte en Google y mejorar tu presencia online sin depender de terceros. </li>
                        <li>Conocemos tu realidad, porque trabajamos para el turismo argentino.</li>
                    </ul>
                </div>
                <img src={why} className={style.ImgCuartoBloque} />
            </div>
            {/* <div className={style.SecondBlock}>
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
                </div> */}
        </div>
    )
}
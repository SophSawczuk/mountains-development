import style from "../styles/DiseñoSur.module.css"
import sur3 from "../images/sur3.mp4"
import { Link } from "react-router-dom"
import { FaCheck } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function DiseñoSur() {
    const navigate = useNavigate();

    return(
        <div>
            <div className={style.BlockOne}>
                <Link to="/solutions" ><p className={style.Link}>&lt;&lt; Volver a Websites Estáticas </p></Link>
                <div className={style.WrapperOne}>
                    <div className={style.WrapperDetail}>
                        <div className={style.Title}>
                            <h2 className={style.NameDesign}>DISEÑO </h2> <h2 className={style.NameDesignColor}>SUR</h2>
                        </div>
                        <ul className={style.Lista}>
                            <li>✨ <b>Diseño Estratégico:</b> Diseño optimizado para conversiones. Se adapta a la identidad visual de tu alojamiento, reflejando su estilo y personalidad únicos.</li>
                            <br/>                         
                            <li>📸 <b>Galería de Fotos Impactante:</b> Presenta tus habitaciones, instalaciones y entorno con imágenes de alta calidad que cautivarán a tus futuros huéspedes.</li>
                            <br/>     
                            <li>📍 <b>Información Clara y Concisa:</b> Destaca tus servicios, tarifas y ubicación de manera clara y fácil de entender.</li>
                            <br/>     
                            <li>📱 <b>Compatibilidad Móvil:</b> Tu página web se verá perfecta en todos los dispositivos, desde computadoras de escritorio hasta smartphones.</li>
                            <br/>     
                            <li>🔗 <b>Enlaces a Redes Sociales:</b> Conecta tu página web con tus perfiles en redes sociales y un formulario de contacto para una mayor interacción con tus clientes.</li>
                        </ul>
                    </div>
                    <video className={style.Video} width="100%" height="100%" controls>
                        <source src={sur3} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className={style.BlockTwo}>
                <div className={style.Title}>
                    <h2 className={style.NameDesign}>DISEÑO </h2> <h2 className={style.NameDesignColor}>SUR </h2> <h2 className={style.NameDesignTwo}>- Precio desarrollo (pago único)</h2>
                    
                </div>
                <h2 className={style.Subtitle}>Precio desarrollo (pago único)</h2>
                <div className={style.Card}>
                 {/*    <p className={style.Descuento}>Antes: $150.000</p> */}
                    <h2 className={style.Price}>$45.000</h2>
                    <hr />
                    <div className={style.WrapperDetailsDevelopment}>
                        <div className={style.Section}>
                            <IoMdCheckmark className={style.Check}/>
                            <p><b>Secciones:</b> Inicio, habitaciones, comodidades, cómo llegar, contacto.</p>
                        </div>
                        <div className={style.Section}>
                            <IoMdCheckmark className={style.Check}/>
                            <p><b>Diseño responsive:</b> se adapte automáticamente a diferentes dispositivos, como computadoras de escritorio, tablets y teléfonos.</p>
                        </div>
                        <div className={style.Section}>
                            <IoMdCheckmark className={style.Check}/>
                            <p><b>Formulario de Contacto:</b> Ofrece un formulario fácil de usar para que los visitantes puedan enviar consultas directas por correo electrónico.</p>
                        </div>
                        <div className={style.Section}>
                            <IoMdCheckmark className={style.Check}/>
                            <p><b>Integración con Redes Sociales:</b> Incluye botones y enlaces a las redes sociales del alojamiento.</p>
                        </div>
                        <div className={style.Section}>
                            <IoMdCheckmark className={style.Check}/>    
                            <p><b>Mapa y Ubicación:</b> Proporciona un mapa interactivo que muestra la ubicación exacta del alojamiento.</p>
                        </div>
                    </div>
                    <hr/>
                    <button onClick={() => {navigate("/contact"); }} className={style.ButtonAdd}>Adquirir</button>
                </div>
           
            </div>
            <div className={style.BlockThree}>
                <div className={style.Title}>
                    <h2 className={style.NameDesign}>DISEÑO </h2> <h2 className={style.NameDesignColor}>SUR </h2> <h2 className={style.NameDesignTwo}>- Planes de mantenimiento</h2>
                </div>
                <h2 className={style.Subtitle}>Planes de mantenimiento</h2>
                <div className={style.WrapperCards}>
                    <div className={style.CardMaintanence}>
                        <div className={style.Plan}><p>Básico</p></div>
                        <div className={style.PriceCard}>
                            <h2 className={style.Price}>$25.000 </h2>
                            <p> /mes</p>
                        </div>
                        <hr/>
                        <div className={style.WrapperList}>
                            <div className={style.ItemList}>
                                <IoMdCheckmark className={style.CheckTwo}/>     
                                <p>Actualización de contenido.</p>
                            </div>
                            <div className={style.ItemList}>
                                <IoMdCheckmark className={style.CheckTwo}/>
                                <p>Mantenimiento de seguridad.</p>
                            </div>
                            <div className={style.ItemList}>
                                <IoMdCheckmark className={style.CheckTwo}/>
                                <p>Monitoreo de Uptime</p>
                            </div>
                            <div className={style.ItemList}>
                                <IoMdCheckmark className={style.CheckTwo}/>
                                <p>Soporte técnico.</p>
                            </div>
                            <div className={style.ItemList}>
                                <IoMdCheckmark className={style.CheckTwo}/>
                                <p>Pago mensual</p>
                            </div>
                        </div>
                        <hr/>
                        <button onClick={() => {navigate("/contact"); }} className={style.ButtonCard}>Adquirir</button>
                    </div>
                    <div className={style.CardMaintanence}>
                        <div className={style.Plan}><p>Pro</p></div>
                        <div className={style.PriceCard}>
                            <h2 className={style.Price}>$15.000 </h2>
                            <p>/mes</p>
                        </div>
                        <hr/>
                        <div className={style.WrapperList}>
                            <div className={style.ItemList}>
                                <IoMdCheckmark className={style.CheckTwo}/>     
                                <p>Actualización de contenido.</p>
                            </div>
                            <div className={style.ItemList}>
                                <IoMdCheckmark className={style.CheckTwo}/>
                                <p>Mantenimiento de seguridad.</p>
                            </div>
                            <div className={style.ItemList}>
                                <IoMdCheckmark className={style.CheckTwo}/>
                                <p>Monitoreo de Uptime</p>
                            </div>
                            <div className={style.ItemList}>
                                <IoMdCheckmark className={style.CheckTwo}/>
                                <p>Soporte técnico.</p>
                            </div>
                            <div className={style.ItemList}>
                                <IoMdCheckmark className={style.CheckTwo}/>
                                <p>Pago anual</p>
                            </div>
                        </div>
                        <hr/>
                        <button onClick={() => {navigate("/contact"); }} className={style.ButtonCard}>Adquirir</button>
                    </div>
                    <div className={style.CardMaintanenceDark}>
                        <div className={style.PlanDark}><p>Custom</p></div>
                    
                            <h2 className={style.PriceDark}>Personalizado </h2>
                       
                        <hr/>
                        <div className={style.WrapperListDark}>
                            <div className={style.ItemListDark}>
                                <IoMdCheckmark className={style.CheckTwoDark}/>     
                                <p>Conversamos tanto el precio como los plazos de pago según tus necesidades y preferencias.</p>
                            </div>
                            <div className={style.ItemListDark}>
                                <IoMdCheckmark className={style.CheckTwoDark}/>
                                <p>Personalización de características del sitio web.</p>
                            </div>
                            <div className={style.ItemListDark}>
                                <IoMdCheckmark className={style.CheckTwoDark}/>
                                <p>Descuentos en futuras mejoras y actualizaciones.</p>
                            </div>
                            
                        </div>
                        <hr/>
                        <button onClick={() => {navigate("/contact"); }} className={style.ButtonCardDark}>Adquirir</button>
                    </div>
                    
                   
                </div>
                

            </div>
        </div>
    )
}
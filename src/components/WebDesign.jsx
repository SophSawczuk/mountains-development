import style from "../styles/WebDesign.module.css"
import palette from "../images/icon-palette.png"
import collage from "../images/collage-web-design.png"
import collage2 from "../images/collage-web-design-2.png"
import multimedia from "../images/icon-multimedia.png"
import idea from "../images/icon-idea.png"
import star from "../images/star.png"
import velocimetro from "../images/icon-velocimetro.png"
import ux from "../images/icon-ux.png"
import phonegirl from "../images/phone-girl.jpg"
import reception from "../images/reception.jpg"

export default function WebDesign() {
    return (
        <div>
            <div className={style.Banner}>
                <h1>Diseño Web</h1>
                <h2>Diseñamos páginas web que atraen huéspedes y aumentan tus reservas.</h2>
            </div>
            <div className={style.History}>
                <h2>Diseños web que cuentan la historia única de tu alojamiento</h2>
                <h3>Cada detalle visual y funcional está pensado para reflejar la personalidad y valores de tu hotel</h3>
                <div className={style.History_Wrapper}>
                    <div className={style.History_Description}>
                        <div className={style.History_Description_Block}>
                            <div className={style.History_Description_Title}>
                                <img src={palette} />
                                <h4>Adaptamos colores, tipografías y estilos para conectar </h4>
                            </div>
                            <p>Creamos webs que reflejan la personalidad única de tu hospedaje. Desde la elección de colores hasta la disposición de las imágenes y textos, cada elemento está diseñado para transmitir la esencia de tu espacio.</p>
                        </div>
                        <div className={style.History_Description_Block}>
                            <div className={style.History_Description_Title}>
                                <img src={multimedia} />
                                <h4>Integración de multimedia para mostrar la experiencia real de tu alojamiento</h4>
                            </div>
                            <p>Una buena imagen vale más que mil palabras, y en turismo eso se multiplica. Las imágenes impactantes y los videos reales son los protagonistas del diseño. Mostramos lo mejor de tu alojamiento de forma profesional y envolvente, generando confianza y emoción.</p>
                        </div>
                        <div className={style.History_Description_Block}>
                            <div className={style.History_Description_Title}>
                                <img src={idea} />
                                <h4>Personalización visual basada en la identidad de marca y público objetivo </h4>
                            </div>
                            <p>No usamos plantillas genéricas: diseñamos cada sitio según tu estilo, tu entorno, tu clientela y lo que querés transmitir.</p>
                        </div>
                    </div>
                    <img src={collage2} className={style.History_Img} />
                </div>
            </div>
            <div className={style.Flexible_Design}>
                <h2>Diseño flexible que facilita la actualización de promociones y temporadas</h2>
                <div className={style.Flexible_Design_Content}>
                    <img src={star} />
                    <p>Tu nueva web se convierte en un canal de ventas propio, sin intermediarios. Así, cada consulta se transforma en una oportunidad concreta de ingreso.</p>
                </div>
            </div>
            <div className={style.Caracteristics}>
                <div className={style.Caracteristics_Block}>
                    <div className={style.Caracteristics_Block_Title}>
                        <img src={ux} />
                        <h4>Experiencia UX/UI diseñada para facilitar la navegación y conversión</h4>
                    </div>
                    <div className={style.Caracteristics_Block_Description}>
                        <p>Entrar a una web no debería ser un laberinto. Cuando alguien visita tu sitio, tiene que encontrar lo que busca sin dar mil vueltas: fotos claras, precios visibles, ubicación precisa y el botón de “reservar” bien a mano. </p>
                        <br />
                        <p>Trabajamos con principios de experiencia de usuario para que cada clic sea fácil, intuitivo y pensado para llevar a una acción concreta: que te elijan. Porque un sitio lindo no sirve de nada si no convierte visitas en reservas.</p>
                    </div>
                </div>
                <div className={style.Caracteristics_Block}>
                    <div className={style.Caracteristics_Block_Title}>
                        <img src={velocimetro} />
                        <h4>Velocidad y rendimiento óptimos para mantener a tus visitantes conectados</h4>
                    </div>
                    <div className={style.Caracteristics_Block_Description}>
                        <p>Todos odiamos cuando una página tarda en cargar. En el mundo del turismo, esa espera puede costarte una reserva. Por eso optimizamos cada sitio para que cargue en segundos, incluso con conexiones lentas. </p>
                        <br />
                        <p>Velocidad no solo significa mejor experiencia para tus visitantes, también es clave para posicionarte mejor en buscadores como Google.</p>
                    </div>
                </div>
            </div>
            <div className={style.Responsive}>
                <img src={phonegirl} />
                <div className={style.Responsive_Content}>
                    <h2>Diseño responsive que garantiza accesibilidad desde cualquier dispositivo</h2>
                    <p>Hoy en día, la mayoría de las personas explora opciones de hospedaje desde el celular, en momentos cotidianos como una pausa en el día o de camino a casa. Por eso, diseñamos sitios web que se adaptan perfectamente a cualquier pantalla, sin importar el tamaño o el dispositivo. </p>
                    <br />
                    <p>Que tu página se vea clara, rápida y profesional en todos lados no es un lujo, es una necesidad… y es algo que vas a tener garantizado.</p>
                </div>
            </div>
            <div className={style.Redesign}>
                <h2>Rediseño de sitios web pensando en las tendencias y necesidades futuras</h2>
                <div className={style.Redesign_Content}>
                    <p>Si tu página web quedó vieja, poco funcional o difícil de actualizar, es momento de un cambio. </p>
                    <p>Nos encargamos de modernizarla desde lo visual hasta lo técnico, respetando tu estilo pero incorporando todo lo que hoy necesita un alojamiento para destacar: diseño actual, velocidad, accesibilidad, reservas integradas y más. </p>
                    <p>Renovar no es un gasto, es una inversión que trae resultados.</p>
                </div>
            </div>
            <div className={style.Content}>
                <img src={reception} />
                <div className={style.Content_Description}>
                    <h2>Contenidos claros y optimizados para responder las dudas más comunes</h2>
                    <p>Cuando alguien está planeando un viaje, lo último que quiere es andar buscando información por todos lados. Por eso te ayudamos a comunicar lo esencial de manera directa: ubicación, precios, servicios, disponibilidad y cómo reservar. </p>
                    <p>Armamos el contenido de tu web pensando en las preguntas reales que se hacen los huéspedes argentinos, y lo presentamos de forma clara, ordenada y fácil de leer.</p>
                </div>
            </div>
        </div>
    )
}
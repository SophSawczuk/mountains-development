import style from "../styles/Seo.module.css"
import seo from "../images/seo-engines.png"
import search from "../images/icon-search.png"
import goal from "../images/icon-goal.png"
import palette from "../images/icon-palette.png"
import multimedia from "../images/icon-multimedia.png"
import friends from "../images/friends.jpg"
import hotel from "../images/hotel.jpg"

export default function Seo() {
    return (
        <div>
            <div className={style.Banner}>
                <h1>SEO</h1>
                <h2>Diseñamos páginas web que atraen huéspedes y aumentan tus reservas.</h2>
            </div>
            <div className={style.History}>
                <h2>Mejorá tu posición en Google y dejá de depender solo de OTAs</h2>
                <h3>Potenciá las reservas directas y evitá comisiones</h3>
                <div className={style.History_Wrapper}>
                    <div className={style.History_Description}>
                        <div className={style.History_Description_Block}>
                            <div className={style.History_Description_Title}>
                                <img src={palette} />
                                <h4>Optimización para captar búsquedas reales y concretas</h4>
                            </div>
                            <p>Trabajamos para que tu alojamiento aparezca antes que la competencia en Google, lo que te ayuda a captar más reservas directas sin depender exclusivamente de plataformas como Booking o Airbnb. Esto te permite reducir costos y fortalecer la relación directa con tus huéspedes, dándote mayor control y mejor rentabilidad.</p>
                        </div>
                        <div className={style.History_Description_Block}>
                            <div className={style.History_Description_Title}>
                                <img src={multimedia} />
                                <h4>Haz que te encuentren quienes ya están buscando hospedaje</h4>
                            </div>
                            <p>Nos encargamos de que tu sitio web esté diseñado para aparecer cuando alguien busca exactamente lo que ofrecés. Esto significa que las personas que ya están en modo de búsqueda activa te van a encontrar primero a vos, aumentando las chances de que reserven directo en tu web.</p>
                        </div>

                    </div>
                    <img src={seo} className={style.History_Img} />
                </div>
            </div>
            <div className={style.Turism}>
                <img src={friends} />
                <div className={style.Turism_Content}>
                    <h2>SEO pensado para atraer turistas nacionales e internacionales</h2>
                    <p>Tu sitio estará preparado para captar turistas de Argentina y también del exterior, ajustando los contenidos, palabras clave y la estructura para que viajeros de distintos países te encuentren con facilidad.</p>
                    <br />
                    <p>Así, podés ampliar tu público objetivo y atraer más visitantes durante todo el año.</p>
                </div>
            </div>
            <div className={style.Medida}>
                <div className={style.Medida_Content}>
                    <h3>SEO adaptado a tu realidad y público específico</h3>
                    <h2>Estrategias personalizadas según tu tipo de alojamiento y región</h2>
                    <p>No es lo mismo hacer SEO para un hostel que para una resort o un lodge en la montaña. </p>
                    <br />
                    <p>Por eso creamos estrategias personalizadas según el tipo de alojamiento, el entorno y las particularidades del mercado local, para que atraigas a los huéspedes ideales y consigas los mejores resultados.</p>
                </div>
                <img src={hotel} />
            </div>
            <div className={style.Redesign}>
                <h2>Contenido optimizado que responde lo que tus futuros huéspedes quieren saber</h2>
                <div className={style.Redesign_Content}>
                    <p>Creamos y ajustamos los contenidos de tu página para responder a las preguntas que suelen hacer tus futuros huéspedes, como horarios, servicios, políticas o recomendaciones. </p>
                    <p>Esto mejora tu visibilidad orgánica porque Google reconoce que tu web da respuestas relevantes, y además genera confianza en quien está buscando dónde alojarse.</p>
                </div>
            </div>

        </div>
    )
}
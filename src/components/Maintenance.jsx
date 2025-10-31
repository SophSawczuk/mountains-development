import style from "../styles/Maintenance.module.css"
import grupo from "../images/grupo.jpg"
import star from "../images/star.png"
import customers from "../images/247.jpg"
import speed from "../images/speed.jpeg"
import chart from "../images/icon-chart.png"

export default function Maintenance() {
    return (
        <div>
            <div className={style.Banner}>
                <h1>Mantenimiento</h1>
                <h2>Diseñamos páginas web que atraen huéspedes y aumentan tus reservas.</h2>
            </div>
            <div className={style.Medida}>
                <div className={style.Medida_Content}>
                    <h3>Sabemos que tu prioridad es atender bien, no preocuparte por la tecnología</h3>
                    <h2>Nos ocupamos de tu web para que vos te ocupes de tus huéspedes</h2>
                    <p>Tu alojamiento merece que vos estés enfocado en brindar una experiencia única a tus huéspedes, sin tener que estar pendiente de que la página funcione o se caiga. </p>
                    <br />
                    <p>Por eso, nosotros nos encargamos de mantener tu sitio siempre actualizado, rápido y seguro. </p>
                    <br />
                    <p>Nos ocupamos de todos los detalles técnicos para que tu web esté disponible y funcione perfecto las 24 horas, los 7 días de la semana. </p>
                    <br />
                    <p>Así vos podés dedicar tu tiempo y energía a lo que realmente importa: recibir a tus visitantes con la mejor atención.</p>
                </div>
                <img src={grupo} />
            </div>
            <div className={style.Magia}>
                <div className={style.Magia_Item}>
                    <img src={star} />
                    <h4>Copias de seguridad </h4>
                    <p>Backups automáticos diarios de todo tu sitio. Si algo falla, restauramos tu página en minutos, sin que tengas que preocuparte ni perder información.</p>
                </div>
                <div className={style.Magia_Item}>
                    <img src={star} />
                    <h4>Ayuda con contenido y cambios</h4>
                    <p>Cuando necesites cambiar una foto, corregir un texto, actualizar precios o subir una promoción especial, lo hacemos por vos, rápido y sin complicaciones.</p>
                </div>
                <div className={style.Magia_Item}>
                    <img src={star} />
                    <h4>Evitá errores técnicos</h4>
                    <p>Hacemos un seguimiento constante para detectar y corregir cualquier falla antes de que llegue a afectar a tus visitantes o al funcionamiento del sitio.</p>
                </div>
            </div>
            <div className={style.Customer_Service}>
                <img src={customers} />
                <div className={style.Customer_Service_Description}>
                    <h2>Atención cercana y personalizada, sin intermediarios</h2>
                    <p>Nada de pasar por varios niveles de atención o perderte en un mar de mensajes automáticos.</p>
                    <p>Nosotros somos el equipo que desarrolló tu sitio y te conocemos a vos y a tu alojamiento. </p>
                    <p>Por eso la comunicación es directa y rápida, entendemos tus necesidades puntuales y respondemos en tiempo y forma para que no te quedes con dudas ni problemas.</p>
                </div>
            </div>
            <div className={style.Speed}>
                <img src={speed} />
                <div className={style.Speed_Content}>
                    <h2>Velocidad bajo control: monitoreo y ajustes continuos</h2>
                    <p>Monitoreamos constantemente la velocidad y el rendimiento de tu sitio para mantenerlo liviano y rápido, incluso cuando recibe un gran volumen de tráfico. </p>
                    <br />
                    <p>
                        Ajustamos todo lo necesario para que la experiencia del usuario sea fluida y agradable, porque sabemos que cada segundo cuenta para que un posible huésped decida reservar.</p>
                </div>
            </div>
            <div className={style.Acompañamiento}>
                <h2>No te dejamos solo después de publicar tu web</h2>
                <div className={style.Acompañamiento_Content}>
                    <p>Publicar tu página es solo el primer paso. Estamos para ayudarte en el día a día, resolviendo dudas, haciendo mejoras y aconsejándote para que saques el máximo provecho a tu sitio.  </p>
                    <p>Nuestro mantenimiento incluye apoyo constante para que tu web siga siendo una herramienta potente que acompañe el crecimiento de tu alojamiento, sin que tengas que preocuparte por nada técnico.</p>
                </div>
            </div>
            <div className={style.Growing}>
                <div className={style.Growing_Chart}>
                    <img src={chart} />
                    <h3>Pensamos tu web como un proyecto vivo, que evoluciona junto a vos y tu alojamiento, sin perder calidad ni funcionalidad.</h3>
                </div>
                <div className={style.Growing_Content}>
                    <h2>Mantenimiento pensado para crecer junto a tu alojamiento</h2>
                    <p>Si vas ampliando habitaciones, agregando servicios o querés hacer cambios importantes en la web, no estás solo.</p>
                    <br />
                    <p>Te acompañamos con los ajustes, actualizaciones y mejoras necesarias para que tu sitio se adapte a esos cambios y siga siendo una herramienta efectiva de ventas. </p>
                </div>
            </div>
        </div>
    )
}
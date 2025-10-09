import style from "../styles/WebDevelopment.module.css"
import idea from "../images/icon-idea.png"
import medida from "../images/medida.jpg"
import phoneboy from "../images/phone-boy.jpg"
import calidad from "../images/calidad.png"
import chart from "../images/icon-chart.png"
import star from "../images/star.png"

export default function WebDevelopment() {
    return (
        <div>
            <div className={style.Banner}>
                <h1>Desarrollo Web</h1>
                <h2>Diseñamos páginas web que atraen huéspedes y aumentan tus reservas.</h2>
            </div>
            <div className={style.Solid_Code}>
                <h3>Una web sólida empieza con un desarrollo de calidad</h3>
                <h2>Código limpio y optimizado para SEO, velocidad y seguridad</h2>
                <p>No solo se trata de verse bien: el código debe ser sólido, eficiente y seguro. Por eso desarrollamos páginas que cargan rápido, están preparadas para posicionarse bien en Google y cuidan la privacidad y los datos de tus visitantes, para que puedas ofrecer confianza desde el primer clic.</p>
            </div>
            <div className={style.Caracteristicas}>
                <div className={style.Caracteristicas_Item}>
                    <img src={idea} />
                    <h4>Calidad</h4>
                </div>
                <div className={style.Caracteristicas_Item}>
                    <img src={idea} />
                    <h4>Estrategia</h4>
                </div>
                <div className={style.Caracteristicas_Item}>
                    <img src={idea} />
                    <h4>Velocidad</h4>
                </div>
                <div className={style.Caracteristicas_Item}>
                    <img src={idea} />
                    <h4>Confianza</h4>
                </div>
            </div>
            <div className={style.Medida}>
                <div className={style.Medida_Content}>
                    <h3>La imagen importa, pero la experiencia lo es todo</h3>
                    <h2>Mostrá lo mejor de tu hotel con una web hecha a medida</h2>
                    <p>Convertimos tu diseño en una web que no solo es fiel a la imagen que querés transmitir, sino que también es sencilla y rápida para que quien la visite navegue sin trabas ni confusiones. </p>
                    <br />
                    <p>Cada detalle se piensa para que la experiencia sea clara, fluida y amena, haciendo que tus huéspedes quieran quedarse y reservar.</p>
                    <br />
                    <p>Sabemos que tu alojamiento es único, con su propia esencia y forma de trabajar. Por eso diseñamos sitios web que se adaptan a vos, pensados para potenciar tu gestión desde el primer día.</p>
                </div>
                <img src={medida} />
            </div>
            <div className={style.Responsive}>
                <img src={phoneboy} />
                <div className={style.Responsive_Content}>
                    <h2>Mobile-first: primero pensamos en el celular, después en todo lo demás</h2>
                    <p>Sabemos que la mayoría de las búsquedas y reservas se hacen desde el celular, así que diseñamos y desarrollamos tu web pensando primero en esa pantalla pequeña.  </p>
                    <br />
                    <p>Así, tu página va a funcionar perfecta, rápida y sin errores en cualquier dispositivo móvil, que es lo que más usan tus futuros huéspedes.</p>
                </div>
            </div>
            <div className={style.Redesign}>
                <h2>Sitios web localizados para conectar con tu audiencia</h2>
                <div className={style.Redesign_Content}>
                    <p>Cada región tiene su forma de hablar y comunicarse, y sabemos lo importante que es conectar de manera auténtica. </p>
                    <p>Por eso adaptamos el contenido y el diseño para que hablen el mismo idioma cultural que tus visitantes, generando confianza y acercando a quienes realmente quieren alojarse en tu lugar.</p>
                </div>
            </div>
            <div className={style.Calidad}>
                <div className={style.Calidad_Content}>
                    <h3>Tu página web desarrollada por profesionales competentes y con experiencia.</h3>
                    <h2>Calidad garantizada desde el primer clic</h2>
                    <p>Contamos con un equipo de desarrolladores que combina conocimiento técnico, atención al detalle y compromiso con cada proyecto. </p>
                    <br />
                    <p>Nos aseguramos de que tu sitio no solo se vea bien, sino que funcione de forma fluida, segura y optimizada desde el inicio.</p>
                </div>
                <img src={calidad} />
            </div>
            <div className={style.Integracion}>
                <h2>Integración sencilla con sistemas de reservas</h2>
                <div className={style.Integracion_Content}>
                    <p>Mostrá tu disponibilidad en tiempo real, recibí reservas desde tu web y olvidate de actualizar calendarios manualmente.</p>
                    <p>Integramos el sistema de gestión que ya usás para que todo funcione de forma automática y sin errores.</p>
                    <p>¿Aún no usás un sistema de reservas? Te asesoramos de forma gratuita para ayudarte a elegir la mejor opción según tu alojamiento.</p>
                </div>
            </div>
            <div className={style.Canal}>
                <div className={style.Canal_Chart}>
                    <img src={chart} />
                    <h3>Con las reservas directas podés ahorrar hasta un 20% o más en comisiones que normalmente pagarías a plataformas como Booking o Expedia.</h3>
                </div>
                <div className={style.Canal_Content}>
                    <h2>Tu web como canal de ventas directo, sin comisiones</h2>
                    <p>El mayor ahorro y control lo conseguís cuando recibís reservas directas desde tu web. </p>
                    <br />
                    <p>Te ayudamos a armar un canal de ventas online eficiente y confiable, para que puedas manejar tus reservas sin pagar comisiones y con la libertad de ofrecer lo que quieras a tus huéspedes.</p>
                </div>
            </div>
            <div className={style.Magia}>
                <div className={style.Magia_Item}>
                    <img src={star} />
                    <h4>Enfoque comercial</h4>
                    <p>Aplicamos estrategias que impulsan la venta directa.</p>
                </div>
                <div className={style.Magia_Item}>
                    <img src={star} />
                    <h4>Soporte post-lanzamiento</h4>
                    <p>Ofrecemos soporte constante para resolver dudas, hacer mejoras y asegurarnos que todo funcione.</p>
                </div>
                <div className={style.Magia_Item}>
                    <img src={star} />
                    <h4>Sitio que trabaja las 24 horas</h4>
                    <p>Tu página está disponible todo el día y la noche para recibir consultas y reservas automáticamente.</p>
                </div>
                <div className={style.Magia_Item}>
                    <img src={star} />
                    <h4>Integración con WhatsApp</h4>
                    <p>Incluímos botones de contacto directo estratégicos para facilitar las consultas</p>
                </div>
            </div>
        </div>
    )
}
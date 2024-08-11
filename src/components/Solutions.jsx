import style from "../styles/Solutions.module.css"
import sur from "../images/sur.png"
import { Link } from "react-router-dom"
import alpine from "../images/alpine.jpg"

export default function Solutions() {
    return(
        <div className={style.Wrapper}>
            <img src={alpine} className={style.Img}/>
            <div>
                <h1 className={style.Title}>Websites Estáticas</h1>
                <div className={style.Card}>
                    <img src={sur} alt="Preview modelo SUR" className={style.ImgPreview}/>
                    <div className={style.ContentCard}>
                        <div className={style.WrapperCardTitle}>
                            <h2 className={style.NameDesign}>DISEÑO </h2> <h2 className={style.NameDesignColor}>SUR</h2>
                        </div>
                        <div className={style.Paragraph}>Diseño en gama de colores en blanco y negro, para que las fotos sean protagonistas y marquen la identidad del alojamiento.</div>
                        <Link to="/diseñosur" className={style.Link}><button className={style.Button}>Ver más</button></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
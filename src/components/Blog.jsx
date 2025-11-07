import blogs from "../assets/blogs"
import { useParams } from "react-router-dom";
import style from "../styles/Blog.module.css"
import { Link } from "react-router-dom";

export default function Blog() {

    const { url } = useParams();
    const item = blogs.find((d) => d.url.toString() === `/${url}`);

    if (!item) return <p>Contenido no encontrado</p>;

    // Accedemos al segundo bloque
    const secondBlock = item.content[1];

    // Calculamos la mitad (redondeando hacia abajo)
    const half = Math.floor(secondBlock.length / 2);

    // Dividimos el contenido
    const firstHalf = secondBlock.slice(0, half);
    const secondHalf = secondBlock.slice(half);


    return (
        <div className={style.Wrapper}>
            <Link to="/blog">
                <div className={style.Banner}>
                    <p>&lt;&lt; Volver a todos los posts</p>
                </div>
            </Link>
            <h1 className={style.Title}>{item.title}</h1>
            <div className={style.Dateline}>
                <div className={style.Tag}>{item.tag}</div>
                <p className={style.Author_And_Date}>- {item.date} - Escrito por {item.author} -</p>
            </div>
            <div className={style.Block_One}>
                <div className={style.Img_One}>
                    <img src={item.img[0]} />
                </div>


                <div className={style.Block_One_Paragraph}>
                    <p >{item.content[0][0]}</p>
                    <br />
                    <p>{item.content[0][1]}</p>
                    <br />
                    <p>{item.content[0][2]}</p>
                </div>
            </div>
            <div className={style.Block_Two}>
                <h2>{item.subtitle[0]}</h2>
                {firstHalf.map((p) => (
                    <div>
                        <p>{p}</p>
                        <br />
                    </div>

                ))}
                <img src={item.img[1]} />
                {secondHalf.map((p) => (
                    <div>
                        <p>{p}</p>
                        <br />
                    </div>
                ))}
            </div>
            <div className={style.Block_Three}>
                <div className={style.Block_Three_Content}>
                    <h2>{item.subtitle[1]}</h2>
                    {item.content[2].map((p) => (
                        <div>
                            <br />
                            <p>{p}</p>

                        </div>
                    ))}
                </div>
                <div className={style.Img_Three}>
                    <img src={item.img[2]} />
                </div>
            </div>
            <div className={style.Block_Four}>
                <h2>{item.subtitle[2]}</h2>
                {item.content[3].map((p) => (
                    <div>
                        <p>{p}</p>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    )
}
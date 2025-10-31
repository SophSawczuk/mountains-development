import style from "../styles/BlogBoard.module.css"
import blogs from "../assets/blogs"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function BlogBoard() {
    const [filteredBlogs, setFilteredBlogs] = useState(blogs)
    const [activeTag, setActiveTag] = useState("all"); // 👈 guardamos el tag activo

    const handleFilter = (tag) => {
        setActiveTag(tag); // 👈 actualizamos el tag activo
        if (tag === "all") {
            setFilteredBlogs(blogs);
        } else {
            const filtered = blogs.filter(b => b.tag === tag)
            setFilteredBlogs(filtered)
        }
    }
    return (
        <div className={style.Wrapper}>
            <div className={style.Banner}>
                <h1>Blog</h1>
                <h2>Publicaciones acerca de diseño web, tecnología y novedaes sobre la industria hotelera</h2>
            </div>
            <div className={style.Filters}>
                <button className={style.Filter_Btn} onClick={() => handleFilter("all")} style={{ backgroundColor: activeTag === "all" ? "#333" : "#586479" }}>Ver todo</button>
                <button className={style.Filter_Btn} onClick={() => handleFilter("Diseño Web")} style={{ backgroundColor: activeTag === "Diseño Web" ? "#333" : "#586479" }}>Diseño Web</button>
                <button className={style.Filter_Btn} onClick={() => handleFilter("Industria Hotelera")} style={{ backgroundColor: activeTag === "Industria Hotelera" ? "#333" : "#586479" }}>Industria Hotelera</button>
            </div>
            <div className={style.Cards}>
                {filteredBlogs.map((blog) => (
                    <Link to={`/blog${blog.url}`}  >
                        <div className={style.Card}>

                            <img src={blog.img[0]} />
                            <div className={style.Card_Content_Wrapper}>
                                <div className={style.Tag_Wrapper}>
                                    <div className={style.Tag}>{blog.tag}</div>
                                    <p>{blog.date}</p>
                                </div>
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                            </div>
                        </div>
                    </Link>
                )

                )}
            </div>
        </div>
    )
}
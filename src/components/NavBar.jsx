import style from "../styles/NavBar.module.css"
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from "react";
import Burguer from "./Burguer.jsx"
import { useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa6";

export default function () {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    const menuClosed = <AiOutlineMenu
        style={{ "color": "white", paddingRight: "5vw", "width": "1.5em", "height": "1.5em", marginTop: "3vh" }}
        onClick={() => setOpen(!open)}
    />
    const menuOpen =
        <div>
            <AiOutlineMenu
                style={{ "color": "white", paddingRight: "5vw", "width": "1.5em", "height": "1.5em", "alignSelf": "center", marginTop: "3vh" }}
                onClick={() => setOpen(!open)}
            />

        </div>
    function closeMenuWithLogo(e) {
        e.preventDefault()
        setOpen(false)
    }

    return (
        <div className={style.Wrapper}>
            <div className={style.Desktop}>
                <Link to="/"><FaCode className={style.IconNav} /><h2> Mountains Development</h2></Link>
                <ul className={style.List}>
                    <Link to="/"><li><b>Inicio</b></li></Link>
                    <Link to="/web-design"><b>Web Design</b></Link>
                    <Link to="/web-development"><b>Web Development</b></Link>
                    <Link to="/seo"><b>SEO</b></Link>
                    <Link to="/maintenance"><b>Mantenimiento</b></Link>
                    <Link to="/blog"><b>Blog</b></Link>
                    <Link to="/contact"><li><b>Contacto</b></li></Link>
                </ul>
            </div>
            <div className={style.Mobile}>
                <div className={style.ContainerMobile}>
                    <div className={style.LogosWrapper}>
                        <h2 onClick={(e) => { navigate("/"); closeMenuWithLogo(e) }} className={style.MoDe}>Mountains Development</h2>
                        {open ? menuOpen : menuClosed}
                    </div>
                    {open && <Burguer setOpen={setOpen} />}
                </div>

            </div>

        </div>
    )
}
import { useState } from "react"
import Swal from "sweetalert2"
import style from "../styles/Contact.module.css"
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Contact() {

    const [input, setInput] = useState({
        name: "",
        email: "",
        telephone: "",
        message: ""
    })

    const [errors, setErrors] = useState({})
    const [errorMessage, setErrorMessage] = useState({})
    
    const navigate = useNavigate()

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setErrors(validate(input));  // Re-validar en el submit
        const formErrors = validate(input);

        /* if(errors.name === "Se requiere un nombre" || errors.name === "El nombre debe tener al menos 4 caracteres" || errors.email === "Se requiere un email" || errors.email === "Ingrese un email válido" || errors.message === "Ingrese un mensaje con más de 50 caracteres") {
            setErrorMessage(true)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Faltan completar campos',
            }) 
           
        } else if(input.name === "" && input.email === "" && input.telephone === "" && input.message === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Faltan completar campos',
            }) 
        } */
       if (Object.keys(formErrors).length > 0) {
        setErrorMessage(true);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Faltan completar campos',
            });
       }
        else{
            emailjs.sendForm('service_7zvshge', 'template_h6e4l0o', e.target, 'Rc4HvkwJmlJbyGBKL' )
                .then(response => console.log(response))
                .catch(error => console.log(error))

            Swal.fire({
                icon: 'success',
                title: 'Mensaje enviado',
                text: 'Nos comunicaremos en la brevedad',
            })
            fbq('track', 'Lead', {
                content_name: 'Formulario de Contacto', // Cambia esto si es necesario
                name: input.name,
                email: input.email

            });
            setInput({
                name: "",
                email: "",
                telephone: "",
                message: ""
            })
            
        }
    }

    function validate(input) {
        let errors = []

        if(!input.name) {
            errors.name = "Se requiere un nombre"
        } else if(input.name.length < 4) {
            errors.name = "El nombre debe tener al menos 4 caracteres"
        }

        if(!input.email) {
            errors.email = "Se requiere un email"
        } else if (!input.email.includes("@")) {
            errors.email = "Ingrese un email válido"
        }

        if(!input.telephone) {
            errors.telephone = "Se requiere un número de teléfono"
        } else if (!validarTelefonoArgentina(input.telephone)) {
            errors.telephone = "Número de teléfono no válido";
        }

        if(input.message.length < 5) {
            errors.message = "Ingrese un mensaje con más de 5 caracteres"
        } 

        return errors
    }


    function validarTelefonoArgentina(numero) {
        const regex = /^\+?54?[\s-]?\(?(\d{2,4})\)?[\s-]?(\d{6,8})$/;
        return regex.test(numero);
    }
   

    return(
        <div>
            <h3 className={style.Title}>Contacto</h3>
            <div className={style.WrapperContact}>
                <form onSubmit={e => handleSubmit(e)} className={style.ContactContainer}>
                    <div className={style.Input}>
                        <span>Nombre y apellido</span>                       
                            <input type="text" id="name" name="name" value={input.name} placeholder="Juan Perez..." onChange={e => handleChange(e)}/>
                            {errorMessage === true && (
                                <p className={style.Errors}>{errors.name}</p>
                            )
                           }                        
                    </div>
                    <div className={style.Input}>
                        <span>Correo electrónico</span>                        
                            <input type="email" id="email" name="email"  value={input.email} placeholder="juanperez@gmail.com..." onChange={(e) => handleChange(e)}/>
                            {errorMessage === true && errors.email && (
                                <p className={style.Errors}>{errors.email}</p>
                            )}         
                    </div>
                    <div className={style.Input}>
                        <span>Número de teléfono. Ejemplo: +54(223)123-4567</span>                        
                            <input type="tel" id="telephone" name="telephone"  value={input.telephone} placeholder="+54(223)123-4567" onChange={(e) => handleChange(e)}/>
                            {errorMessage === true && errors.telephone && (
                                <p className={style.Errors}>{errors.telephone}</p>
                            )}         
                    </div>
                    <div className={style.Input}>
                        <span>Rango horario</span>     
                            <textarea type="text" id="message" name="message" value={input.message} placeholder="Escribe aquí tu rango horario preferido para recibir llamadas..." onChange={(e) => handleChange(e)} className={style.MessageInput}/>
                            {errorMessage === true && errors.message && (
                                <p className={style.Errors}>{errors.message}</p>
                            )}      
                    </div>
                    <button type="submit" className={style.SubmitButton}>Enviar</button>
                </form>
                
                <div className={style.WrapperContactInfo}>
                    <div className={style.WrapperIcons}>
                        <div className={style.Block}><Link to= "https://wa.me/5492235047367">
                            <FaWhatsapp className={style.Icon}/>
                            <p>+54 (223) 504-7367</p>
                            </Link>
                        </div>
                        <div className={style.Block}> <Link to= "https://www.instagram.com/soph_development?igsh=a21xd3p4YmNjaTV2">
                            <FaInstagram className={style.Icon}/>
                            <p>soph_development</p>
                            </Link>
                        </div>
            
                    </div>
                    <p className={style.Reminder}>¡Dejanos tus datos y nos comunicaremos a la brevedad!</p>
                </div>
            </div>
            
            
        </div>
    )

}
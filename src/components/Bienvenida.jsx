import { IconButton } from "@material-tailwind/react";
import imglogo from "../assets/logo2.png"
const clickWhatsapp = ()=> {
    window.open("https://wa.link/c37dvd", "_blank");
}
function Bienvenida(){
    return (
        <div className=" h-full flex flex-col justify-center items-center">
            <div className=" h-14"></div>
            <div className=" max-h-20 bg-black h-1/6 flex justify-center items-center w-11/12 bg-opacity-20 rounded-t-lg">
                <div className=" w-3/4 justify-end flex">
                    <h2 className="h-1/2 text-2xl not-italic tittle">Cámaras M y M</h2>
                </div>
                <div className="w-1/2 flex justify-end">
                    <img src={imglogo}></img>
                </div>
            </div>
            <div className=" h-3/4 flex justify-center">
                <div className="h-3/4 w-11/12 p-5 rounded-b-lg bg-indigo-600 bg-opacity-70 flex flex-col items-center justify-center">
                    Bienvenido a Cámaras M Y M. <br></br> <br></br>
                    Nos especializamos en ofrecer soluciones integrales de seguridad mediante la instalación profesional, asesoramiento personalizado y mantenimiento de sistemas de cámaras de seguridad para hogares, negocios y comunidades.
                    Con años de experiencia y tecnología avanzada garantizamos la tranquilidad de nuestros clientes a precios competitivos. Nuestro compromiso es brindar atención personalizada y soporte técnico continuo para fortalecer la seguridad de lo que más valoran. ¡Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos proteger tu hogar o negocio! <br></br>
                    <div className=" mt-2 w-full justify-start ">
                        <IconButton onClick={clickWhatsapp} className="rounded bg-[#00bb2d] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                            <i className="fa-brands fa-whatsapp text-lg"></i>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Bienvenida }
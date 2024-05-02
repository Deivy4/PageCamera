import { FormContact } from "./FormContact";
import { IconButton } from "@material-tailwind/react";

function PageOne (){
    return (
        <div className="wrapper">
            <section className="wrapper-principal">
                <div className="lg:flex-row flex-col flex text-white">
                    <div className="flex items-start justify-center">
                        <div className="min-w-96 flex-initial w-3/4 flex flex-col justify-center items-center">
                            <h2 className=" -mt-8 mb-12 text-2xl not-italic tittle">Cámaras M y M</h2>
                            <div className="flex-1 h-70 w-11/12 p-5 rounded-lg bg-indigo-600 bg-opacity-70 flex flex-col items-center justify-center">
                                Bienvenido a Cámaras M Y M. <br></br> <br></br>
                                Nos especializamos en ofrecer soluciones integrales de seguridad mediante la instalación profesional, asesoramiento personalizado y mantenimiento de sistemas de cámaras de seguridad para hogares, negocios y comunidades.
                                Con años de experiencia y tecnología avanzada garantizamos la tranquilidad de nuestros clientes a precios competitivos. Nuestro compromiso es brindar atención personalizada y soporte técnico continuo para fortalecer la seguridad de lo que más valoran. ¡Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos proteger tu hogar o negocio! <br></br>
                                <div className=" mt-2 w-full justify-start ">
                                    <IconButton className="rounded bg-[#00bb2d] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                                        <i class="fa-brands fa-whatsapp text-lg"></i>
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= "w-1/2 flex justify-center items-center">
                        <FormContact/>
                    </div>
                </div>
            </section>
        </div>
        
    )
}
export { PageOne };
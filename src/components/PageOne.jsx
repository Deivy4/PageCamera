import { FormContact } from "./FormContact";
import { Bienvenida } from "./Bienvenida";

function PageOne (){
    return (
        <div className="w-screen">
            <section className=" h-fit bg-cover bg-image-background-wrapper">
                <div className="lg:flex-row flex-col flex text-white">
                    <div className="min-w-96 h-screen basis-3/5 flex items-center justify-center">
                        <Bienvenida/>
                    </div>
                    <div className= " lg:-mt-5 mt-5 min-w-96 basis-2/5 flex justify-center items-center">
                        <FormContact/>
                    </div>
                </div>
            </section>
        </div>
        
    )
}
export { PageOne };
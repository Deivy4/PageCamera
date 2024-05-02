import { Button, Input, Textarea } from "@material-tailwind/react";


function FormContact () {
    return <form className="min-w-96 w-2/4 bg-indigo-600 bg-opacity-70 flex flex-col items-center">
        <h2 className="mt-2">Contáctanos</h2>
         <div className="w-11/12 mt-2">
            <Input
                type="text"
                placeholder="Nombre"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                className: "hidden",
                }}
                containerProps={{ className: "min-w-48" }}
                />
         </div>
         <div className="w-11/12 mt-2">
            <Input
                type="text"
                placeholder="Teléfono"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                className: "hidden",
                }}
                containerProps={{ className: "min-w-48" }}
                />
         </div>
         <div className="w-11/12 mt-2">
            <Input
                type="text"
                placeholder="Correo"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                className: "hidden",
                }}
                containerProps={{ className: "min-w-48" }}
                />
         </div>
         <div className="div-text-area w-11/12 mt-6">
            <Textarea
            className="text-white-area"
             color="gray" rows={8} size="lg" label="Información adicional"
            />
         </div>
         <Button onClick={enviarInformacion} className="mt-8">Enviar información</Button> 
    </form>
}
function enviarInformacion (){
    console.log("clicket")
}
export { FormContact }
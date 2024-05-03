import { Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
function FormContact () {
    let [dataClient, setDataClient] = useState({
        nombre : "",
        telefono : "",
        correo : "",
        informacionAdicional : ""
    })
    const handleChange = (evt) => {
        const { target } = evt;
        const { name, value } = target;
        let newValue = {
            ...dataClient,
            [name] : value
        }
        setDataClient(newValue) 
    } 
    const enviarInformacion = async () =>{
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        let urlencoded = new URLSearchParams();
        urlencoded.append("token","1urcy84gs5j6iwkm");
        urlencoded.append("to","+5792616541358");
        let textMessage = `Nombre del cliente: ${dataClient.nombre} \n \n`
                        + `Correo eletrónico del cliente: ${dataClient.correo} \n \n`
                        + `Teléfono del cliente: ${dataClient.telefono} \n \n`
                        + `Información adicional: ${dataClient.informacionAdicional}`

        urlencoded.append("body", textMessage);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://api.ultramsg.com/instance84821/messages/chat", requestOptions)
        setDataClient({
            nombre : "",
            telefono : "",
            correo : "",
            informacionAdicional : ""
        })
    }
    return <form className="min-w-96 rounded-lg w-2/4 bg-indigo-600 bg-opacity-70 flex flex-col items-center">
        <h2 className="mt-2">Contáctanos</h2>
         <div className="w-11/12 mt-2">
            <Input
                value={dataClient.nombre}
                onChange={handleChange}
                type="text"
                name="nombre"
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
                value={dataClient.telefono}
                onChange={handleChange}
                type="text"
                name="telefono"
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
                value={dataClient.correo}
                onChange={handleChange}
                type="text"
                name="correo"
                placeholder="Correo"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                className: "hidden",
                }}
                containerProps={{ className: "min-w-48" }}
                />
         </div>
         <div className="w-11/12 mt-6">
            <Textarea
                value={dataClient.informacionAdicional}
                onChange={handleChange}
                name="informacionAdicional"
                className="text-white placeholder-white" 
                rows={8} size="lg"
            />
         </div>
         <p>Servicio solo para Mendoza, Argentina</p>
         <Button className="mt-4 mb-4" onClick={enviarInformacion.bind(this)} >Enviar información</Button> 
    </form>
}
export { FormContact }
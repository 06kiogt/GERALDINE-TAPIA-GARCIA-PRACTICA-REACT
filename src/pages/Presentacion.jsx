import Datos from '../components/Datos/Datos'
import Title from '../components/Title/Title'
import './Presentacion.css'


function Presentacion (){
    return (
        <div className='main'>

            <Title 
            
            title="Universidad Politécnica de Atlacomulco"
            />

            <Datos 
            
            texto= "Ingeniería en Tecnologías de la Información y Comunicación"
         
            />

            <Datos
            
            texto="Programación web "

            />
            <Datos
            
            texto="Unidad 3. Programación del lado del cliente (JavaScript - React)"

            />
            <Datos 
            
            texto="Tema: Implementación de frameworks"

            />
            <Datos 
            
            texto="Jesús Abdiel García Crescencio (2431102073)"
            />
           
            <Datos 
            
            className='fecha'
            texto="Atlacomulco, México.  21 de febrero del 2026"
            />

        </div>
    )
}

export default Presentacion
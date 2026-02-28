import Card from "../components/Card/Card";
import Title from "../components/Title/Title";

import './Home.css' 

function Home(){
    return(
        <div className="contenido" style={{padding: "40px", border: "1px solid #ccc"}}>
          <Title

          title = "Titulo de la Pagina "
          />
        
         <Card 
         title="Nombre Completo"
        description="Esta es la descrpcion "
        />

         <Card
          title="Nombre Completo 2"
          description="Esta es la descrpcion 2"
    
         />
        </div>
    )
}

export default Home
 
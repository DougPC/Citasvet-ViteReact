
import Header from "./components/header"
import Formulario from "./components/Formulario"
import ListadoPascientes from "./components/ListadoPascientes"

function App() {
 

  return (

    <div className ="container mx-auto mt-20 ml-6" >
          <Header/>
          <div className="mt-12 md:flex">
          <Formulario/>
          <ListadoPascientes/>
          </div>
          
    </div>
  )
}

export default App

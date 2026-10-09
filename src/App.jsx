import Item from './componentes/Productos/Item/Item'
import ItemListContainer from './componentes/Productos/ItemListContainer/ItemListContainer' 
import Layout from './componentes/Layout/Layout'
import './App.css'
import FormularioContainer from './componentes/FormularioContainer/FormularioContainer'

function App() {
  return (
    <>
      <Layout>
        <section className="bienvenida">
          <p className="etiqueta">
            
          </p>
          <h2>

          </h2>
          <p>

          </p>
        </section>
        <ItemListContainer />
        <FormularioContainer/>
      </Layout>
    </>
  )
}

export default App

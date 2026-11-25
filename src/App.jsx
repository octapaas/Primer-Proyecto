import Item from './componentes/Productos/Item/Item'
import ItemListContainer from './componentes/Productos/ItemListContainer/ItemListContainer'
import Layout from './componentes/Layout/Layout'
import './App.css'
import EquipoContainer from './componentes/Equipo/EquipoContainer/EquipoContainer'
import FormularioContainer from './componentes/FormularioContainer/FormularioContainer'
import { Route, Routes } from 'react-router-dom'
import ItemDescripcion from './componentes/Productos/ItemDescripcion/ItemDescripcion'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/tienda" element={<ItemListContainer />} />

          <Route path="/contacto" element={<EquipoContainer />} />

          <Route path="/nuevo" element={<FormularioContainer />} />

          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />

          <Route path="/tienda/:id" element={<ItemDescripcion />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

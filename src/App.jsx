import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './components/home/HomeScreen'
import PokedexScreen from './components/pokedex/PokedexScreen'
import PokeInfoScreen from './components/pokemonInfo/PokeInfoScreen'
import Error404 from './components/error404/Error404'
import ProtectedRoutes from './components/error404/ProtectedRoutes'

function App() {

  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen setLogged={setLogged}/>} />
        <Route element={<ProtectedRoutes isLogged={logged} />}>
          <Route path='/pokedex' element={<PokedexScreen />} />
          <Route path='/pokedex/:id' element={<PokeInfoScreen />} />
          <Route path='/*' element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

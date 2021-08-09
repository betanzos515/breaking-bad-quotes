import { useState, useEffect } from 'react';
import './App.css';
import { Frase } from './components/Frase';
import { Boton, Contenedor } from './syles/StylesApp';

function App() {

  const [frase, guardarFrase] = useState({})
  
  const consultarAPI = async ()=>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const respuesta = await api.json();
    guardarFrase(respuesta[0]);
  }

  useEffect(() => {
    consultarAPI();
  },[])

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={ consultarAPI }
      >Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;

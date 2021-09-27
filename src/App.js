import React,{Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
function App() {
     //Definiendo el state
     const [cantidad, guardarCantidad]=useState(0);
     const [plazo, guardarPlazo]=useState("");
     
    return ( 
    <Fragment>
        <Header
        titulo = "cotizador Prestamos"
        />
        <div className= "container">
            <Formulario
            cantidad = {cantidad}
            guardarCantidad = {guardarCantidad}
            plazo = {plazo}
            guardarPlazo = {guardarPlazo}
            />
        </div>
    </Fragment>
    );
}

export default App;
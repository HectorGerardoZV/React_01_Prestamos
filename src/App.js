import React,{Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
function App() {
     //Definiendo el state
     const [cantidad, guardarCantidad]=useState(0);
     const [plazo, guardarPlazo]=useState("");
     const [total, guardaTotal]=useState(0);

     let componente;
     if(total===0){
        componente = <Mensaje/>
     }else{
        componente = <Resultado/>
     }
     
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
            total = {total}
            guardaTotal={guardaTotal}
            />
            <div className = "mensajes"> 
                {componente}
            </div>
        </div>
    </Fragment>
    );
}

export default App;
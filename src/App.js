import React,{Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spiner from'./components/Spiner';
function App() {
     //Definiendo el state
     const [cantidad, guardarCantidad]=useState(0);
     const [plazo, guardarPlazo]=useState("");
     const [total, guardaTotal]=useState(0);
     const [cargando, guardaCargando]=useState(false);

     let componente;
     if(cargando){
        componente = <Spiner/>
     }
     else if(total===0){
        componente = <Mensaje/>
     }else{
        componente = 
        <Resultado
        total = {total}
        plazo = {plazo}
        cantidad={cantidad}
        />
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
            guardaCargando= {guardaCargando}
            />
            <div className = "mensajes"> 
                {componente}
            </div>
        </div>
    </Fragment>
    );
}

export default App;
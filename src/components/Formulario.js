import React, {Fragment,useState}  from 'react';
import {calcularTotal} from "../Helpers";

const Formulario = (props) => {
    const {cantidad, guardarCantidad, plazo, guardarPlazo, total, guardaTotal,guardaCargando} = props;
    const leerCantidad =(e)=>{
        guardarCantidad(parseInt(e.target.value));
    }
    const seleccionaPlazo =(e)=>{
        guardarPlazo(parseInt(e.target.value));
    }
    const  [error, cambiaError] = useState(false);

    const calcularPrestamo=e=>{
            e.preventDefault();
            //Validar
            if(cantidad===0 || plazo==="" || isNaN(cantidad) ){
              cambiaError(true);
              return;
            }
            cambiaError(false);
            //Spiner on
            guardaCargando(true);
            setTimeout(() => {
                 //Cotización
            const total = calcularTotal(cantidad, plazo);
            guardaTotal(total);
            //Spiner off
            guardaCargando(false);
            }, 2000);
           
        }
    return ( 
       <Fragment>
       <form onSubmit={calcularPrestamo}>
           
           <div className= "row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000" 
                        onChange ={leerCantidad}
                    />
                </div>
                <div>
                  <label>Plazo para Pagar</label>
                  <select className="u-full-width"
                    onChange ={seleccionaPlazo}
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>

           </div>
       </form>
       {(error)?<p className="error">Todos los campos son obligatorios</p>: "" }
       
       </Fragment>
     );
}
 
export default Formulario;


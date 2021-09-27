import React, {Fragment,useState}  from 'react';

const Formulario = ({cantidad, guardarCantidad, plazo, guardarPlazo}) => {
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
            //Cotización
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


import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ 
  gastos, 
  setGastoEditar, 
  eliinandoGasto,
  filtro,
  gastosFiltrados
}) => {
  
  return (
    <div className='listado-gastos contenedor'>

      {filtro ? (
          <>
            <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay Gastos en esta categoría'}</h2>
            {gastosFiltrados.map( gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliinandoGasto={eliinandoGasto}
                />
              ))}
          </>
        ) : (
          <>
            <h2>{gastos.length ? 'Gastos' : 'No hay Gastos en esta categoría'}</h2>
            {gastos.map( gasto => (
                  <Gasto
                      key={gasto.id}
                      gasto={gasto}
                      setGastoEditar={setGastoEditar}
                      eliinandoGasto={eliinandoGasto}
                  />
              ))}
          </>
        )
      }
    </div>
  )
}

export default ListadoGastos

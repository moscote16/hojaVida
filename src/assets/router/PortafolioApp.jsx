import React from 'react'
import cap from '../img/cap.png'

export const PortafolioApp = () => {
  const portafolio={
    nombre:'proyecto de react',
    descripciom:'este trabajo se hizo en react se hizo un APP de Noticias'
  }

  return (
    <> 
    <div className='container'>
    <h3>{ portafolio.nombre }  </h3>
      <div className='col-md-3 '>
      <img src={cap} alt="" width='300px' height='400px' />
      </div>
      <h4>{portafolio.descripciom}</h4>
    </div>
    </>
  )
}

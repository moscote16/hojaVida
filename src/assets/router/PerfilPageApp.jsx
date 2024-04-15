import React from 'react'
import img1 from '../img/img1.png'

export const PerfilPageApp = () => {
  const perfil={
    nombre:'Jhonatan David Alfonso Moscote',
    edad:'23 años',
    direccion:'pamplona',
    telefono:'3025555574',
    correo:'jhonatanalfonso71@gmail.com'

  }
  return (
    <>
    <div className='container'>
    <h3>{ perfil.nombre} </h3>
      <div className='col-md-3 '>
      <img src={img1} alt="" width='300px' height='300px' />
      </div>
      <h4 className='card-text'><strong>Teléfono:</strong> { perfil.telefono }</h4>
      <h4 className='card-text'><strong>Edad:</strong> { perfil.edad }</h4>
      <h4 className='card-text'><strong>Dirección:</strong> { perfil.direccion }</h4>
      <h4 className='card-text'><strong>correo:</strong> { perfil.correo }</h4>
    </div>

    </>
  )
}

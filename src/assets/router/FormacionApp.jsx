import React from 'react'

export const FormacionApp = () => {
  const formacion={
    primaria: 'Primaria: santa lucia',
    secundaria: 'Secundaria: simiti(bolivar)',
    iser: 'formacion superior: pamplona'

  }
  return (
    <>
    <div style={{ textAlign: 'center' }}>
      <h2>Formación</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ fontSize: '18px', marginBottom: '10px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>{formacion.primaria}</li>
        <li style={{ fontSize: '18px', marginBottom: '10px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>{formacion.secundaria}</li>
        <li style={{ fontSize: '18px', marginBottom: '10px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>{formacion.iser}</li>
      </ul>
    </div>
    </>
  )
  

}

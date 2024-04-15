import React from 'react'


export const ContactoApp = () => {
  const contacto={
    telefono: 'Telefono: 3025555574',
    email:'Email: jhonatanalfonso71@gmail.com',
    direccion: 'Direccion: pamplona'
  }
  return (
    <>
     <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">{contacto.telefono}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h4 className="card-title">{contacto.email}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h4 className="card-title">{contacto.direccion}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

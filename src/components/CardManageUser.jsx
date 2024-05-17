import React from 'react'

export const CardManageUser = ({ user }) => {
    return (
        <div className='row'>
            <div className="col-10 card-user ">
                <div className="card-body  d-flex flex-row align-items-center">
                    <h4 className="col card-title mx-1">{user.id}</h4>
                    <p className="col card-text mx-1">{user.name_user}</p>
                    <p className="col card-text mx-1">{user.email}</p>
                    <p className="col card-text mx-1">{user.isActive ? 'Activo' : 'Inactivo'}</p>
                    <p className="col card-text mx-1">{user.id_role ? 'Administrador' : 'Invitado'}</p>
                </div>
            </div>
            <div className='col-2 d-flex align-items-center'>
                <a href="#" className="btn btn-warning mx-1">Edit</a>
                <a href="#" className="btn btn-danger">Delete</a>
            </div>
        </div >
    )
}

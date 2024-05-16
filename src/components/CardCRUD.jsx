import React from 'react'

export const CardCRUD = ({ product }) => {
    return (
        <div>
            <div className="card">
                {/* <img src='../public/img/acc.jpg' className="card-img-top img-thumbnail" alt="..."/> */}
                <div className="card-body">
                    <h4 className="card-title">{product.id}</h4>
                    <p className="card-text">{product.name}</p>
                    <p className="card-text">{product.email}</p>
                    <a href="#" className="btn btn-primary mx-3">Delete</a>
                    <a href="#" className="btn btn-primary mx-3">Edit</a>
                </div>
            </div>
        </div >
    )
}

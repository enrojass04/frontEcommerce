import React from 'react'

export const CardManageProduct = ({ product }) => {
    return (
        <div className='row'>
            <div className="col-10 card-product ">
                <div className="card-body  d-flex flex-row align-items-center">
                    <h4 className="col card-title mx-1">{product.id}</h4>
                    <p className="col card-text mx-1">{product.name_product}</p>
                    <p className="col card-text mx-1">{product.price_product}</p>
                    <p className="col card-text mx-1">{product.quantity_product}</p>
                    <p className="col card-text mx-1">{product.isActive}</p>
                </div>
            </div>
            <div className='col-2 d-flex align-items-center'>
                <a href="#" className="btn btn-primary">Delete</a>
                <a href="#" className="btn btn-primary mx-1">Edit</a>
            </div>
        </div >
    )
}

import React from 'react'

export const CardManageCategory = ({ category }) => {
    return (
        <div className='row'>
            <div className="col-10 card-category ">
                <div className="card-body  d-flex flex-row align-items-center">
                    <h4 className="col card-title mx-1">{category.id}</h4>
                    <p className="col card-text mx-1">{category.name_category}</p>
                </div>
            </div>
            <div className='col-2 d-flex align-items-center'>
                <a href="#" className="btn btn-warning mx-1">Edit</a>
                <a href="#" className="btn btn-danger">Delete</a>
            </div>
        </div >
    )
}
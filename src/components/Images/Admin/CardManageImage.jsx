import React from 'react';

export const CardManageImage = ({ image }) => {
    return (
        <div className='row'>
            <div className="col-10 card-image ">
                <div className="card-body  d-flex flex-row align-items-center">
                    <img src={image.url_image} alt="thumbnail" className="img-thumbnail mx-1" style={{ width: '100px', height: '100px' }} />
                    <h4 className="col card-title mx-1">{image.id}</h4>
                    <p className="col card-text mx-1">{image.id_product}</p>
                </div>
            </div>
            <div className='col-2 d-flex align-items-center'>
                <a href="#" className="btn btn-warning mx-1">Edit</a>
                <a href="#" className="btn btn-danger">Delete</a>
            </div>
        </div >
    );
};

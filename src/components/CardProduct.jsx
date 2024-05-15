import React from 'react'

const CardProduct = ({ product }) => {
    return (
        <div>
            {/* <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{product.name_product}</h5>
                        <p className="card-text">Description: {product.description}</p>
                        <p className="card-text">Price: ${product.price_product}</p>
                    </div>
                </div>
            </div> */}

            <div className="card">
                <img src='../public/img/acc.jpg' className="card-img-top img-thumbnail" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">{product.name_product}</h4>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">{product.price_product}</p>
                        <a href="#" className="btn btn-primary">Ver más</a>
                    </div>
            </div>
        </div>

    )
}

export default CardProduct
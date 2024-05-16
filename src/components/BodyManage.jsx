import React from 'react'
import { CardCRUD } from './CardCRUD'

function BodyManage() {

    const products = [
        {
            "id": 1,
            "name": "Admin",
            "email": "admin@example",
        },
        {
            "id": 3,
            "name": "Admin",
            "email": "admin@example",
        },
        {
            "id": 2,
            "name": "Admin",
            "email": "admin@example",
        }
    ]
    return (
        <div>
            <div className="row">
                <div className="col-3 d-flex flex-column">
                    <span>
                        Product
                    </span>
                    <span>
                        User
                    </span>
                    <span>
                        Category
                    </span>
                </div>
                <div className="col-9">
                    <button className='btn btn-primary d-flex my-3 mx-3'>Add User</button>
                    <div className="container">
                        <div className="d-flex flex-column mt-3">
                            {products?.map(product => (
                                <div key={product.id} sm={12} md={6} lg={4} className="col-4 mb-4">
                                    <CardCRUD key={product.id} product={product} />
                                </div>
                            ))}
                        </div>
                        {/* {products?.map(product => (
            <CardProduct key={product.id} product={product} />
        ))} */}
                    </div>

                </div>
            </div>


        </div>
    )
}

export default BodyManage
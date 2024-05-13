import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div>
        <Link to='/login' >
          <p>
            Login
          </p>
        </Link>
        <div>
          <Link to='/carrito' >
            <p>
              Carrito
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

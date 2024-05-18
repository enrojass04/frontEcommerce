import React from 'react'

const ButtonAdd = ({onClick}) => {
  return (
    <div className="d-flex justify-content-end">
        <button onClick={onClick} className="btn btn-success me-5 mb-3">Add New</button>
    </div>
  )
}

export default ButtonAdd
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const ButtonAdd = ({onClick}) => {
  return (
    <div>
        <FaPlus onClick={onClick} className='icon-add '/> 
    </div>
  )
}

export default ButtonAdd
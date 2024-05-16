import React, { useState, useEffect } from 'react'
import * as categoryService from '../services/CategoryService'
import { CardManageCategory } from './CardManageCategory';

const ListManageCategory = () => {
  const [categories, setCategories]= useState([]);

  const getCategory=async ()=>{
    const data= await categoryService.getCategoriesService();
    setCategories(data.categories)
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      <div className="d-flex flex-column mt-3">
        {categories?.map((category) => (
          <div key={category.id} className="mb-4">
            <CardManageCategory key={category.id} category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListManageCategory
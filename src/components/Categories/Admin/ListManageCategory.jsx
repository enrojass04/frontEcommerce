import React, { useEffect, useState } from "react";
import { CardManageCategory } from "./CardManageCategory";
import * as categoryService from "../../../services/CategoryService";
import ButtonAdd from "../../ButtonAdd";

const ListManageCategory = () => {

  const [categories, setCategories] = useState([]);

  const getcategories = async () => {
    const data = await categoryService.getCategoriesService();
    setCategories(data.categories);
  };

  useEffect(() => {
    getcategories();
  }, []);

return (
  <div>
    <ButtonAdd/>
    <h1>Categorías</h1>
    <div className="d-flex flex-column mt-5">
      {categories?.map((category) => (
        <div key={category.id} className="mb-4">
          <CardManageCategory key={category.id} category={category} />
        </div>
      ))}
    </div>
  </div>
);
};

export default ListManageCategory
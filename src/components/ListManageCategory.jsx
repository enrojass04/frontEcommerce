import React, { useEffect, useState } from "react";
import { CardManageCategory } from "./CardManageCategory";
import * as categoryService from "../services/CategoryService";

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
    <div className="d-flex flex-column mt-3">
      {categories?.map((user) => (
        <div key={user.id} className="mb-4">
          <CardManageCategory key={user.id} user={user} />
        </div>
      ))}
    </div>
  </div>
);
};

export default ListManageCategory
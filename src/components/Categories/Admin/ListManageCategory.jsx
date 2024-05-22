import React, { useEffect, useState } from "react";
import { CardManageCategory } from "./CardManageCategory";
import * as categoryService from "../../../services/CategoryService";
import ButtonAdd from "../../ButtonAdd";
import ModalSave from "./ModalSave";
import ModalUpdate from "./ModalUpdate";
import ModalDelete from "./ModalDelete";

const ListManageCategory = () => {
  const [categories, setCategories] = useState([]);
  const [showSave, setShowSave] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const getCategories = async () => {
    const data = await categoryService.getCategoriesService();
    setCategories(data.categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleSaveNewCategory = () => {
    getCategories();
  };

  const handleUpdateCategory = () => {
    getCategories();
    setSelectedCategory(null);
    setShowUpdate(false);
  };

  const handleDeleteCategory = async (categoryId) => {
    await categoryService.deleteCategory(categoryId);
    getCategories();
    setSelectedCategory(null);
    setShowDelete(false);
  };

  const handleOpenUpdate = (category) => {
    setSelectedCategory(category);
    setShowUpdate(true);
  };

  const handleCloseUpdate = () => {
    setSelectedCategory(null);
    setShowUpdate(false);
  };

  const handleOpenDelete = (category) => {
    setSelectedCategory(category);
    setShowDelete(true);
  };

  const handleCloseDelete = () => {
    setSelectedCategory(null);
    setShowDelete(false);
  };

  return (
    <div>
      <ButtonAdd onClick={() => setShowSave(true)} />
      <ModalSave
        showSave={showSave}
        handleCloseSave={() => setShowSave(false)}
        onSave={handleSaveNewCategory}
      />
      <ModalUpdate
        showUpdate={showUpdate}
        handleCloseUpdate={handleCloseUpdate}
        category={selectedCategory}
        onUpdate={handleUpdateCategory}
      />
      <ModalDelete
        showDelete={showDelete}
        handleCloseDelete={handleCloseDelete}
        category={selectedCategory}
        onDelete={handleDeleteCategory}
      />
      <h1>Categorías</h1>
      <div className="d-flex flex-column mt-5">
        {categories?.map((category) => (
          <div key={category.id} className="mb-4">
            <CardManageCategory
              key={category.id}
              category={category}
              onEdit={() => handleOpenUpdate(category)}
              onDelete={() => handleOpenDelete(category)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListManageCategory;


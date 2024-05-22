import React, { useEffect, useState } from "react";
import { CardManageUser } from "./CardManageUser";
import * as userService from "../../../services/UserService";
import ButtonAdd from "../../ButtonAdd";
import ModalSave from "./ModalSave";
import ModalUpdate from "./ModalUpdate";
import ModalDelete from "./ModalDelete";

const ListManageUser = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [showSave, setShowSave] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const getUsers = async () => {
    const data = await userService.getUsersService();
    setUsers(data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSaveNewUser = () => {
    getUsers();
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );
    setUsers(updatedUsers);
    showTemporaryMessage("¡Producto actualizado correctamente!");
  };

  const handleDeleteUser = async (userId) => {
    await userService.deleteUser(userId);
    getUsers();
    showTemporaryMessage("Usuario eliminado correctamente!");
  };

  const showTemporaryMessage = (message) => {
    setSuccessMessage(message);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setShowDelete(true);
  };

  const handleCloseUpdate = () => {
    setSelectedUser(null);
  };

  const handleCloseDelete = () => {
    setShowDelete(false);
    setSelectedUser(null);
  };

  return (
    <div className="container-fluid mt-10">
      <ButtonAdd onClick={() => setShowSave(true)} />
      <ModalSave
        showSave={showSave}
        handleCloseSave={() => setShowSave(false)}
        onSave={handleSaveNewUser}
      />
      <ModalDelete
        showDelete={showDelete}
        handleCloseDelete={handleCloseDelete}
        user={selectedUser}
        onDelete={handleDeleteUser}
      />
      <ModalUpdate
        showUpdate={selectedUser !== null && !showDelete}
        handleCloseUpdate={handleCloseUpdate}
        user={selectedUser}
        onUpdate={handleUpdateUser}
      />
      <h1>Usuarios</h1>
      <div className="d-flex flex-column mt-5">
        {users?.map((user) => (
          <div key={user.id} className="mb-4">
            <CardManageUser
              onEditClick={() => handleEditClick(user)}
              onDeleteClick={() => handleDeleteClick(user)}
              key={user.id}
              user={user}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListManageUser;

import React, { useEffect, useState } from "react";
import { CardManageUser } from "./CardManageUser";
import * as userService from "../../../services/UserService";
import ButtonAdd from "../../ButtonAdd";

const ListManageUser = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const data = await userService.getUsersService();
    setUsers(data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

return (
  <div>
    <ButtonAdd/>

    <div className="d-flex flex-column mt-3">
      {users?.map((user) => (
        <div key={user.id} className="mb-4">
          <CardManageUser key={user.id} user={user} />
        </div>
      ))}
    </div>
  </div>
);
};

export default ListManageUser
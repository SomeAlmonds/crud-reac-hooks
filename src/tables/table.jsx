import { useState } from "react";
import { users } from "./userData";
import UserTable from "./userTable";
import UserForm from "./userForm";

export default function Table() {
  const [userList, setUserList] = useState(users);
  const [editingUser, setEditingUser] = useState(0);

  let userToEdit = {};
  if (editingUser) {
    userToEdit = userList.find((user) => user.id === editingUser);
  }

  function addUser(user, id) {
    let newList = [];
    if (id) {
      newList = userList;
      newList[id - 1] = user;

      setUserList(newList);
      setEditingUser(0);
    } else {
      newList = [...userList, user];
      newList = newList.map(
        (user, index) => (user = { ...user, id: index + 1 })
      );
      setUserList(newList);
    }
  }

  return (
    <div className="wraper">
      <div className="flex-large">
        <h1>Add user</h1>
        <UserForm
          addUser={addUser}
          editingUser={editingUser}
          setEditingUser={setEditingUser}
          userToEdit={userToEdit}
        />
      </div>
      <div className="flex-large">
        <h1>View users</h1>
        <div className="users-table">
          <div className="table-head">
            <div>name</div>
            <div>user name</div>
            <div>action</div>
          </div>
          <div className="table-body">
            <UserTable
              users={userList}
              setEditingUser={setEditingUser}
              setUserList={setUserList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

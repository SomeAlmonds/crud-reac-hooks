export default function UserTable({ users, setEditingUser, setUserList }) {
  const remove = "remove";
  const edit = "edit";

  function handlClick(act, id) {
    switch (act) {
      case remove:
        setUserList(users.filter((user) => user.id !== id));
        break;
      case edit:
        setEditingUser(id);
        break;
      default:
        throw Error("handleClick function in userTable has no action");
    }
  }

  return users.map((user) => {
    return (
      <div className="user" key={user.id}>
        <div className="user-info">{user.name}</div>
        <div className="user-info">{user.userName}</div>
        <div className="user-actions">
          <button className="btn" onClick={() => handlClick(edit, user.id)}>
            Edit
          </button>
          <button className="btn" onClick={() => handlClick(remove, user.id)}>
            Remove
          </button>
        </div>
      </div>
    );
  });
}

import { useEffect, useState } from "react";

export default function UserForm({ addUser, editingUser, userToEdit }) {
  const initialState = { id: null, name: "", userName: "" };
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    if (editingUser) {
      setUser(userToEdit);
    }
  }, [userToEdit]);

  function handleInputChange(e) {
    let { name, value } = e.target;
    name.length > 30 ? (name = name.slice(0, 30)) : {};
    value.length > 30 ? (value = value.slice(0, 30)) : {};
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const emptyInput = document.getElementById(user.name ? "userName" : "name");

    if (!user.name || !user.userName) {
      emptyInput.className = emptyInput.className + " input-warning";
      emptyInput.onfocus = () => (emptyInput.className = "user-input");
    } else {
      addUser(user, editingUser);
      setUser(initialState);
      emptyInput.className = "user-input";
    }
  }

  return (
    <form action="" className="user-form">
      <label htmlFor="name" className="user-lable">
        Name:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        autoComplete="off"
        value={user.name}
        placeholder={user.name}
        className="user-input"
        onChange={(e) => handleInputChange(e)}
      />
      <label htmlFor="userName" className="user-lable">
        User name:
      </label>
      <input
        type="text"
        name="userName"
        id="userName"
        autoComplete="off"
        value={user.userName}
        className="user-input"
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="btn submit-btn"
        type="button"
        onClick={(event) => handleSubmit(event)}
      >
        {editingUser ? "Edit" : "Submit"}
      </button>
    </form>
  );
}

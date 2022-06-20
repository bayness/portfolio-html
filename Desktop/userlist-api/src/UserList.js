import axios from "axios";
import React, { useEffect, useState } from "react";

// https://jsonplaceholder.typicode.com/users

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => {
        console.log(error);
      });

    //  const response = res.data
  }, []);

  return (
    <div className="bg-slate-900 flex justify-center flex-col items-center">
      <h1 className="text-3xl font-bold text-white hover:animate-spin mt-20 pb-10">HELLO USERS</h1>
      <ul className="justify-self-center">
        {users.map((user) => (
          <li className="border-solid border-2 m-2 p-2 w-44  rounded-full text-center text-white hover:text-slate-800 hover:cursor-pointer hover:bg-slate-400  shadow hover:shadow-slate-100 duration-300 hover:w-48" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

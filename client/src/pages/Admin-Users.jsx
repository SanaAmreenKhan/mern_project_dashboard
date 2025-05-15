import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../store/auth";

const AdminUsers = () => {
  const { token } = useAuth();
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      if (response.ok) {
        const res_data = await response.json();
        setAllUsers(res_data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <div className="h1">Admin Users Data</div>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((user, index) => {
                const { _id, username, email, phone } = user;
                return (
                  <tr key={_id || index}>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;

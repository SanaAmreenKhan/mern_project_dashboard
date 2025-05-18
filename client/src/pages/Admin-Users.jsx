import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

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

  const deleteUser = async (e, id) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.ok) {
        const res_data = response.json();
        console.log("deleted",res_data.message)
        toast.success(res_data);
        getAllUsers();
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
                <th>Edit</th>
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
                    <td>
                      <Link to={`/admin/users/${_id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button onClick={(e) => deleteUser(e, _id)}>
                        Delete
                      </button>
                    </td>
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

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (pageNumber) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`);
      setUsers(response.data.data);
      setFilteredUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      toast.error("Failed to fetch users");
    }
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    const query = e.target.value.toLowerCase();
    const filtered = users.filter(user =>
      (`${user.first_name} ${user.last_name}`).toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      toast.success("User deleted successfully!");
      setFilteredUsers(filteredUsers.filter(user => user.id !== id));
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  return (
    <div>
       {/* <h2>User List</h2> */}

      {/* Search Input */}
      <input type="text" placeholder="Search by name..." value={search}
        onChange={handleSearch}
        style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
      />
      <div className='container'>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
          <div className='box' key={user.id}>
            <div className='data'>

            <img src={user.avatar} alt={user.first_name} width="80" height="80" />
            </div>
            <h3>Name: {user.first_name} {user.last_name}</h3>
            <h3>Email: {user.email}</h3>
           

            <div id='btn'>
              <button>
                <Link to={`/edituser/${user.id}`}>Edit</Link>
              </button>
              <button onClick={() => handleDelete(user.id)}> Delete</button>
            
            </div>
          </div>
        ))
      ):(
        <p>No users found</p>
      )}
      </div>

      {/* Pagination */}
      <div className='footer'>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <span >Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Userlist;

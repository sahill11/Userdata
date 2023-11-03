import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import { IoPersonAddSharp } from "react-icons/io5"



function UserList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState("");
  const [search, setSearch] = useState("");
  const [filterdata, setFilterdata] = useState([]);

// Fetch User Data from Json File

  useEffect(() => {
    fetchUsers();

  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:3001/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setFilterdata(data);
      }).catch((err)=>{console.log(err.essage)})
  };

// Find User By Name

  function findUser() {
    const filtered = users.filter((item) =>
      item.username.toLowerCase().includes(search.toLowerCase())
    );
    setFilterdata(filtered);
    setSearch("")
  }

  // Redirect to Add user page

  function addUser() {
    return navigate("/adduser");
  }

// Edit User function

function editUser(id){
  return navigate("/userlist/edit/"+id)
}


// Delete User 

function deleteUser(id){
  if(window.confirm("Do you Really want To Delete")){
    fetch("http://localhost:3001/users/" + id,{method: "DELETE"}).then(()=>{
      alert("removed Successfully")
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      setFilterdata(updatedUsers);
  }).catch((err)=>{console.log(err.message)})
  }
}

  return (
    <>
    <Logout/>
      <Container>
        <div>
          <h1>User List</h1>
          <div className="searchdata">
            <input
              type="text"
              placeholder="Search Username"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={findUser}>Search</button>
          </div>
          <div className="add">
            <button onClick={addUser}>Add <IoPersonAddSharp/></button>
          </div>
          <div className="displaydata">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>city</th>
                  <th>Actons</th>
                </tr>
              </thead>
              <tbody>
                {filterdata.map((data, index) => (
                  <tr key={data.id}>
                    <td>{index + 1}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.city}</td>
                    <td>
                      <button className="edit" onClick={()=> editUser(data.id)}><FaEdit/></button>
                      <button className="delete" onClick={()=> deleteUser(data.id)}><AiFillDelete/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
}

export default UserList;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  h1 {
    text-align: center;
    font-weight: 700;
  }

  table {
    width: 100%;
    border-radius: 10px;
    background-color: #f0f0f0;
    overflow: hidden;
    text-align: center;
    border-collapse: collapse;
    thead {
      background-color: #c4c4c4;
      height: 30px;
      border-radius: 20px;
      color: #616161;
      width: 100%;
    }
    th {
      padding: 0;
      margin: 0;
      border: none;
      outline: none;
    }
    th,
    td {
      padding: 20px;
    }

    .delete,
    .edit {
      margin-left: 10px;
      padding: 5px 10px;
      border-radius: 5px;
      outline: none;
      border: none;
      color: white;
      font-weight: 500;
      cursor: pointer;
    }
    .delete {
      background-color: red;
    }
    .edit {
      background-color: orange;
    }
  }

  .add {
    background-color: #01cd2a;
    width: 100px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    margin: 10px 0 5px 0;

    button {
      color: #fdfdfd;
      font-size: 16px;
      font-weight: 700;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }

  .searchdata {
    width: 500px;
    background-color: #d8d8d8;
    display: flex;
    height: 50px;
    overflow: hidden;
    border-radius: 25px;
    margin: 20px auto;
    justify-content: center;
    input {
      flex-basis: 80%;
      background-color: transparent;
      border: none;
      outline: none;
      padding: 25px;
    }
    input::placeholder {
      color: #9b9b9b;
      font-weight: 500;
      font-size: 16px;
    }

    button {
      width: 100%;
      flex-basis: 20%;
      background-color: #6f6fff;
      border: none;
      border-radius: 25px;
      font-weight: 500;
      color: #dddddd;
      cursor: pointer;
    }
  }
`;

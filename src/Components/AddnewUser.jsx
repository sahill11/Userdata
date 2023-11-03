import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

function AddnewUser() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  // baxk to userListing Page

  function back() {
    return navigate("/userlist");
  }

  //  Add new User function and redirect to userlisting page

  function addUser() {
    if (username == "" || email == "" || city == "") {
      alert("all are compulsary");
      return;
    }

    const updatedData = {
      id,
      username,
      email,
      city,
    };

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then(() => {
        alert("Saved Successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });

    setCity("");
    setUsername("");
    setEmail("");
    setId("");

    return navigate("/userlist");
  }

  return (
    <>
    <Logout />
      <Container>
        <div className="sm-container">
          <h2>Add User Details</h2>
          <div className="userdetails">
            <form onSubmit={addUser}>
              <div className="inputfield">
                <label htmlFor="">Id</label>
                <input
                  type="text"
                  disabled
                  placeholder="Add Your Id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Add Your Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Add Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputfield">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  required
                  placeholder="Add your City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="btns">
                <button className="add" type="submit">
                  Add
                </button>
                <button className="back" onClick={back}>
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddnewUser;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .sm-container {
    padding: 20px;
    background-color: #e3e3e3;
    border-radius: 20px;

    h2 {
      margin-bottom: 20px;
      color: #0c084c;
      text-align: center;
    }

    .userdetails {
      form {
        display: flex;
        flex-direction: column;
        gap: 10px;

      .inputfield{
            display:flex;
            flex-direction: column;

        label{
            margin-bottom: 5px;
            font-weight: 500;
        }
      
      input {
        width: 300px;
        height: 25px;
        padding: 20px 10px;
        outline: none;
        border: none;
        border-radius: 5px;
      }
    }
    }
    }
    .btns {
      margin-top: 20px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      button {
        border: none;
        border-radius: 5px;
        padding: 10px 30px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.5s;
      }
      .add {
        background-color: #0c084c;
        color: #f9f8ff;
      }
      .back {
        background-color: #4c1708;
        color: #f9f8ff;
      }

      .add:hover {
        background-color: #ffffff;
        color: #0c084c;
      }
      .back:hover {
        background-color: #ffffff;
        color: #4c3508;
      }
    }
  }
`;

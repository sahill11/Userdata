import React, { useState } from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'


function LoginPage({ onlogin }) {
    const navigate = useNavigate();
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const adminCredential = {
    username: "Admin",
    password: "Admin123"
}
function checkCredential(){
   
if(adminCredential.username == username && adminCredential.password == password ){

    onlogin(true);
    navigate("/userlist") 
}

else{
    alert("Invalid Credential")
}

}

  return (
    <>
    <Container>
    <div className="sm-container">
        <h1>LOG IN</h1>
        <input 
        id= "username"
        type="text" 
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input 
        id="password"
        type="password" 
        placeholder='Passwords'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={checkCredential}>Log In</button>
    </div>
    </Container>
    </>
  )
}

export default LoginPage;

export const Container = styled.div`

display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
.sm-container{
    padding: 30px 20px;
    border-radius:20px;
    background-color: #e3e3e3;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    h1{
        color: #6c3fff;
        margin-bottom: 20px;
    }
}

    input{
        width: 250px;
        height: 40px;
        border-radius: 5px;
        background-color: #fdfcfc;
        padding:5px;
        outline:none;
        border:none;
        color: #2f2f2f;
        font-weight: 500;
    }
    input::placeholder{
        color: #5f5f5f;
        text-align: center;
        font-weight: 500;

    }
    button{
        width: 250px;
        height: 40px;
        background-color: #6c3fff;
        outline: none;
        border: none;
        border-radius: 5px;
        font-weight: 500;
        color: white;
        cursor: pointer;
        transition: all 0.5s;
    }
    button:hover{
        background-color: #281762;
    }
`
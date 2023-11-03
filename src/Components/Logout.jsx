import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function Logout() {

    const navigate = useNavigate(); 

    function logoutUser(){

        localStorage.clear();
        navigate("/")
    }



  return (
    <>
    <Button onClick={logoutUser} >
    Log Out
    </Button>
    </>

)}

const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius:5px;
    background-color: #ff2525;
    color:white;
    font-weight:500;
    position : fixed;
    bottom: 0;
    margin: 20px;
    right:0;
    cursor: pointer;
`
   


export default Logout
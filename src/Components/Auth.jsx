import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components';

function Auth() {
const navigate = useNavigate();
    function backtoLogin(){
        navigate("/")
    }
  return (
    <>
    
    <Container>

        <div className="err-msg">
        <h2>404</h2>
        <p>Oops! Page Not Found</p>
        </div>
        <button onClick={backtoLogin}>Back To Login</button>
    </Container>
    </>
  )
}



const Container = styled.div`
    
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    .err-msg{
        margin-bottom: 20px;
        text-align:center;
        h2{
        font-size: 40px;
    }
    }

    

    button{
        padding: 10px 20px;
        background-color: #ff3838;
        font-size: 16px;
        font-weight: 700;
        border: none;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }


`

export default Auth
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Logout from './Logout';

function Useredit() {
    const { userid } = useParams();
    useEffect(()=>{
        fetch("http://localhost:3001/users/" + userid).then((resp)=>{
            return resp.json();
        }).then((data)=>{
            setId(data.id);
            setCity(data.city);
            setEmail(data.email);
            setUsername(data.username)
        }).catch((err)=>{console.log(err.message)})
    },[userid]);

    const navigate = useNavigate();
const [id, setId] = useState("")
const [username,setUsername] = useState("")
const [email,setEmail] = useState("")
const [city,setCity] = useState("")


   function back(){
    return navigate("/userlist")
}

//  Update User function and redirect to userlisting page

function addUser(){

    const updatedData = {
        id,
        username,
        email,
        city}

    fetch("http://localhost:3001/users/" + userid,{
        method:"PUT",
        headers: {"content-type":"application/json"},
        body:JSON.stringify(updatedData)
    }).then(()=> {alert("Update Successfully")})
    .catch((err)=> {console.log(err.message)})

    
    return navigate("/userlist")

}

  return (
    <>
       <Logout />

    <Container>
    <div className='sm-container'>
        <h2>Add User Details</h2>
        <div className="userdetails">
            <form onSubmit={addUser}>

            <input type="text" 
        disabled
        placeholder='Add Your Id'
        value={id}
        onChange={(e)=> setId(e.target.value)}
        />
        <input type="text" 
        required
        placeholder='Add Your Name'
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        />
        <input type="email" 
        required
        placeholder='Add Your Email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />
        <input type="text" 
        required
        placeholder='Add your City'
        value={city}
        onChange={(e)=> setCity(e.target.value)}
        />
          <div className="btns">
            <button className='add'  type='submit'>Add</button>
            <button className='back' onClick={back}>Back</button>
        </div>
        </form>
        </div>
        
    </div>
    </Container>

    </>
  )
}


const Container = styled.div`
    
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;

.sm-container{
    padding: 20px;
    background-color: #e3e3e3;
    border-radius: 20px;

    h2{
        margin-bottom: 20px;
        color: #0c084c;
        text-align:center;
    }
    
    .userdetails{
    form{
        display: flex;
    flex-direction: column;
    gap: 10px;
    }
    input{
        width: 300px;
        height: 25px;
        padding: 20px 10px;
        outline: none;
        border: none;
        border-radius:5px;
    }
    }
    .btns{
        margin-top:20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        button{
            border: none;
            border-radius: 5px;
            padding: 10px 30px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.5s;
        }
        .add{
            background-color: #0c084c;
            color: #f9f8ff;
        }
        .back{
            background-color: #4c1708;
            color: #f9f8ff;
        }

        .add:hover{
            background-color:#ffffff;
            color:#0c084c;
        }
        .back:hover{
            background-color:#ffffff;
            color:#4c3508;
            
        }
    }
}



` 

export default Useredit
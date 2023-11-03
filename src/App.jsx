// import { useState } from 'react'
import './App.css'
import LoginPage from './Components/loginPage'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import UserList from './Components/UserList'
import AddnewUser from './Components/AddnewUser'
import Useredit from './Components/Useredit'
import Auth from './Components/Auth'
import { useEffect, useState } from 'react'
// import UserList from './Components/UserList'
function App() {

  const [islogin,setIslogin] = useState(false)
  useEffect(()=>{
    setIslogin(localStorage.getItem("setIslogin"))
  },[])

function authlogin(data){
 
  localStorage.setItem("setIslogin",data)
  setIslogin(localStorage.getItem("setIslogin"))
}

  return (
    <>
    
    <Router>
        <Routes>
        <Route path='/' element={<LoginPage onlogin={authlogin}/>}/>
        <Route path='/userlist' element= {islogin ? <UserList/> : <Auth/>} />
         <Route path = '/adduser' element= {islogin ? <AddnewUser/> : <Auth/>}/>
         <Route path = '/userlist/edit/:userid' element= {islogin ? <Useredit/> : <Auth/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App;

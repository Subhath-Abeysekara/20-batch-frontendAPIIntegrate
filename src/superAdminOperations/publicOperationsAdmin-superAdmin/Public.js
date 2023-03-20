
import baseUrl from '../../apis/baseUrl';
import { useState } from 'react';

function Public() {

  const [validity , setValidity] = useState(false)
  const [admin , setAdmin] = useState({})
  const [firstname , setFirstName] = useState("")
  const [lastname , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const [nic , setNic] = useState("")
  const [contact , setContact] = useState("")
// Login for any user
  function login(){
    baseUrl.post("/api/auth/login",{
      username :'subhath_1',
      password :'123werd'  
  })
  .then((res) => { 
      alert(res.data)
      localStorage.setItem('user',res.data)
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  }
// Validte user
  function getValidity(){
    baseUrl.get("/api/auth/validate",{
      headers:{"token":localStorage.getItem('user')} 
  })
  .then((res) => { 
      alert(res.data)
      localStorage.setItem('user',res.data)
      if(res.data==="valid"){
        setValidity(true)
      }
      else{
        setValidity(false)
      }
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  }
// Get logged admins data
  function getAdmin(){
    baseUrl.get("/api/auth/get/admin",{
      headers:{"token":localStorage.getItem('user')} 
  })
  .then((res) => { 
      console.log("result : ", res.data)
      setAdmin(res.data)
      setFirstName(res.data[0].firstname)
      setLastName(res.data[0].lastname)
      setEmail(res.data[0].email)
      setNic(res.data[0].nic)
      setContact(res.data[0].contact)
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  }
//Update admin
  function updateAdmin(){
    baseUrl.put("/api/auth/admin/update",{
      firstname:firstname,
      lastname:lastname,
      email:email,
      nic:nic,
      contact:contact,
    },{
      headers:{"token":localStorage.getItem('user')} 
  })
  .then((res) => { 
      console.log("result : ", res.data)
      setAdmin(res.data)
      
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  }
  

  return (
    <div className="App">
      <h1>Admin And SuperAdmin</h1>
      <button onClick={login}>Login</button>
      <button onClick={getAdmin}>getAdmin</button>
      <button onClick={getValidity}>getValidity</button>
      {
        validity&&<div><p>Hello</p></div>
      }
    </div>
  );
}

export default Public;
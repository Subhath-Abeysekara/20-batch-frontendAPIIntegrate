
import baseUrl from '../../apis/baseUrl';
import { useState } from 'react';

function Super() {

  const [validity , setValidity] = useState(false)
  const [admins , setAdmins] = useState([])
  const [firstname , setFirstName] = useState("")
  const [lastname , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const [nic , setNic] = useState("")
  const [contact , setContact] = useState("")
  const [user_id , setUserId] = useState(0)
  const [price , setPrice] = useState(0)
  const [slot_id , setSlotId] = useState(0)
// add Member by super admin
function addMember(){
    baseUrl.post("/api/superadmin/register/admin",{
      firstname:firstname,
      lastname:lastname,
      email:email,
      nic:nic,
      contact:contact,
    },{
      headers:{"token":localStorage.getItem('user')} 
  })
  .then((res) => { 
      alert(res.data)  
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  }

  function getMembers(){
    baseUrl.get("/api/superadmin/get/members",{
      headers:{"token":localStorage.getItem('user')} 
  })
  .then((res) => { 
      console.log("result : ", res.data)
      setAdmins(res.data)
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  }

  function confirmMembers(){
    baseUrl.put("/api/superadmin/confirm/"+user_id,{},{
      headers:{"token":localStorage.getItem('user')} 
  })
  .then((res) => { 
    alert(res.data)
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  }

  function removeMembers(){
    baseUrl.delete("/api/superadmin/remove/"+user_id,{
      headers:{"token":localStorage.getItem('user')} 
  })
  .then((res) => { 
    alert(res.data)
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  }

  function updateSlot(){
    baseUrl.put("/api/superadmin/slot/update/"+slot_id,{
      price:price,
    },{
      headers:{"token":localStorage.getItem('user')} 
  })
  .then((res) => { 
    alert(res.data)
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  }

  return (
    <div className="App">
        <h1>SuperAdmin</h1>
        <input value={user_id} onChange={(e)=>setUserId(e.target.value)} placeholder="userId"></input><br></br>
        <button onClick={confirmMembers}>Confirm</button><button onClick={removeMembers}>Remove</button><br></br>
        <input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="price"></input>
        <input value={slot_id} onChange={(e)=>setSlotId(e.target.value)} placeholder="slotId"></input>
        <button onClick={updateSlot}>UpdateSlot</button>
        <button onClick={getMembers}>getMembers</button>
    </div>
  );
}

export default Super;
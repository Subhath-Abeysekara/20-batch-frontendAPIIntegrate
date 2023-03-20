
import baseUrl from '../apis/baseUrl';
import { useState } from 'react';

function Operator() {

  const [bookings , setBookings] = useState([])
  const [BookedDate , setBookedDate] = useState("")
  const [start_time , setStartTime] = useState("")
  const [end_time , setEndTime] = useState("")
  const [rate , setRate] = useState(0)
  const [review , setReview] = useState("")
  const [vehicle_no , setUserId] = useState("")
  const [bookingId , setBookingId] = useState(0)
  const [slot_id , setSlotId] = useState(0)
  const [payment , setPayment] = useState(0)
// add Member by super admin
function addBooking(){
    baseUrl.post("/api/operator/add/booking/"+slot_id,{
      BookedDate:BookedDate,
      start_time:start_time,
      end_time:end_time,
      rate:rate,
      review:review,
      vehicle_no:vehicle_no,
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

  function getBookings(){
    baseUrl.get("/api/operator/bookings",{
      headers:{"token":localStorage.getItem('user')} 
  })
  .then((res) => { 
      console.log("result : ", res.data)
      setBookings(res.data)
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  }

  function getTodayBookings(){
    baseUrl.get("/api/operator/bookingsByDate",{
      headers:{"token":localStorage.getItem('user')} 
  })
  .then((res) => { 
      console.log("result : ", res.data)
      setBookings(res.data)
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  }

  function getBookingPayment(){
    baseUrl.get("/api/operator/payment/"+bookingId,{
      headers:{"token":localStorage.getItem('user')} 
  })
  .then((res) => { 
      alert(res.data)
      setPayment(res.data)
  })
// Catch errors if any
.catch((err) => { 
  alert(err)
})
  }


  return (
    <div className="App">
        <h1>Operator</h1>
        <button onClick={getBookings}>getBookings</button>
        <button onClick={getTodayBookings}>getTodayBookings</button>
        <button onClick={getBookingPayment}>getBookingPayment</button>
    </div>
  );
}

export default Operator;
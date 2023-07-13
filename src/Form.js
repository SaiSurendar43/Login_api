import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from './Table';
import { useNavigate } from 'react-router-dom';



const App = () => {
  const navigate = useNavigate();
   
  const [api,setApi] = useState('');
  const [getname,setName] = useState('');
  const [getemail,setEmail] = useState('');
  const [getcity ,setCity] = useState('');

  const nameOnChange = (event)=>
  {
      setName(event.target.value);
  }
   const emailOnchange = (event)=>
   {
        setEmail(event.target.value);

   }
  const cityOnchange = (event)=>
  {
     setCity(event.target.value);
  }

   const onclicksubmit = (event)=>{
    event.preventDefault();
      let data = {
         name: getname,
         email: getemail,
         city : getcity
      }
     console.log(data)
         axios.post('http://localhost:3000/post',data)
         .then((response)=>{
            console.log('res',response.data);
            navigate('/table');
         })
          
         .catch((err)=>{
             console.log('err',err);
         })
   }
  return (
     
    <div class="container">
  <div class="row">
    <div class="col-md-6 offset-md-4">
      <form class="border border-1 w-75 mt-4 mx-2 mb-2" onSubmit={onclicksubmit}> 
        <div class="form-group mt-4 mx-5 px-5">
          <label for="inputField" className='mt-3'>UserName</label>
          <input onChange={nameOnChange} value={getname} type="text" class="form-control w-100" id="inputField" placeholder="Username"/>
          <label for="inputField" className='mt-3'>Email</label>
          <input onChange={emailOnchange} value={getemail} type="text" className="form-control w-100" id="inputField" placeholder="Email"/>
          <label for="inputField" className='mt-3'>City</label>
          <input onChange={cityOnchange} type="text" value={getcity} class="form-control w-100" id="inputField" placeholder="City"/>
        </div>
        <div className='text-center'>
        <button  type="submit" className="btn btn-primary mt-2 mb-2">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>

  )

}



export default App


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const Table = () => {
  const [api, setapi] = useState([]);

  const [getname,setName] = useState('');
  const [getemail,setEmail] = useState('');
  const [getcity ,setCity] = useState('');
  const [id,setid] = useState("")
  const [getshowapi,setShowApi] = useState('');
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
console.log("name: ",id)

  useEffect(() => {
    axios.get('http://localhost:3000/get').then((response) => {
      console.log('res2', response.data);
      console.log("****");
      setapi(response.data);
    });
  }, [getshowapi]);

  const UpdateOnClick = () => {
       let form = {
              name: getname,
              email: getemail,
              city : getcity
         }

     axios.put(`http://localhost:3000/update/${id}`,form)
      .then((response)=>{
          console.log('update======>',response.data);
          setShowApi(response.data);

      })
       
        
     }
    

 

  return (
       <div>
       <div
         className="modal fade"
         id="exampleModal"
         tabIndex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
       >
         <div className="modal-dialog">
           <div className="modal-content">
          
             <div className="modal-header">
               <h1 className="modal-title fs-5" id="exampleModalLabel">
                 Form
               </h1>
               <button
                 type="button"
                 className="btn-close"
                 data-bs-dismiss="modal"
                 aria-label="Close"
               ></button>
             </div>
             <div className="modal-body">
             <form> 
        <div class="form-group mt-4 mx-5 px-5">
          <label for="inputField" className='mt-3'>UserName</label>
          <input onChange={nameOnChange} value={getname} type="text" class="form-control w-100" id="inputField" placeholder={getname.name}/>
          <label for="inputField" className='mt-3'>Email</label>
          <input onChange={emailOnchange} value={getemail} type="text" className="form-control w-100" id="inputField" placeholder={getname.email}/>
          <label for="inputField" className='mt-3'>City</label>
          <input onChange={cityOnchange} type="text" value={getcity} class="form-control w-100" id="inputField" placeholder={getname.city}/>
        </div>
        {/* <div className='text-center'>
        <button  type="submit" className="btn btn-primary mt-2 mb-2">Submit</button>
        </div> */}
      </form>
             </div>
             <div className="modal-footer">
               <button
                 type="button"
                 className="btn btn-secondary"
                 data-bs-dismiss="modal"
               >
                 Close
               </button>
               <button onClick={UpdateOnClick} type="button" className="btn btn-primary">
                 Update
               </button>
             </div>
           </div>
         </div>
       </div>
       <table className="table table-dark table-striped">
         <thead>
           <tr>
             <th scope="col">S.No</th>
             <th scope="col">Name</th>
             <th scope="col">Email</th>
             <th scope="col">City</th>
             <th scope="col">Update</th>
             <th scope="col">Delete</th>
           </tr>
         </thead>
         <tbody>
           {api.map((item, index) => (
             <tr key={index}>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.email}</td>
               <td>{item.city}</td>
               <td>
                 <button
                   type="button"
                    onClick={()=>setid(item.name)}
                   className="btn btn-primary"
                   data-bs-toggle="modal"
                   data-bs-target="#exampleModal"
                 >
                   <FaUserEdit />
                 </button>
               </td>
               <td>
                 <button className='btn btn-danger'>
                     
                   <FaTrash />
                 </button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
     

  );
};

export default Table;
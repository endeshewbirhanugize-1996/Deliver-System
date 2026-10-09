import React , {useState} from "react";
import axios from "axios";
const Sinupuser =()=>{
     const [user , setUser]=useState({
           name:"",
           phone:"",
           password:"",
           email:""
     })
         const  handlchange=(e)=>{
            setUser(u=>({...u, [e.target.name]:e.target.value}));
         }
         const handlesubmit=(e)=>{
            event.preventDefault();
              try {
                const res=axios.post("http://localhost:3001/user", user);
              } catch (error) {
                alert("error are occured", error);
              }   
         }
return(
    <>
    <div className="min-h-screen bg-blue-400 flex justify-center items-center">
      <form
        onSubmit={handlesubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold text-center mb-6">
          Register user
        </h1>
    <input type="text" name="name" className="w-full border p-2 mb-4 rounded" 
    placeholder="" value={user.name} onChange={handlchange} />
    <input type="text" name="phone" className="w-full border p-2 mb-4 rounded" 
    placeholder="" value={user.phone} onChange={handlchange} />
    <input type="text" name="password" className="w-full border p-2 mb-4 rounded"
     placeholder="" value={user.password} onChange={handlchange} />
    <input type="text" name="email" className="w-full border p-2 mb-4 rounded"
     placeholder="" value={user.email} onChange={handlchange} />
    <input type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" />
    </form>
    </div> 
    </>
)
}
export default Sinupuser
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    const {id} = useParams()

    const handleUpdateUser = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const updateUserField = {name, email}

        alert('please insert some value')
        event.target.reset()
        
        fetch(`http://localhost:5000/user/${id}`,{
            method: "PUT",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updateUserField)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data)
            })
    }
    return (
        <div>
            <h1 className='text-center text-red-500 my-5 text-2xl'>Hello dear: {user.name}</h1>
            <div className='flex justify-center'>
               <form onSubmit={handleUpdateUser} className='border shadow-lg border-orange-500 rounded p-6'>
                
                <h1 className='text-center mb-4 font-mono font-mon text-pink-400 text-2xl'>Please Update your <br /> current user</h1> 

                 <input className='w-80 h-10 shadow border-red-400 border rounded px-4' type="text" placeholder='Write Your Name' name="name" /> <br /><br />

                 <input className='w-80 h-10 shadow border-red-400 border rounded px-4' type="email" placeholder='Write Your Name' name="email" /> <br /><br />
                
                 <input className='w-80 h-10 bg-slate-300 cursor-pointer shadow hover:bg-pink-200 border-blue-400 border rounded' type="submit" value="Post" />
               </form>
           </div>
        </div>
    );
};

export default UpdateUser;
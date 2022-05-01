import React from 'react';
import Swal from 'sweetalert2';

const AddUser = () => {

    const handleAddUser = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const addUserField = {name, email}
        console.log(addUserField)

        fetch(`http://localhost:5000/user`,{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addUserField)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            event.target.reset()
        })
        
    }
    return (
        <div>

            {/* this is  */}
           <div className='flex justify-center'>
               <form onSubmit={handleAddUser} className='border shadow-lg border-orange-500 rounded p-6'>

                <h1 className='text-center text-2xl mb-4 font-mono font-mon text-pink-400'>Please Added some user</h1> 

                 <input className='w-80 h-10 shadow border-red-400 border rounded px-4' type="text" placeholder='Write Your Name' name="name" /> <br /><br />

                 <input className='w-80 h-10 shadow border-red-400 border rounded px-4' type="email" placeholder='Write Your Name' name="email" /> <br /><br />
                
                 <input className='w-80 h-10 font-bold bg-slate-300 cursor-pointer shadow hover:bg-pink-200 border-blue-400 border rounded' type="submit" value="Post" />
               </form>
           </div>
        </div>
    );
};

export default AddUser;
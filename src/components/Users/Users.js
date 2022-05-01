import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


const Users = () => {
    const navigate = useNavigate()
    const [users, setUser] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/user`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    const handleDeletButton = id => {
        console.log('hello world')
        const procced = window.confirm('Are you sure delete want it')
        if(procced){
            console.log('success',id)
            fetch(`http://localhost:5000/user/${id}`,{
            method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    const remaining = users.filter(user => user._id != id)
                    setUser(remaining)
                }
            })
            
        }
    }

    const handleEdit = id => {
        navigate(`/update/${id}`)
    }
    return (
        <div>
            <h1 className='text-center text-red-400 font-mono text-3xl'>Wow awesome users! : {users.length}</h1>

            <div className='mx-4 grid grid-cols-4 border border-orange-500 shadow rounded p-4 gap-4'>
                {
                   users.map(user => 
                   <div key={user._id} className='flex justify-between bg-gray-50 hover:bg-white border border-rose-400 rounded p-2 '>
                    
                    <div>
                    <span className='text-pink-600'>Name : </span>{user.name}<br/>
                    <span className='text-orange-600'>Email : </span>{user.email}
                    </div>

                    <div className='space-y-2'>
                        <AiOutlineDelete onClick={()=>handleDeletButton(user._id)} className='cursor-pointer h-6 w-6 text-red-300 hover:text-red-600'/>

                        <FiEdit onClick={()=>handleEdit(user._id)} className='cursor-pointer h-5 w-5 text-blue-200 hover:text-blue-600'/>
                    </div>

                   </div>
                    ) 
                }
            </div>
        </div>
    );
};

export default Users;
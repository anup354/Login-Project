import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

//react tostify
const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        const login=localStorage.getItem('token')
        if(login)
        {
            navigate('/')
        } 
    })

    const submitHandler = async (e) => {
        e.preventDefault()
        let data = {
            email: email,
            password: password
        }
        if( email==="")
        {
            alert("enter email")
        }
        if( password==="")
        {
            alert("enter password")
        }

        try {
            const res = await axios.post(`https://api.devsrvofads.com/api/login`, data,
            )
            // console.log(token)
            if (res.status === 200) {
                localStorage.setItem('token',res.data.token)
                navigate("/");
            }
            else {
                alert("error")
            }
        } catch (error) {
            console.log(error)

        }

    }


    return (
        <>
            <div className='flex justify-center'>

                <form
                    onSubmit={submitHandler}
                    className='p-10'>
                    <div className='text-center text-lg font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'>Admin Login</div>

                    <div className='border w-80 m-4 p-1  bg-gradient-to-r from-red-400 via-fuchsia-500 to-indigo-500 rounded-xl'>
                        {/* <div className='bg-black h-20 text-white rounded-bl-full rounded-tr-full text-center  '>
                            <div className='mt-2'>Elscript</div>
                        </div> */}
                        <div className='bg-white p-5'>
                            <div >
                                <label className='text-lg w-full'>
                                    Email
                                </label><br />
                                <input
                                    type="text"
                                    name="email"
                                    placeholder='email'
                                    className='border-2 mt-2 rounded-lg p-2 border-black text-sm w-full '
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='mt-5 w-full'>
                                <label className='text-lg'>
                                    Password
                                </label><br />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='border-2 rounded-lg mt-2 p-2 border-black text-sm w-full '
                                />
                            </div>

                            <button className='flex mt-5 justify-center cursor-pointer' type="submit" >
                                <h2 className='text-xl font-bold '>Sign in</h2><Icon icon="material-symbols:arrow-circle-right" className='text-xl mt-1 ml-1' />
                            </button>
                            {/* <button className='border-2 mt-5 p-2 bg-[red] '>Login</button> */}
                        </div>

                    </div>
                </form>

            </div>
        </>
    )
}

export default AdminLogin
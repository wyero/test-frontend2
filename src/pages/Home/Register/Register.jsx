import React, { useState } from 'react'
import {MdOutlineMailOutline} from 'react-icons/md'
import {VscKey} from 'react-icons/vsc'
import {RxPerson} from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const navigate = useNavigate()

    const Register = async(e)=>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/auth/register', {
                name: name,
                email: email,
                password: password
            })
            navigate('/')
        } catch (error) {
            setMsg(error.response.data.message)
        }
    }
  return (
    <div className='bgLogin w-full h-screen'>
        <section className='flex justify-center items-center'>
           <section className='flex justify-center items-center flex-col mt-7 w-[350px] py-7 bg-white rounded-lg shadow-lg'>
            <p className='font-poppins font-700 text-[35px] text-blue-900 mb-7'>Register</p>
            <form className='w-full' onSubmit={Register}>
                {msg && <p className='text-center mb-2 mx-5 py-2 rounded-md font-poppins font-600 text-red-700 mx- bg-pink-200'>{msg}</p>}
                <div className='font-poppins mx-5'>
                    <label htmlFor="name" className='font-600'>Nama</label>
                    <div className='flex items-center relative'>
                        <RxPerson className='absolute text-gray-400 border-r-2 left-1 text-[27px] w-[35px]'/>
                        <input type="text" id='nama' placeholder='nama' value={name} onChange={(e)=>setName(e.target.value)} className='border-2 text-slate-700 rounded-md py-2 pl-11 pr-3 w-full border-blue-700 focus:outline-none'/>
                    </div>
                </div>
                <div className='font-poppins mx-5 my-5'>
                    <label htmlFor="email" className='font-600'>Email</label>
                    <div className='flex items-center relative'>
                        <MdOutlineMailOutline className='absolute text-gray-400 border-r-2 left-1 text-[27px] w-[35px]'/>
                        <input disabled={!name} type="email" id='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} className={`${!name ? 'border-2 text-gray-300 rounded-md py-2 pl-11 pr-3 w-full opacioty-50' : 'border-2 text-slate-700 rounded-md py-2 pl-11 pr-3 w-full border-blue-700 focus:outline-none'}`}/>
                    </div>
                </div>
                <div className='font-poppins mx-5 my-5'>
                    <label htmlFor="password" className='font-600'>Password</label>
                    <div className='flex items-center relative'>
                        <VscKey className='absolute text-gray-400 border-r-2 left-1 text-[25px] w-[35px]'/>
                        <input disabled={!name || !email} type="password" id='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} className={`${!name || !email ? 'border-2 text-gray-300 rounded-md py-2 pl-11 pr-3 w-full opacity-50' : 'border-2 text-slate-700 rounded-md py-2 pl-11 pr-3 w-full border-blue-700 focus:outline-none'}`}/>
                    </div>
                </div>
                <div className='mx-5 mt-10'>
                    <button disabled={!name || !email || !password} className={`${!name || !email || !password ? 'bgLogin w-full font-poppins text-white font-600 py-2 rounded-full text-[17px] opacity-50 shadow-lg' : 'bgLogin w-full font-poppins text-white font-600 py-2 rounded-full text-[17px] duration-150 hover:opacity-75 shadow-lg'}`}>Register</button>
                </div>
            </form>
            <div className='flex items-center gap-1 font-poppins text-16 mt-7'>
                <p>Sudah memiliki akun?</p>
                <Link to='/' className='text-blue-700 font-700'>Login</Link>
            </div>
           </section>
        </section>
    </div>
  )
}

export default Register
import React, { useState } from 'react'
import { Login } from '../functions/Functions'
import { useNavigate } from 'react-router-dom'

export function LoginPage(){
  const navigate = useNavigate()
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  function submit(event){
    event.preventDefault()
    const login = Login(username, password)
    if(login){
        alert('login berhasil')
        navigate('/restaurants')
    }else{
        alert('login gagal')
    }
  }

  return (
    <div className='min-w-screen min-h-screen flex justify-center items-center'>
        <div className='w-[451px]'>
            <h1 className='font-bold text-[32px] text-center text-black-primary my-4'>Sign in with your account</h1>
            <form onSubmit={submit} className='flex flex-col gap-2'>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="username" className='font-medium text-blackPrimary text-[20px]'>Username</label>
                    <input type="username" id='username' className='outline-none text-xs text-blackPrimary w-full p-2 border border-[#6F6E6E]' onChange={event => setUsername(event.target.value)} value={username} required />
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="pasasword" className='font-medium text-blackPrimary text-[20px]'>pasasword</label>
                    <input type="password" id='pasasword' className='outline-none text-xs text-blackPrimary w-full p-2 border border-[#6F6E6E]' onChange={event => setPassword(event.target.value)} value={password} required/>
                </div>
                <button type='submit' className='uppercase bg-bluePrimary my-5 text-white font-medium text-[15px] py-3'>login</button>
            </form>
        </div>
    </div>
  )
}

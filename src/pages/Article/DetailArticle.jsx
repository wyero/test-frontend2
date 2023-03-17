import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Login from '../Home/Login/Login'
import {AiOutlineLeft} from 'react-icons/ai'

const DetailArticle = () => {
  const [detail, setDetail] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    const getDetail = async() => {
      const response = await axios.get(`http://localhost:8080/article/${id}`)
      setDetail(response.data)
    }
    getDetail()
  }, [id])

  const isLoginTrue = JSON.parse(localStorage.getItem("login"))
  
  return (
    <section>
      {isLoginTrue ? 
        <section className=' mx-2 md:mx-20 font-poppins py-5'>
          <div className='flex flex-col sm:flex-row items-center justify-center relative'>
            <Link to='/profile' className='mr-auto md:absolute md:left-0 flex items-center gap-1 font-poppins font-600 text-[17px] text-gray-400'>
              <AiOutlineLeft/>
              <p>Kembali</p>
            </Link>
            <p className='font-700 text-[35px] text-center'>{detail.title}</p>
          </div>
          <div>
            <img src={detail.image} alt={detail.title} className='mx-auto w-[400px] h-[300px] rounded-xl my-3'/>
          </div>
          <p className='font-500 text-justify'>{detail.desc}</p>
        </section>
      : <Login/>}
    </section>
  )
}

export default DetailArticle
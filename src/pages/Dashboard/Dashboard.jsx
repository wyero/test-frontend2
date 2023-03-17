import React, { useEffect, useState } from 'react'
import Article from '../../components/Article'
import axios from 'axios'
import Login from '../Home/Login/Login'

const Dashboard = () => {
    const [articles, setArticles] = useState([])
    const [logout, setLogout] = useState(false)
    useEffect(()=>{
        const getArticle = async() => {
            const response = await axios.get("http://localhost:8080/article")
            setArticles(response.data)
        }
        getArticle()
    }, [])

    const isLoginTrue = JSON.parse(localStorage.getItem("login"))
    const Logout = () => {
        localStorage.removeItem("login")
        setLogout(true)
    }
    useEffect(()=>{}, [logout])
  return (
    <section>
        {isLoginTrue ? 
            (<header className='pb-5'>
                <div className='relative font-poppins font-600 text-[20px] text-center md:mx-10 mt-5'>
                    <div className='flex items-center justify-around md:justify-center'>
                        <p>Selamat datang ...</p>
                        <button onClick={Logout} className='md:absolute text-[17px] text-white right-5 rounded-md bg-pink-700 py-1 px-2'>Keluar</button>
                    </div>
                    <p className='font-600 text-[40px] mt-5'>Artikel</p>
                </div>
                <div className='flex md:mx-10 gap-5 justify-center items-center flex-wrap py-3 rounded-lg shadow-gray-700 shadow-md'>
                {articles && articles.map(article => {
                    return(
                        <Article key={article.id} title={article.title} desc={article.desc} img={article.image} path={`/article/${article.id}`}/>
                    )
                })}
                </div>
            </header>)
        : (<Login/>)}
    </section>
  )
}

export default Dashboard
import React from 'react'
import {Link} from 'react-router-dom'

const Article = ({title, desc, path, img}) => {
  return (
    <section>
        <Link to={path}>
            <div className='shadow-lg shadow-gray-400 rounded-lg pb-5 h-[335px] overflow-hidden w-[300px] font-poppins'>
                <img src={img} alt={title} className='w-[300px] h-[180px] rounded-t-lg'/>
                <p className='font-700 mx-2 text-[22px] my-1'>{title}</p>
                <p className='font-500 mx-2 line-clamp-5 leading-5'>{desc}</p>
            </div>
        </Link>
    </section>
  )
}

export default Article
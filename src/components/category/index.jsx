import React from 'react'
import { category } from '../../data'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <section className='my-20'>
      <div className='container'>
        <section className=' grid grid-cols-3 gap-7  '>
          {category.map((el) => (
            <div key={el.id} className='rounded p-5 flex justify-between hover:shadow-lg cursor-pointer group transition-all border-border	border-[1px]'>
              <div className='flex-col flex justify-between'>
              <h1 className='relative top-0 right-5 ml-5  text-dark-300 font-bold text-2xl group-hover:text-primary'>{el.title}</h1>
              <Link to={`./info/${el.category}`} className='text-dark-100 text-sm font-normal transition-colors hover:text-dark-200 '>Подробее</Link>
              </div>
               <div className='max-w-200px w-full h-[100px]'>
               <img className='w-full h-full object-contain' 
               alt={el.title}
               src={el.img} 
               />
               </div>
            </div>
          ))
          }


        </section>

      </div>
    </section>
  )
}

export default Category
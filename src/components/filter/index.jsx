import { Button } from '@material-tailwind/react'
import clsx from 'clsx'
import React, { useState } from 'react'
import { btns } from '../../data'

const Filter = () => {
  const [click , setClick]=useState(" номеру")
  const onSubmit=(e)=>{
    e.preventDefault()


  }

    return (
    <section className='mt-20'>
        <div className="container">
            <div className='flex items-center gap-3'>
            {/* <Button variant='text' onClick={()=>setClick} className={clsx(`${click=="номеру" ? "bg-dark-300 px-2 py-2":"", "text-xl  font-normal leading-6 text-dark-300 hover:bg-gray transition-all"}`) } type='button' >Поиск по  номеру</Button>
            <Button variant='text' onClick={()=>setClick} className={clsx(`${click=="марке" ? "bg-dark-300 px-2 py-2":"", "text-xl  font-normal leading-6 text-dark-300 hover:bg-gray transition-all"}`) } type='button' >Поиск по марке</Button>
            <Button variant='text' onClick={()=>setClick} className={clsx(`${click=="товару" ? "bg-dark-300 px-2 py-2":"", "text-xl  font-normal leading-6 text-dark-300 hover:bg-gray transition-all"}`) } type='button' >Поиск по названию товара</Button> */}
              {btns.map((el)=>(
                <Button
                key={el.id}
                variant='text'
                onClick={()=>setClick(el.value)}
                className={clsx(click==el.value ? "bg-blue-gray-100 px-2 py-2":"", "text-xl  font-normal leading-6 text-dark-300 hover:bg-gray transition-all")}>
                  {el.text}
                  </Button>
              ))}
               </div>
               <div className="my-6">
                <form onSubmit={onSubmit} className='w-full flex items-center'>
                  <input type="text"
                  name='category'
                  placeholder={`Введите ${click}`}
                  className='py-4 px-5 bg-gray rounded-tr-none rounded-br-none rounded-tl-md rounded-bl-md w-full text-sm focus:outline-none'
                  />
                  <button type='submit'
                  className='uppercase text-sm font-bold py-4 px-10 bg-primary text-white rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md'>
                    искать
                  </button>

                </form>
               </div>
        </div>
    </section>
  )
}

export default Filter
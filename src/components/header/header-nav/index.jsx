import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderNav = () => {
  const linkArr = ["Квадроциклы", "Катера", "Гидроциклы", "Лодки", "Вездеходы", "Снегоходы", "Двигатели", "Запчасти"]
  return (
    <nav className='py-4 bg-gray flex items-center justify-between mt-5 '>
      {
        linkArr.map((el, i) => (
          <Link to={`/products`} className='text-xl font-normal text-dark-300 transition-all hover:font-semibold' key={i} >{el}</Link>

        ))
      }
    </nav>
  )
}

export default HeaderNav
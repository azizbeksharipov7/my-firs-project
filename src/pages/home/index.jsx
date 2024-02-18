import React from 'react'
import { Header, Banner, Filter  } from 'components/index'
import Category from '../../components/category'



const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Filter/>
      <Category/>
    </div>
  )
}


export default Home
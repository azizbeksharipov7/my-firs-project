import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../../../assets/icons'
import { Button } from '@material-tailwind/react'
import CartModal from "../../cart-modal"
import LikeModal from "../../like-modal"

 const HeaderTop = () => {
    const[likeModalOpen, setLikeModalOpen]=useState(false)
    const [cartModal, setCartModal]=useState(false)
   
    function handleLikeModal(){
    setLikeModalOpen(!likeModalOpen)
  }
  
  function handleCart(){
    setCartModal(!cartModal)
  }

  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-12'>
            <a className='text-dark-300 text-xl font-bold ' href="#!">Магазины</a>
            <a className='text-dark-300 text-xl font-bold ' href="#!">Акции</a>
            <a className='text-dark-300 text-xl font-bold ' href="#!">Доставка и оплата</a>
        </div>
        <div>
            <Link to="/">
                <Icons.logoIcon/>
            </Link>
        </div>
        <div className='flex items-center justify-between w-[436px]'>
            <a className='text-dark-300 text-xl font-bold flex gap-x-2' href="#!">
                <Icons.locationIcon/>
                Москва,  ул. Науки  25
            </a>
            <div className='flex items-center gap-x-[10px]'>
                <Button variant='text' onClick={handleLikeModal} className='p-1'>
                    <Icons.likeIcon/>
                </Button>
                <Button variant='text' onClick={handleLikeModal} className='p-1'>
                    <Icons.userIcon/>
                </Button>
                <Button variant='text' onClick={handleCart} className='p-1'>
                    <Icons.shoppingCartIcon/>
                </Button>
            </div>
            <LikeModal open={likeModalOpen} handleModal={handleLikeModal}/>
            <CartModal open={cartModal} handleModal={handleCart}/>


        </div>
    </div>
  )
}

export default HeaderTop
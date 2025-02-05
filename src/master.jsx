import React from 'react'
import './index.css'
import './font/bootstrap-icons.min.css'

import Header from './pages/header/header'
import Slider from './pages/slider/slider'
import Store from './pages/store/store'
import Footer from './pages/footer/footer'

export default function Tags() {
  return (
    <main className='w-full 2xl:container mx-auto cursor-default bg-white ' >
        <Header/>
        <Slider/>
        <Store/>
        <Footer/>
    </main>
  )
}

import React from 'react'

import icon_one from "../../images/icon_6.png"
import icon_two from "../../images/icon_8.png"
import icon_three from "../../images/icon_9.png"

export default function Footer() {
    return (
        <>
            <Fist_footer />
            <Last_part />
        </>

    )
}



function Fist_footer() {
    return (
        <article className='py-10 px-4 md:px-14 flex flex-wrap items-center justify-center'>
            <div className='w-full flex items-center justify-center flex-wrap'>
                <figure className='w-full sm:w-1/2 lg:w-1/3 flex-row-reverse flex flex-wrap items-center justify-evenly'>
                    <img src={icon_one} alt="" loading='lazy' className='w-1/5' />
                    <figcaption className='w-8/12'>
                        <h4 className='text-right font-semibold text-base'>خرید آنلاین از بوک لند</h4>
                        <p className='text-right'>برای آشنایی با نحوه خرید آنلاین اینجا کلیک کنید</p>
                    </figcaption>
                </figure>
                <figure className='w-full sm:w-1/2 lg:w-1/3 flex-row-reverse flex flex-wrap items-center justify-evenly'>
                    <img src={icon_two} alt="" loading='lazy' className='w-1/5' />
                    <figcaption className='w-8/12'>
                        <h4 className='text-right font-semibold text-base'>ضمانت خرید و بازگشت</h4>
                        <p className='text-right'>تضمین اصالت محصصولات و امکان بازگشت کالا</p>
                    </figcaption>
                </figure>
                <figure className='w-full sm:w-1/2 lg:w-1/3 flex-row-reverse flex flex-wrap items-center justify-evenly'>
                    <img src={icon_three} alt="" loading='lazy' className='w-1/5' />
                    <figcaption className='w-8/12'>
                        <h4 className='text-right font-semibold text-base'>ارسال رایگان به سراسر ایران</h4>
                        <p className='text-right'>ارسال رایگان در سراسر کشور برای خرید بالای 450 هزار تومان</p>
                    </figcaption>
                </figure>

            </div>
            <div></div>
        </article>
    )
}


function Last_part() {

    return (
        <article className='w-full bg-black flex items-center justify-center flex-wrap p-10'>
            <div className='w-full p-5'>
                <h4 className='text-right text-gray-500 font-semibold text-xl md:text-2xl'>تماس با بوک لند</h4>
                <p className='text-white text-right text-base md:text-lg'>تلفن پشتیبانی : 86190852-021</p>
                <p className='text-white text-right text-base md:text-lg'>ساعت کاری : 9 الی 18 بجز روزهای تعطیل پنجشنبه ها 9 الی 14</p>
                <p className='text-white text-right text-base md:text-lg'>info@bookland.ir : ایمیل</p>
                <p className='text-white text-right text-base md:text-lg'>آدرس : تهران-خیابان خردمند جنوبی-خیابان آذرشهر-پلاک22-طبقه دوم </p>
            </div>
        </article>
    )
}
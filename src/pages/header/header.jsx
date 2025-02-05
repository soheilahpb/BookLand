import React, { Fragment, useContext } from 'react'
import logo from '../../images/RowIcon_98.jpg'
import { DynamicContext } from '../context/context'

export default function Header() {
    return (
        <header className='w-full flex flex-wrap'>
            <First_part />
            <Navbar />
        </header>
    )
}

function First_part() {
    const card = React.useRef()
    const { contextValue } = useContext(DynamicContext)
    let counter = 1

    //Toggle cart open/close
    const CardOpen = () => {
        if (counter % 2) {
            card.current.classList.add("h-auto")
            card.current.classList.remove("h-0")
            console.log("open card state");
        } else {
            card.current.classList.add("h-0")
            card.current.classList.remove("h-auto")
            console.log("close card state");
        }
        counter++
    }

    const deleteFromCard = (id)=>{
        console.log(id);
        console.log(contextValue);
        
        for (let i=0 ; i<contextValue.length ; i++){
            if (id == contextValue[i].id) {
                
                console.log(contextValue[i]);
                console.log("id"+contextValue[i].id);
                contextValue = contextValue.splice(i,1)
                break;
            }
        }
        // setContextValue(updatedvalue)
        
    }

    

    function cart() {
        contextValue ? (contextValue.map((val)=>{
            return(
                <figure key={val.id} className='p-3 flex items-center justify-center border-black border-2 w-[45%]'>
                    <figcaption className="w-2/3 p-4">
                        <div className="flex justify-between">
                            <span onClick={()=>{deleteFromCard(val.id)}} data-id={val.id}><i className="bi bi-trash3"></i></span>
                            <p>{val.name}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>{val.price}</p>
                            <input type="number" className="border-black w-1/5" />
                        </div>
                    </figcaption>
                    <img className="w-1/3" src={val.picture} alt="" />
                </figure>
            )
        })) :  (<p className='text-2xl p-6'>...سبد خرید شما خالی است</p>)
    }

    return (
        <>
            <article className='w-full py-4 px-8 flex flex-wrap items-center justify-evenly font-semibold relative'>
                <figure className="w-[40%] md:w-1/5 flex items-center justify-start">
                    <img src={logo} alt="" className="w-1/4" />
                    <figcaption className="text-[#FCC425] uppercase font-bold ml-1">
                        book land
                    </figcaption>
                </figure>
                <input type="text" placeholder="جستجوی عنوان"
                    className="p-1 items-center w-1/3 px-4 border border-black rounded-3xl my-2 hidden md:flex" />
                <i className="bi bi-person text-lg font-extrabold text-black -translate-x-20 hidden md:flex"></i>
                <div
                    className="border border-[#eee] bg-[#eee] group hover:bg-black hover:border-black duration-300 py-1 mx-2 rounded-3xl flex items-center justify-center w-[30%] sm:w-[22%] md:w-[18%] lg:w-[15%] xl:w-[12%]">
                    <p className="m-1 text-black group-hover:text-[#eee] duration-300 capitalize">ورود / عضویت</p>
                    <i className="bi bi-person text-lg font-extrabold text-black group-hover:text-[#eee] duration-300"></i>
                </div>
                <div className=" border group hover:border-black hover:bg-black duration-300 border-[#eee] bg-[#eee] py-1 mx-2 rounded-3xl w-[13%] sm:w-[11%] md:w-[9%] lg:w-[6%] xl:w-[5%]">
                    <div onClick={() => { CardOpen(event) }} className="flex items-center justify-evenly cursor-pointer">
                        <div className="w-6 h-6 bg-[#fcc425] rounded-full flex items-center justify-center">
                            <p className="text-sm font-semibold text-black text-center">{contextValue ? contextValue.length : 0}</p>
                        </div>
                        <i
                            className="bi bi-bag font-extrabold text-lg text-center group-hover:text-[#eee] duration-300"></i>
                    </div>
                    <div ref={card} className='bg-white w-full h-0 duration-500 absolute top-[100%] right-0 z-30 overflow-hidden flex flex-row-reverse items-center justify-evenly flex-wrap'>
                        {
                            contextValue ? (contextValue.map((val)=>{
                                return(
                                    <figure key={val.id} className='p-3 flex items-center justify-center border-black border-2 w-[45%]'>
                                        <figcaption className="w-2/3 p-4">
                                            <div className="flex justify-between">
                                                <span onClick={()=>{deleteFromCard(val.id)}} data-id={val.id}><i className="bi bi-trash3"></i></span>
                                                <p>{val.name}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p>{val.price}</p>
                                                <input type="number" className="border-black w-1/5" />
                                            </div>
                                        </figcaption>
                                        <img className="w-1/3" src={val.picture} alt="" />
                                    </figure>
                                )
                            })) :  (<p className='text-2xl p-6'>...سبد خرید شما خالی است</p>)
                        }
                    </div>
                </div>

                {/* md part starts here */}
                <List />
                <input type="text" placeholder='جستجوی عنوان' className='p-1 flex items-center w-[95%] sm:w-5/6 px-4 border border-black md:hidden rounded-3xl my-2' />
                <i className="bi bi-search text-lg font-extrabold text-black -translate-x-7 md:hidden"></i>

            </article>
        </>

    )
}

function Navbar() {
    return (
        <article className='w-full hidden md:flex bg-[#FCC425] items-center justify-between h-[50px] '>
            <ul className='flex items-center justify-center w-1/2 h-full relative z-10'>
                <li className='text-white h-full font-semibold text-center w-1/4 p-1 flex items-center justify-center cursor-pointer hover:bg-black duration-300 group capitalize'>
                    فروشگاه های ما
                    <ul className='w-screen h-0 bg-black absolute top-[100%] left-0 group-hover:h-full duration-300 flex items-center justify-evenly overflow-hidden px-16'>
                        <li
                            className="w-[10%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            شعبه پالادیوم تهران</li>
                        <li
                            className="w-[10%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            شعبه آوا سنتر تهران</li>
                        <li
                            className="w-[10%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            شعبه مارکیز تهران</li>
                        <li
                            className="w-[10%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            شعبه ارم شیراز</li>
                        <li
                            className="w-[10%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            شعبه شیراز مال</li>
                        <li
                            className="w-[10%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            شعبه بندر عباس مال</li>
                        <li
                            className="w-[10%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            شعبه میکا مال کیش</li>
                    </ul>
                </li>
            </ul>
            <ul className='flex items-center justify-center w-1/2 h-full relative z-10'>
                <li className='text-black h-full font-semibold text-center w-1/4 p-1 flex items-center justify-center cursor-pointer hover:bg-black duration-300 hover:text-[#fcc425] capitalize'>
                    کتاب کودک و نوجوان
                </li>
                <li className='text-black h-full font-semibold text-center w-1/3 p-1 flex items-center justify-center cursor-pointer hover:bg-black duration-300 hover:text-[#fcc425] group capitalize'>
                    کتاب بزرگسال
                    <ul className='w-screen h-0 bg-black absolute top-[100%] right-0 group-hover:h-full duration-300 flex items-center justify-evenly overflow-hidden px-16'>
                        <li
                            className="w-[9%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            عاشقانه</li>
                        <li
                            className="w-[9%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            تاریخ جهان</li>
                        <li
                            className="w-[9%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            روانشناسی</li>
                        <li
                            className="w-[9%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            مدیریت و اقتصاد</li>
                        <li
                            className="w-[9%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            هنر</li>
                        <li
                            className="w-[9%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            ادبیات داستانی</li>
                        <li
                            className="w-[9%] h-0 group-hover:h-auto text-[#fcc425] hover:text-white duration-300 font-light cursor-pointer ">
                            شعر معاصر</li>
                    </ul>
                </li>
            </ul>
        </article>
    )
}




// this is about mobile size of site
function List() {

    const open = React.useRef()
    const first = React.useRef()
    const sec = React.useRef()

    function _Open(e) {
        console.log(e);

        open.current.classList.add('w-full')
        open.current.classList.remove('w-0')
    }

    function _Close(e) {
        open.current.classList.add('w-0')
        open.current.classList.remove('w-full')
    }

    let i = 1
    function _Show(e) {
        if (i % 2) {
            first.current.classList.add('h-auto')
            first.current.classList.remove('h-0')
            console.log(i);
        }
        else {
            first.current.classList.add('h-0')
            first.current.classList.remove('h-auto')
            console.log(i);
        } i++

    }
    let j = 1
    function _show(e) {
        if (j % 2) {
            sec.current.classList.add('h-auto')
            sec.current.classList.remove('h-0')
            console.log(i);
        }
        else {
            sec.current.classList.add('h-0')
            sec.current.classList.remove('h-auto')
            console.log(j);
        } j++

    }

    return (
        <>
            <div onClick={_Open} className='cursor-pointer'>
                <i className="bi bi-list font-extrabold text-center text-2xl flex md:hidden"></i>
            </div>
            <div ref={open} className='md:hidden absolute right-0 w-0 h-screen bg-white flex flex-wrap justify-center items-start z-10 duration-500 top-[0] overflow-hidden'>
                <div className="row flex items-center justify-between w-full px-7 h-16">
                    <figure className="w-[40%] md:w-1/5 flex items-center justify-start">
                        <img src={logo} alt="" className="w-1/4" />
                        <figcaption className="text-[#FCC425] uppercase font-bold ml-1">
                            book land
                        </figcaption>
                    </figure>
                    <i onClick={_Close} className="bi bi-x-lg cursor-pointer text-xl"></i>
                </div>
                <ul className='w-full py-6 px-2 -mt-56 absolute top-80'>
                    <li onClick={_Show} className=' flex flex-wrap items-center py-2 px-1 overflow-hidden cursor-pointer font-bold'>کتاب بزرگسال
                        <i className="bi bi-chevron-compact-down text-sm ml-1 cursor-pointer"></i>
                        <ul ref={first} className='w-full p-2 flex flex-wrap h-0 overflow-hidden duration-300 cursor-default'>
                            <li className='py-[2px] px-2 w-1/2 border-b'>عاشقانه</li>
                            <li className='py-[2px] px-2 w-1/2 border-b'>تاریخ جهان </li>
                            <li className='py-[2px] px-2 w-1/2 border-b'>روانشناسی</li>
                            <li className='py-[2px] px-2 w-1/2 border-b'>مدیریت و اقتصاد</li>
                            <li className='py-[2px] px-2 w-1/2 border-b'>هنر</li>
                            <li className='py-[2px] px-2 w-1/2 border-b'>ادبیات داستانی</li>
                            <li className='py-[2px] px-2 w-1/2 '>شعر معاصر</li>
                        </ul>
                    </li>
                    <li className=' flex items-center py-4 px-1 mb-1 font-bold'>کودک و نوجوان</li>
                    <li onClick={_show} className=' flex flex-wrap items-center py-2 px-1 cursor-pointer font-bold'>فروشگاه های ما
                        <i className="bi bi-chevron-compact-down text-sm ml-1"></i>
                        <ul ref={sec} className='p-2 flex flex-wrap h-0 overflow-hidden duration-300 cursor-default w-full'>
                            <li className='border-b py-[2px] px-2 w-1/2 '>شعبه پالادیوم  تهران</li>
                            <li className='border-b py-[2px] px-2 w-1/2 '>شعبه آوا سنتر تهران</li>
                            <li className='py-[2px] px-2 w-1/2 '>شعبه مارکیز تهران</li>
                            <li className='py-[2px] px-2 w-1/2 '>شعبه ارم شیراز</li>
                            <li className='py-[2px] px-2 w-1/2 '>شعبه شیراز مال</li>
                            <li className='py-[2px] px-2 w-1/2 '>شعبه بندر عباس مال</li>
                            <li className='py-[2px] px-2 w-1/2 '>شعبه میکا مال کیش</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}
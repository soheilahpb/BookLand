import React, { useContext, useEffect, useState } from "react";
import logo from "../../images/RowIcon_98.jpg";
import { DynamicContext } from "../context/context";

export default function Store() {
    // Defining states
    const [data, setData] = useState([]);
    const [card, setCard] = useState([]);
    const [page, setPage] = useState(1);
    const [posts] = useState(30); // Fixed posts per page
    const [pagination, setPagination] = useState([]);
    const { setContextValue } = useContext(DynamicContext);

    // Create pagination on initial render
    useEffect(() => {
        const totalPages = Math.ceil(posts / 6);
        setPagination(Array.from({ length: totalPages }, (_, i) => i + 1));
    }, [posts]);

    // Fetch data based on the current page
    useEffect(() => {
        const url = new URL("https://6773ad2177a26d4701c604a4.mockapi.io/books");
        url.searchParams.append("page", page);
        url.searchParams.append("limit", 6);

        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Failed to fetch data");
            })
            .then((tasks) => setData(tasks))
            .catch((error) => console.error(error));
    }, [page]);

    // Add items to the card and update context
    const AddCard = (id, name, pic, price, e) => {
        if (e.target.getAttribute("data-status") === "off") {
            const newItem = { id, name, picture: pic, price };
            const updatedCard = [...card, newItem];

            setCard(updatedCard);
            setContextValue(updatedCard); // Update context with the new card state
            e.target.setAttribute("data-status", "on");
        }
    };

    // Remove item from the card
    const mydelete = (e) => {
        const itemId = parseInt(e.target.getAttribute("data-id"), 10);
        const updatedCard = card.filter((item) => item.id !== itemId);

        setCard(updatedCard); // Update card state
        setContextValue(updatedCard); // Update context

        // Reset button status for the deleted item
        const button = document.querySelector(`button[data-status="on"][data-id="${itemId}"]`);
        if (button) {
            button.setAttribute("data-status", "off");
        }
    };


    return (
        <>
            <article className="px-4 md:px-14 py-28 flex items-center justify-end flex-wrap">
                <div className="flex w-full justify-end items-center p-2">
                    <h3 className="font-extrabold text-3xl border-black border-b-2 text-end w-full p-4">
                        کتاب ها
                    </h3>
                    <img loading="lazy" src={logo} alt="Logo" />
                </div>

                {/* Books Grid */}
                <article className="flex items-center justify-center flex-wrap">
                    {data.map((val) => (
                        <figure
                            key={val.id}
                            className="w-full sm:w-1/3 md:w-3/12 lg:w-3/12 h-[300px] sm:h-[420px] mx-3 my-2 flex items-start justify-center flex-wrap bg-[#f1f1f1c9] rounded-md pt-2 pb-0 flex-row-reverse"
                        >
                            <img
                                loading="lazy"
                                src={val.picture}
                                alt=""
                                className="w-1/2 sm:w-4/5 h-full sm:h-3/4 sm:object-contain hover:scale-110 duration-300 z-10"
                            />
                            <figcaption className="w-1/2 sm:w-11/12 flex justify-center flex-wrap h-full sm:h-1/4 relative">
                                <div className="w-full py-6 sm:py-0 ps-0 pe-3">
                                    <p className="m-1 w-full flex justify-end items-center font-extrabold text-base text-right">
                                        {val.name}
                                    </p>
                                    <p className="m-1 w-full flex justify-end items-center font-light text-xs text-right">
                                        {val.author}
                                    </p>
                                    <p className="m-1 w-full flex justify-start items-center font-bold text-base text-right">
                                        {val.price}
                                    </p>
                                </div>
                                <button
                                    data-status="off"
                                    data-id={val.id}
                                    onClick={(e) => AddCard(val.id, val.name, val.picture, val.price, e)}
                                    className="border border-black bg-black text-white w-full absolute bottom-0 py-2 sm:p-0"
                                >
                                    افزودن به سبد خرید
                                </button>
                            </figcaption>
                        </figure>
                    ))}
                </article>

                {/* Pagination */}
                <ul className="w-full mt-5 flex items-center justify-center py-4 px-8">
                    {pagination.map((num) => (
                        <li
                            key={num}
                            onClick={() => setPage(num)}
                            className="border-2 mx-4 shadow-lg py-1 px-2 cursor-pointer"
                        >
                            {num}
                        </li>
                    ))}
                </ul>
            </article>

            {/* <Cart card={card} mydelete={mydelete} /> */}
        </>
    );
}

// Cart Component
function Cart({ card, mydelete }) {
    return (
        <ul className="w-full overflow-auto flex items-center justify-center flex-wrap">
            {card.map((val) => (
                <figure key={val.id} className="w-[45%] flex p-5">
                    <figcaption className="w-2/3 p-4">
                        <div className="flex justify-between">
                            <span data-id={val.id} onClick={mydelete} className="cursor-pointer text-red-500">
                                Delete
                            </span>
                            <p>{val.name}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>{val.price}</p>
                            <input type="number" className="border-black w-1/5" />
                        </div>
                    </figcaption>
                    <img className="w-1/3" src={val.picture} alt="" />
                </figure>
            ))}
        </ul>
    );
}

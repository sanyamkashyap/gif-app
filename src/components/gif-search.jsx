import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2"

const Gifsearch = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const searchGifs = async () => {
        if (input.trim() === "") {
            return;
        }

        navigate(`/search/${input}`);
    };

    return (
        <div className='flex relative'>
            <input type="text"
                value={input}
                className='bg-white w-full h-17 text-black rounded-tl rounded-bl outline-none text-[22px] pl-3'
                placeholder='Search All Gifs and Stickers'
                onChange={(e) => setInput(e.target.value)} />
            {
                input && (
                    <button
                        onClick={() => setInput("")}
                        className='absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-6'
                    >
                        <HiMiniXMark size={22} />
                    </button>
                )
            }

            <button
                className='bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 h-17 rounded-tr rounded-br '
                onClick={searchGifs}>
                <HiOutlineMagnifyingGlass size={35} className='-scale-x-100' ></HiOutlineMagnifyingGlass>
            </button>
        </div>
    )
}

export default Gifsearch
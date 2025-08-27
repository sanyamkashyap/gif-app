import React, { useContext, useEffect } from 'react'
import { HiEllipsisVertical } from "react-icons/hi2"
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { GifContex } from '../contex/gif-contex';

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);

    const { gf, filter, setFilter, favoirtes } = useContext(GifContex)

    const fetchGifCatogries = async () => {
        const { data } = await gf.categories();
        console.log(data)
        setCategories(data);
    };

    useEffect(() => {
        fetchGifCatogries();
    }, []);

    return (
        <nav>
            <div className='relative flex gap-4 justify-between items-center mb-2'>
                <Link to="/" className='flex gap-2'>
                    <img src='/logo.svg' className='w-8' alt='giphy logo'></img>
                    <h1 className='text-4xl font-bold tracking-tight cursor-pointer'>
                        GIPHY
                    </h1>
                </Link>

                <div className='flex font-bold gap-2 items-center'>
                    {categories?.slice(0, 5)?.map((category) => (
                        <Link key={category.name}
                            to={`/${category.name_encoded}`}
                            className='px-4 py-1 hover-gradient border-b-4 hidden lg:block'>
                            {category.name}
                        </Link>
                    ))}

                    <button onClick={() => setShowCategories(!showCategories)}>
                        <HiEllipsisVertical size={35} className={`py-0.5 hover-gradient ${showCategories ? "gradient" : ''
                            } border-b-4 hidden lg:block`} />
                    </button>
                </div>

                {
                    showCategories && <div className='absolute right-0 top-14 gradient px-10 pb-9 w-full z-20'>
                        <span className='text-3xl font-extrabold' >Catogries</span>
                        <hr className='bg-gray-100 opacity-50 my-5' />
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
                            {categories.map((category) => (
                                <Link className='font-bold'
                                    key={category.name}
                                    to={categories.name_encoded}
                                >
                                    {category.name}
                                </Link>

                            ))}
                        </div>
                    </div>
                }
            </div>
            {/* search */}
        </nav>
    )
}

export default Header
import React, { useContext, useEffect } from 'react'
import Gif from '../components/gif';
import { GifContex } from '../contex/gif-contex';

const Home = () => {
    const { gf, gifs, setGifs, filter } = useContext(GifContex);

    const fetchTradingGifs = async () => {
        const { data } = await gf.trending({
            limit: 20,
            type: filter,
            rating: 'g',
        });

        setGifs(data);
    }

    useEffect(() => {
        fetchTradingGifs()
    }, [filter])

    return (
        <div className='container mx-auto lg:columns-4 md:columns-3 columns-2'>
            {
                gifs.map((gif) => (
                    <Gif gif={gif} key={gif.title}></Gif>
                ))
            }
        </div>
    )
}

export default Home
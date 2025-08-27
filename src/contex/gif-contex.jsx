import { createContext, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api"

export const GifContex = createContext();

const GifProvider = ({ children }) => {
    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState("gifs");
    const [favorites, setFavorites] = useState([]);

    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

    return <GifContex.Provider value={{ gf, gifs, setGifs, filter, setFilter, favorites }}>
        {children}
    </GifContex.Provider>
}

export default GifProvider;


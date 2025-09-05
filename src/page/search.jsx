import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GifContex } from "../contex/gif-contex";
import FilterGif from "../components/filter";
import Gif from "../components/gif";

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState([])
    const { gf, filter } = useContext(GifContex);
    const { query } = useParams();

    const fetchSearchResults = async () => {
        const { data } = await gf.search(query, {
            sort: "relevent",
            lang: 'en',
            type: filter,
            limit: 20,
        })
        setSearchResult(data);
    }

    useEffect(() => {
        fetchSearchResults()
    }, [filter])

    return (
        <div className="my-4">
            <FilterGif />
            {searchResult.length > 0 ? (
                <div className="lg:columns-4 md:columns-3 columns-2">
                    {searchResult.map((gif) => (
                        <Gif gif={gif} key={gif.id} />
                    ))}
                </div>
            ) : (
                <span>no gifs found</span>
            )}
        </div>
    )
}

export default SearchPage
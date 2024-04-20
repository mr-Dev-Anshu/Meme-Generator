import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { memes } from "../api/memes";
const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        memes().then(memes => setData(memes.data.memes))
    }, [])

    return ( 
        <div className="flex flex-wrap">
            {data.map(el => (<Card img={el.url} title={el.name} />))
            }
        </div>
    )
}

export default Home
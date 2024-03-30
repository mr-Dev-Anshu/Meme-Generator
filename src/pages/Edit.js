import Text from "../components/Text";
import { useSearchParams } from "react-router-dom";
import React, { useState, createRef } from "react";
import {exportComponentAsJPEG} from "react-component-export-image"

const Edit = () => {
    const [params] = useSearchParams()
    const [count, setCount] = useState(0)

    const memeRef = createRef()

    const addText = () => {
        setCount(count + 1)
    }

    return <div>
        <div  className="w-[30%]" ref={memeRef}>
            <img src={params.get("url")} alt="" />
            {
                Array(count).fill(0).map((e) => (
                    <Text />
                ))
            }
        </div>
        <button className="bg-red-400 p-2 rounded-md font-semibold m-2" onClick={addText}>Add Text</button>
        <button className="bg-red-400 p-2 rounded-md font-semibold m-2" onClick={(e) => exportComponentAsJPEG(memeRef)} >Save</button>
    </div>
}

export default Edit
import React from "react";
// import Edit from "../pages/Edit";
import { useNavigate } from "react-router-dom"
const Card = (props) => {

    const navigate = useNavigate()

    return (
        <div className="border-2 border-black bg-white rounded-md h-311 w-[23%] m-2">
            <div className="flex justify-center items-center h-[85%]"><img  src={props.img} alt="" /></div>
            <div className="flex m-1 justify-around">
            <p className="font-semibold mx-2">{props.title}</p>
            <button className="bg-red-400 p-1 px-2 rounded-md font-semibold mx-2" onClick={(e) => navigate(`/edit?url=${props.img}`)} variant="primary" >Edit</button>
            </div>
           </div>
    )
}

export default Card
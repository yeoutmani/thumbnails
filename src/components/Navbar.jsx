import React from "react";
import {BiSearch} from 'react-icons/bi'


const Navbar = () => {
    return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
        <div>
            <h1>THUMBNAILS</h1>
        </div>
        <div className="flex">
            <BiSearch className="icon"/>
        </div>
    </div>)
}

export default Navbar
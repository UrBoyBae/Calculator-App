import React, {useState} from "react";

function Toggle() {
    return (
        <div className="flex justify-start mb-4">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <input type="checkbox" name="toggleTheme" id="toggleTheme" className="hidden"/>
            <label htmlFor="toggleTheme" className="flex justify-between relative bg-white w-[68px] h-[32px] p-1 rounded-full cursor-pointer gap-[5px]">
                <span class="material-symbols-rounded text-[#4B5EFC]">
                    partly_cloudy_day
                </span>
                <span class="material-symbols-rounded text-[#4B5EFC]">
                    nights_stay
                </span>
                <div className="bg-[#4B5EFC] rounded-full w-6 h-6 absolute right-1" id="buttonSwitch"></div>
            </label>
        </div>
    )
}

export default Toggle
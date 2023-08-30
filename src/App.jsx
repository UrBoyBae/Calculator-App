import './App.css';
import React, { useState } from 'react';

function App() {

  // Toggle Theme Condition
  const [theme, setTheme] = useState(false)
  const toggleDarkMode = () => {
    setTheme(!theme)
    setThemeInStorage(theme === false ? 'dark' : 'light')
  }
  const setThemeInStorage = (mode) => {
    localStorage.setItem('mode', mode)
  }
  const checkedInput = (localStorage.getItem('mode') === 'dark' ? true : false)
  
  // Calculate
  const [calculate, setCalculate] = useState("")
  const [result, setResult] = useState("")
  const startCalculate = (e) => {
    setCalculate(calculate.concat(e.target.name));
  }
  const clear = () => {
    setCalculate("")
    setResult("")
  }
  const calculating = () => {
    try {
      setResult(eval(calculate).toString())
    } catch (error) {
      setResult("Error")
    }
  } 
  const backspace = () => {
    setCalculate(calculate.slice(0, calculate.length - 1))
  }

  return (
    <div className='w-full h-screen bg-[#171C22] flex justify-center items-center'>
      <div className={localStorage.getItem('mode') === 'dark' ? 'dark' : ''}>
        <div className="h-[95vh] w-[385px] sm:h-4/5 bg-[#F1F2F3] dark:bg-[#17171C] rounded-xl flex flex-col py-6 px-6">
          <div className="flex justify-start mb-4">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <input type="checkbox" name="toggleTheme" id="toggleTheme" checked={checkedInput} className="hidden" onClick={toggleDarkMode} />
            <label htmlFor="toggleTheme" className="flex justify-between items-center relative bg-white dark:bg-[#2E2F38] w-[68px] h-[32px] p-1 rounded-full cursor-pointer gap-[5px] shadow-md">
              <span class="material-symbols-rounded text-[#4B5EFC] text-[20px]">
                light_mode
              </span>
              <span class="material-symbols-rounded text-[#4B5EFC] text-[25px]">
                dark_mode
              </span>
              <div className="bg-[#848587] rounded-full w-6 h-6 absolute toggleSwitch" id="buttonSwitch"></div>
            </label>
          </div>
          <div className='flex flex-col items-end mb-4'>
            <input type="text" className='mr-1 text-[28px] font-light text-[#848587] w-full bg-transparent text-right focus:outline-none' value={calculate != "" ? calculate : 0} disabled/>              
            <input type="text" className='text-[63px] font-light dark:text-[#fff] w-full bg-transparent text-right focus:outline-none' value={result != "" ? result : 0} disabled/>
          </div>
          <div className="grid grid-cols-4 grid-rows-5 gap-4">
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#2E3A48] text-[24px] text-[#fff]' onClick={clear} name="clear">
                C
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-not-allowed shadow-md bg-[#2E3A48] text-[24px] text-[#fff]' onClick={startCalculate} name="+/-" disabled>
                +/-
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#2E3A48] text-[24px] text-[#fff]' onClick={startCalculate} name="%">
                %
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#6344D4] text-[24px] text-[#fff]' onClick={startCalculate} name="/">
              &divide;
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] text-[24px] dark:bg-[#2E2F38] dark:text-[#fff]' onClick={startCalculate} name="7">
                7
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] text-[24px] dark:bg-[#2E2F38] dark:text-[#fff]' onClick={startCalculate} name="8">
                8
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] text-[24px] dark:bg-[#2E2F38] dark:text-[#fff]' onClick={startCalculate} name="9">
                9
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#6344D4] text-[24px] text-[#fff]' onClick={startCalculate} name="*">
              &times;
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] text-[24px] dark:bg-[#2E2F38] dark:text-[#fff]' onClick={startCalculate} name="4">
                4
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] text-[24px] dark:bg-[#2E2F38] dark:text-[#fff]' onClick={startCalculate} name="5">
                5
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] text-[24px] dark:bg-[#2E2F38] dark:text-[#fff]' onClick={startCalculate} name="6">
                6
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#6344D4] text-[24px] text-[#fff]' onClick={startCalculate} name="-">
              &ndash;
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] text-[24px] dark:bg-[#2E2F38] dark:text-[#fff]' onClick={startCalculate} name="1">
                1
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] text-[24px] dark:bg-[#2E2F38] dark:text-[#fff]' onClick={startCalculate} name="2">
                2
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] text-[24px] dark:bg-[#2E2F38] dark:text-[#fff]' onClick={startCalculate} name="3">
                3
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#6344D4] text-[24px] text-[#fff]' onClick={startCalculate} name="+">
                +
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] text-[24px] dark:bg-[#2E2F38] dark:text-[#fff]' onClick={startCalculate} name=".">
                .
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] text-[24px] dark:bg-[#2E2F38] dark:text-[#fff]' onClick={startCalculate} name="0">
                0
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] dark:bg-[#2E2F38] dark:text-[#fff]' onClick={backspace} name="backspace">
              <p className='material-symbols-rounded text-[24px]'>
                backspace
              </p>
            </button>
            <button className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#A430FF] text-[24px] text-[#fff]' onClick={calculating} name="result">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(false)
  const toggleDarkMode = () => {
    setTheme(!theme)
    setThemeInStorage(theme === false ? 'dark' : 'light')
  }
  const setThemeInStorage = (mode) => {
    localStorage.setItem('mode', mode)
  }
  const checkedInput = (localStorage.getItem('mode') === 'dark' ? true : false)

  return (
    <div className='w-full h-screen bg-[#171C22] flex justify-center items-center'>
      <div className={localStorage.getItem('mode') === 'dark' ? 'dark' : ''}>
        <div className="h-[95vh] w-[385px] bg-[#F1F2F3] dark:bg-[#17171C] rounded-xl flex flex-col py-5 px-6">
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
            <p className='text-[25px] font-light text-[#848587]'>
              6,291÷5
            </p>
            <p className='text-[60px] font-light dark:text-[#fff]'>
              1,258.2
            </p>
          </div>
          <div className="grid grid-cols-4 grid-rows-5 gap-4">
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#2E3A48]'>
              <p className='text-[24px] text-[#fff]'>
                C
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#2E3A48]'>
              <p className='text-[24px] text-[#fff]'>
                +/-
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#2E3A48]'>
              <p className='text-[24px] text-[#fff]'>
                %
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#6344D4]'>
              <p className='text-[24px] text-[#fff]'>
                ÷
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] dark:bg-[#2E2F38] dark:text-[#fff]'>
              <p className='text-[24px]'>
                7
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] dark:bg-[#2E2F38] dark:text-[#fff]'>
              <p className='text-[24px]'>
                8
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] dark:bg-[#2E2F38] dark:text-[#fff]'>
              <p className='text-[24px]'>
                9
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#6344D4]'>
              <p className='text-[24px] text-[#fff]'>
                x
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] dark:bg-[#2E2F38] dark:text-[#fff]'>
              <p className='text-[24px]'>
                4
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] dark:bg-[#2E2F38] dark:text-[#fff]'>
              <p className='text-[24px]'>
                5
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] dark:bg-[#2E2F38] dark:text-[#fff]'>
              <p className='text-[24px]'>
                6
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#6344D4]'>
              <p className='text-[24px] text-[#fff]'>
                -
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] dark:bg-[#2E2F38] dark:text-[#fff]'>
              <p className='text-[24px]'>
                1
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] dark:bg-[#2E2F38] dark:text-[#fff]'>
              <p className='text-[24px]'>
                2
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] dark:bg-[#2E2F38] dark:text-[#fff]'>
              <p className='text-[24px]'>
                3
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#6344D4]'>
              <p className='text-[24px] text-[#fff]'>
                +
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] dark:bg-[#2E2F38] dark:text-[#fff]'>
              <p className='text-[24px]'>
                .
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] dark:bg-[#2E2F38] dark:text-[#fff]'>
              <p className='text-[24px]'>
                0
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#FFF] dark:bg-[#2E2F38] dark:text-[#fff]'>
              <p className='material-symbols-rounded text-[24px]'>
                backspace
              </p>
            </div>
            <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md bg-[#A430FF]'>
              <p className='text-[24px] text-[#fff]'>
                =
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

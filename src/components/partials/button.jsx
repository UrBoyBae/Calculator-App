import React from 'react'

function Button({ background, data, color }) {
  return (
    <div className='w-[72px] h-[72px] rounded-[24px] flex justify-center items-center cursor-pointer shadow-md' style={{backgroundColor: background}}>
        {color ? (
          <p className='text-[24px]' style={{color: color}}>
            {data}
          </p>
        ) : (
          <p className='text-[24px]'>
            {data}
          </p>
        )}
    </div>
  )
}

export default Button
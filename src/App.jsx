import './App.css';
import React from 'react';
import Toggle from './components/partials/toggle';
import Monitor from './components/partials/monitor';
import Button from './components/partials/button';

function App() {
  return (
    <div className='w-full h-screen bg-[#171C22] flex justify-center items-center'>
      <div className="h-[95vh] w-[385px] bg-[#F1F2F3] rounded-xl flex flex-col py-5 px-6">
        <Toggle />
        <Monitor />
        <div className="grid grid-cols-4 grid-rows-5 gap-4">
          <Button background='#2E3A48' data='C' color='#fff'/>
          <Button background='#2E3A48' data='+/-' color='#fff'/>
          <Button background='#2E3A48' data='%' color='#fff'/>
          <Button background='#6344D4' data='÷' color='#fff'/>
          <Button background='#fff' data='7'/>
          <Button background='#fff' data='8'/>
          <Button background='#fff' data='9'/>
          <Button background='#6344D4' data='x' color='#fff'/>
          <Button background='#fff' data='4'/>
          <Button background='#fff' data='5'/>
          <Button background='#fff' data='6'/>
          <Button background='#6344D4' data='-' color='#fff'/>
          <Button background='#fff' data='1'/>
          <Button background='#fff' data='2'/>
          <Button background='#fff' data='3'/>
          <Button background='#6344D4' data='+' color='#fff'/>
          <Button background='#fff' data='.'/>
          <Button background='#fff' data='0'/>
          <Button background='#fff' data='Del'/>
          <Button background='#A430FF' data='=' color='#fff'/>
          {/* <Button background='linear-gradient(to right, #A430FF, #F318AD, #FF2171);'/> */}
        </div>
      </div>
    </div>
  );
}

export default App;

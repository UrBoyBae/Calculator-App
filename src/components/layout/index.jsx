// import './App.css';
import Button from '../partials/button';
import Monitor from '../partials/monitor'

function App() {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='bg-white w-96 h-fit flex flex-col items-center border border-gray-200 rounded-xl drop-shadow-xl pt-8 pb-10 px-8 gap-8'>
        <Monitor />
        <div className='grid grid-cols-3 grid-rows-3 gap-4'>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;

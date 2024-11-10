import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import App from '../App';

function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <div className="flex-grow bg-white text-deep-purple flex flex-col gap-6 justify-center items-center">
        <div className='font-bold text-6xl'>
          CRAFT LEARNERS
        </div>
        <div className='text-2xl flex flex-col gap-4 text-center'>
          <p>
            THE ONLY WEBSITE YOU NEED TO UNDERSTAND C CONCEPTS AND SCORE BEST ON YOUR C EXAM.
          </p>
          <p>
            ALSO, PREPARED EXCLUSIVELY BASED ON <span className='text-purple-800'>DEC CURRICULUM.</span>
          </p>
        </div>
       <Link to='/login'><div className='bg-my-yellow hover:cursor-pointer  p-4 rounded-lg border-t-[3px] border-l-[3px] border-r-[5px] border-b-[5px] hover:border-r-[6px] hover:border-b-[6px] hover:cursor-pointer border-black '>
            <p className='font-bold'>START LEARNING NOW</p>
        </div></Link> 

      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className='flex justify-between p-8 border-b items-center h-[5.5em]'>
        <Link to='/playground'>
          <h1 className='hover:text-blue-500 hover:cursor-pointer'>code online! &lt;/&gt;</h1>
        </Link>
        <h1>Welcome to your Dashboard</h1>
        <p>Logged in as: {user.email}</p>
      </div>

      <div className="flex w-full bg-white text-deep-purple flex-col gap-6 justify-center items-center p-4">
        <div className='font-bold text-6xl mb-6'>
          STUDY TO ACE C!
        </div>
        <div className='text-2xl text-white flex flex-wrap justify-center gap-4'>
          <div className='bg-my-green w-[15em] h-[12em] p-4 flex flex-col items-start rounded-lg border-t-[3px] border-l-[3px] border-r-[5px] border-b-[5px] hover:border-r-[7px] hover:border-b-[7px] hover:cursor-pointer border-black'>
            <h1>icon</h1>
            <h1 className='font-semibold mt-2'>CHAPTER 1</h1>
            <p className='mt-2'>
              PRACTICE EXAM-LIKE CODE PROBLEMS ON THE WEBSITE. IT'S FUN AND CHALLENGING!
            </p>
            <Link to='/playground' className='mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 block text-center w-full'>
              Practice
            </Link>
          </div>

          <div className='bg-my-green w-[15em] h-[12em] p-4 flex flex-col items-start rounded-lg border-t-[3px] border-l-[3px] border-r-[5px] border-b-[5px] hover:border-r-[7px] hover:border-b-[7px] hover:cursor-pointer border-black'>
            <h1>icon</h1>
            <h1 className='font-semibold mt-2'>CHAPTER 2</h1>
            <p className='mt-2'>
              PRACTICE EXAM-LIKE CODE PROBLEMS ON THE WEBSITE. IT'S FUN AND CHALLENGING!
            </p>
            <Link to='/playground' className='mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 block text-center w-full'>
              Practice
            </Link>
          </div>

          <div className='bg-my-green w-[15em] h-[12em] p-4 flex flex-col items-start rounded-lg border-t-[3px] border-l-[3px] border-r-[5px] border-b-[5px] hover:border-r-[7px] hover:border-b-[7px] hover:cursor-pointer border-black'>
            <h1>icon</h1>
            <h1 className='font-semibold mt-2'>CHAPTER 3</h1>
            <p className='mt-2'>
              PRACTICE EXAM-LIKE CODE PROBLEMS ON THE WEBSITE. IT'S FUN AND CHALLENGING!
            </p>
            <Link to='/playground' className='mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 block text-center w-full'>
              Practice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

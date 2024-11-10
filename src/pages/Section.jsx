import React from 'react';

function Section() {
  return (
    <div className='h-screen flex'>
      <div className="flex w-full bg-white text-deep-purple flex-col gap-6 justify-center items-center p-4">
        <div className='font-bold text-6xl'>
          WHY CRAFT LEARNERS?
        </div>
        <div className='text-2xl text-white flex flex-nowrap justify-center gap-4'>
          <div className='bg-my-green w-[15em] h-[10em] p-4 flex flex-col items-start rounded-lg border-t-[3px] border-l-[3px] border-r-[5px] border-b-[5px] hover:border-r-[7px] hover:border-b-[7px] hover:cursor-pointer border-black'>
            <h1>icon</h1>
            <h1 className='font-semibold mt-2'>WRITE CODE PROBLEMS</h1>
            <p className='mt-2'>
              PRACTICE EXAM-LIKE CODE PROBLEMS ON THE WEBSITE. IT'S FUN AND CHALLENGING!
            </p>
          </div>
          <div className='bg-my-green w-[15em] h-[10em] p-4 flex flex-col items-start rounded-lg border-t-[3px] border-l-[3px] border-r-[5px] border-b-[5px] hover:border-r-[7px] hover:border-b-[7px] hover:cursor-pointer border-black'>
            <h1>icon</h1>
            <h1 className='font-semibold mt-2'>WRITE CODE PROBLEMS</h1>
            <p className='mt-2'>
              PRACTICE EXAM-LIKE CODE PROBLEMS ON THE WEBSITE. IT'S FUN AND CHALLENGING!
            </p>
          </div>
          <div className='bg-my-green w-[15em] h-[10em] p-4 flex flex-col items-start rounded-lg border-t-[3px] border-l-[3px] border-r-[5px] border-b-[5px] hover:border-r-[7px] hover:border-b-[7px] hover:cursor-pointer border-black'>
            <h1>icon</h1>
            <h1 className='font-semibold mt-2'>WRITE CODE PROBLEMS</h1>
            <p className='mt-2'>
              PRACTICE EXAM-LIKE CODE PROBLEMS ON THE WEBSITE. IT'S FUN AND CHALLENGING!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;

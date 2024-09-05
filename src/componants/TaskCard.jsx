import React, { useState } from 'react';
import p1 from '../assets/img/ToDo/p1.svg';
import p2 from '../assets/img/ToDo/p2.svg';
import p3 from '../assets/img/ToDo/p3.svg';
import clock from '../assets/img/ToDo/clock.svg';
import editicon from '../assets/img/navbar/editbar.svg';
import mark from '../assets/img/ToDo/mark.svg';
import back from '../assets/img/notification/back.svg'
import discription from '../assets/img/notification/description.svg'
import afent from '../assets/img/notification/@fent.svg'
import gallary from '../assets/img/notification/gallary.svg'
import save from '../assets/img/notification/save.svg'
import move from '../assets/img/notification/move.svg'
import copy from '../assets/img/notification/copy.svg'
import achive from '../assets/img/notification/achive.svg'
import watch from '../assets/img/notification/watch.svg'
import Modal from './Model';
const TaskCard = ({ title, description, avatars = [p1, p2, p3], timeLeft, timePeriod, image }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEditClick = () => {
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false); 
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow flex flex-col justify-between">
      <div className="flex justify-between items-center mb-2">
        <div className="text-md font-semibold p-2 text-black dark:text-white">
          {title}
        </div>
        <img src={editicon} alt="edit" className="h-11 w-11 px-3 cursor-pointer" onClick={handleEditClick} />
      </div>
      <div className="flex flex-col flex-grow">
        {image && <img src={image} alt={title} className="rounded-lg h-full w-full object-cover my-2" />}
        <p className="text-gray-700 text-sm dark:text-gray-300 mt-2">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex -space-x-3">
          {avatars.map((avatar, index) => (
            <img key={index} src={avatar} alt={`Avatar ${index}`} className="w-7 h-7 rounded-full border-2 border-white" />
          ))}
        </div>
        <div className="flex items-center space-x-2">
          {timeLeft && (
            <div className="flex text-violet-800 font-medium text-sm  rounded-lg px-3 py-1  bg-violet-100 dark:bg-voilet-200 gap-1">
              <img src={clock} alt="clock" className="h-5 w-4 " />
              {timeLeft}
            </div>
          )}
          {timePeriod && (
            <div className="flex text-teal-800 font-semibold border rounded-md px-3 bg-blue-100 dark:bg-green-200 gap-1">
              <img src={mark} alt="mark" className="h-4 w-4 mt-1" />
              {timePeriod}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}

      <Modal isOpen={isModalOpen} onClose={closeModal}>

        <div className='max-h-screen overflow-y-auto '  >
          <div>
            <div className='flex  pb-3 justify-between '>
              <h1 className='text-lg font-semibold dark:text-white '>Edit task</h1>
              <button onClick={closeModal}>
                <img src={back} alt="Back" className="h-6 w-6  " />
              </button>
            </div>
            <hr />

            <div>
              <h1 className='text-xl font-semibold my-2 dark:text-white'>Redesign Themesberg Homepage</h1>
              <p className='text-xs text-gray-400 ' > Added by <span className='text-xs text-blue-600 py-3"'>Bonnie Green,</span>22 hours ago</p>
            </div>
            <div className='flex flex-row gap-4 my-2'>
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <img key={index} src={avatar} alt={`Avatar ${index}`} className="w-6 h-6 rounded-full border-2 border-white" />
                ))}
              </div>
              <button className='border rounded-md  font-medium px-2  text-center'>
                <p className='text-xs  dark:text-white'><span className='text-base font-bold dark:text-white'> + </span> Join </p>
              </button>
              <button className='border rounded-md  font-medium px-2  text-center'>
                <p className='text-xs  dark:text-white'><span className='text-base font-bold '> @ </span> Attachment </p>
              </button>
            </div>
            <div>
              <div className='flex gap-1'>
                <img src={discription} alt='description' className='h-4 w-4 mt-1  dark:bg-white ' />
                <h2 className='font-medium  dark:text-white '>Description</h2>
              </div >
              <p className='text-sm font-normal pb-1 text-gray-400'>I made some wireframes that we would like you to follow since we are building it in Google’s Material Design (Please learn more about this and see how to  improve standard material design into something beautiful). But besides that,you can just do it how you like.<br /></p>
              <p className='text-sm font-normal pb-1 text-gray-400'>Next Friday should be done. Next Monday we should deliver the first iteration. Make sure, we have a good result to be delivered by the day.</p>
              <p className='text-xs text-blue-600 font-medium mb-3'>Show Full Description</p>
            </div>
          </div>
        </div>

        <div className='p-4  rounded-md w-full  bg-gray-100  dark:bg-gray-700 '>
          <input placeholder='Write a comment...' className='bg-gray-100  pb-20  dark:bg-gray-700' />
          <hr />
          <div className='flex justify-between'>
            <button className=' shadow-md  rounded-md  font-medium px-2 mt-3  text-center bg-blue-700'>
              <p className='text-xs  py-1 text-white'><span className=''> @ </span> Post comment</p>
            </button>
            <div className='flex gap-2 mt-3 '>
              <img src={afent} alt='afent' className='h-5 w-5 cursor-pointer' />
              <img src={gallary} alt='gallary' className='h-5 w-5 cursor-pointer' />
            </div>
          </div>
        </div>
        <div className='flex my-2'>
          <img src={p3} alt='p3' className='h-10 w-10 p-2 rounded-full' />
          <div>
            <h3 className=' text-xs font-medium ' >Micheal Gough</h3>
            <p className='text-xs text-gray-400'>Product manager</p>
          </div>
        </div>
        <p className='text-xs text-gray-400 py-1 '> . Latest clicks/conversions. Where you currently have the logo for merchant, we should instead have a logo that represent the referring traffic sources (ex. Google or Facebook). So we’re actually missing a column that should say “Source”. And there should be no icon for the merchants.</p>
        <hr className='my-2' />
        <div className='flex flex-row gap-3'>
          <button className=' flex   rounded-md  font-medium px-2    text-center bg-blue-700'>
            <img src={save} alt='save' className='h-4 w-4 mt-2 ' />
            <p className='text-xs  px-3 py-2 text-white'>Save</p>
          </button>
          <button className=' flex  border rounded-md  font-medium px-2 text-center '>
            <img src={move} alt='move' className='h-4 w-4 mt-2 ' />
            <p className='text-xs font-medium text-gray-00 px-3 py-2 '>Move</p>
          </button>
          <button className=' flex  border rounded-md  font-medium px-2 text-center '>
            <img src={copy} alt='copy' className='h-4 w-4 mt-2 ' />
            <p className='text-xs font-medium text-gray-00 px-3 py-2 '>Copy</p>
          </button>
          <button className=' flex  border rounded-md  font-medium px-2 text-center '>
            <img src={achive} alt='archive' className='h-4 w-4 mt-2 ' />
            <p className='text-xs font-medium text-gray-00 px-3 py-2 '>Archive</p>
          </button>
          <button className=' flex  border rounded-md  font-medium px-2 text-center '>
            <img src={watch} alt='watch' className='h-4 w-4 mt-2 ' />
            <p className='text-xs font-medium text-gray-00 px-3 py-2 '>Watch</p>
          </button>
        </div>
      </Modal>


    </div>
  );
};

export default TaskCard;

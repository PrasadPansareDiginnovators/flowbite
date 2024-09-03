import React from 'react';
import p1 from '../assets/img/ToDo/p1.svg';
import p2 from '../assets/img/ToDo/p2.svg';
import p3 from '../assets/img/ToDo/p3.svg';
import clock from '../assets/img/ToDo/clock.svg';
import editicon from '../assets/img/navbar/editbar.svg';
import mark from '../assets/img/ToDo/mark.svg';

const TaskCard = ({ title, description, avatars = [p1, p2, p3], timeLeft, timePeriod, image }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col justify-between">
      <div className="flex justify-between items-center mb-2">
        <div className="text-lg font-medium text-black dark:text-white">
          {title}
        </div>
        <img src={editicon} alt="edit" className="h-6 w-6" />
      </div>
      <div className="flex flex-col flex-grow">
        {image && <img src={image} alt={title} className="rounded-lg h-52 w-full object-cover my-2" />}
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex -space-x-3">
          {avatars.map((avatar, index) => (
            <img key={index} src={avatar} alt={`Avatar ${index}`} className="w-7 h-7 rounded-full border-2 border-white" />
          ))}
        </div>
        <div className="flex items-center space-x-2">
          {timeLeft && (
            <div className="flex text-purple-600 dark:text-purple-400 font-semibold border rounded-md px-3 bg-blue-100 dark:bg-blue-900 gap-1">
              <img src={clock} alt="clock" className="h-4 w-4 mt-1" />
              {timeLeft}
            </div>
          )}
          {timePeriod && (
            <div className="flex text-green-700 dark:text-green-400 font-semibold border rounded-md px-3 bg-blue-100 dark:bg-blue-900 gap-1">
              <img src={mark} alt="mark" className="h-4 w-4 mt-1" />
              {timePeriod}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

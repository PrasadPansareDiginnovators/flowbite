import React from 'react';
import TaskCard from './TaskCard';
import p1 from '../assets/img/ToDo/p1.svg';
import p2 from '../assets/img/ToDo/p2.svg';
import p3 from '../assets/img/ToDo/p3.svg';
import homepageImage from '../assets/img/ToDo/Homepage.jpg';

const ToDo = () => {
  const tasks = [
    {
      title: "Change charts javascript",
      description: "In _variables.scss on line 672 you define $table_variants. Each instance of 'color-level' needs to be changed to 'shift-color'.",
      avatars: [p1, p2, p3],
      timeLeft: "5 days left",
    },
    {
      title: "Change homepage",
      description: "Change homepage for Volt Dashboard.",
      avatars: [p1, p2, p3],
      timeLeft: "22 days left",
      image: homepageImage, 
    },
    {
      title: "Change charts javascript",
      description: "In _variables.scss on line 672 you define $table_variants. Each instance of 'color-level' needs to be changed to 'shift-color'.",
      avatars: [p1, p2, p3],
      timeLeft: "7 days left",
    },
  ];

  return (
    <div className="w-[450px] flex-shrink-0 p-2 dark:bg-gray-900">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">To Do</h2>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <TaskCard 
            key={index}
            title={task.title}
            description={task.description}
            avatars={task.avatars}
            timeLeft={task.timeLeft}
            image={task.image}
          />
        ))}
        <div className="w-[435px] h-10  flex-shrink-0 dark:bg-gray-700  rounded-lg shadow flex justify-center items-center cursor-pointer border-2 border-dotted dark:border-gray-600 border-gray-400">
      <span className="text-gray-500 dark:text-gray-300 text-lg font-semibold"> + Add another card</span>
    </div>
      </div>
    </div>
  );
};

export default ToDo;

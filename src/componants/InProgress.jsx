import React from 'react';
import TaskCard from './TaskCard';
import p1 from '../assets/img/ToDo/p1.svg';
import p2 from '../assets/img/ToDo/p2.svg';
import p3 from '../assets/img/ToDo/p3.svg';
import inprogress from '../assets/img/ToDo/Inprogress.jpg';

const InProgress = () => {
  const tasks = [
    {
      title: "Redesign table card",
      description: "In _variables.scss on line 672 you define $table_variants. Each instance of 'color-level' needs to be changed to 'shift-color'.",
      avatars: [p1, p2, p3],
      timeLeft: "9 days left",
      image: inprogress, 
    },
    {
      title: "Redesign tables card",
      description: "In _variables.scss on line 672 you define $table_variants. Each instance of 'color-level' needs to be changed to 'shift-color'.",
      avatars: [p1, p2, p3],
      timeLeft: "5 days left",
    },
  ];

  return (
    <div className="w-[450px] flex-shrink-0 p-2 dark:bg-gray-900">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">In Progress</h2>
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

export default InProgress;

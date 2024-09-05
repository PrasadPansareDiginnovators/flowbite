import React, { useState } from 'react';
import TaskCard from './TaskCard';
import p1 from '../assets/img/ToDo/p1.svg';
import p2 from '../assets/img/ToDo/p2.svg';
import p3 from '../assets/img/ToDo/p3.svg';
import done from '../assets/img/ToDo/Done.jpg';
import AddCart from './AddCart';
const Done = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tasks = [
    {
      title: "Redesign table card",
      description: "In _variables.scss on line 672 you define $table_variants. Each instance of 'color-level' needs to be changed to 'shift-color'.",
      avatars: [p1, p2, p3],
      timePeriod: "Done",
      image: done,
    },
    {
      title: "Redesign tables card",
      description: "In _variables.scss on line 672 you define $table_variants. Each instance of 'color-level' needs to be changed to 'shift-color'.",
      avatars: [p1, p2, p3],
      timePeriod: "Done",
    },
    {
      title: "Change charts javascript",
      description: "In _variables.scss on line 672 you define $table_variants. Each instance of 'color-level' needs to be changed to 'shift-color'.",
      avatars: [p1, p2, p3],
      timePeriod: "Done",
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addCard = () => {
    closeModal();
  };

  return (
    <div className="w-[450px] flex-shrink-0 py-2 dark:bg-gray-900">
      <h2 className="text-base font-semibold mb-4 text-gray-800 dark:text-gray-200">Done</h2>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <TaskCard 
            key={index}
            title={task.title}
            description={task.description}
            avatars={task.avatars}
            timePeriod={task.timePeriod} 
            image={task.image}
          />
        ))}
        <div 
          className="w-[435px] border-dashed border-gray-300 h-10 flex-shrink-0 dark:bg-gray-700 rounded-lg flex justify-center items-center cursor-pointer border-2 dark:border-gray-600"
          onClick={openModal}
        >
          <button className="text-gray-500 dark:text-neutral-500 text-md font-semibold">+ Add another card</button>
        </div>
      </div>

      <AddCart
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddCard={addCard}
        title="Add new task"
        placeholderText="Redesign Homepage"
      />
    </div>
  );
};

export default Done;

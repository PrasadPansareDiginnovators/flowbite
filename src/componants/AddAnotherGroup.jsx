import React, { useState } from 'react';
import AddCart from './AddCart';

const AddAnotherGroup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div>
      <h2 className=" text-base font-semibold m-2 text-gray-800 dark:text-gray-200">Add another group</h2>

      <div
        className="w-[400px] border-dashed border-gray-300 h-32 my-4 mx-2 flex-shrink-0 dark:bg-gray-700 p-4 rounded-lg flex justify-center items-center cursor-pointer border-2 dark:border-gray-600"
        onClick={openModal}
      >
        <span className="text-gray-500 dark:text-gray-300 text-5xl">+</span>
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

export default AddAnotherGroup;

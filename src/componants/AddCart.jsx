import React from 'react';
import back from '../assets/img/notification/back.svg';
import gallary from '../assets/img/notification/gallary.svg';

const AddCart = ({ isOpen, onClose, onAddCard, title, placeholderText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-[650px] h-[600px] m-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
          <button onClick={onClose}>
            <img src={back} alt="Back" className="h-5 w-5" />
          </button>
        </div>
        <hr className="dark:border-gray-500 py-2" />
        <div className="m-2">
          <label className="block dark:text-white text-md mb-2">Task Name</label>
          <input
            className="border rounded-md font-medium w-full py-2 px-3 text-sm dark:border-gray-500 text-gray-700 bg-zinc-50 dark:text-gray-300 dark:bg-slate-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder={placeholderText}
          />
        </div>
        <div className="py-4">
          <label className="block font-medium text-gray-700 dark:text-white text-md mb-2">Enter a description</label>
          <textarea
            className="border text-sm font-medium rounded-md w-full bg-zinc-50 py-2 px-3 pb-24 dark:border-gray-500 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-700"
            placeholder="On line 672 you define $table_variants. Each instance of 'color-level' needs to be changed to 'shift-color'."
          />
        </div>
        <div className="mb-4">
          <div className="flex flex-row gap-2 border-2 border-dashed dark:border-gray-500 border-gray-300 rounded-lg py-12 justify-center cursor-pointer">
            <img src={gallary} alt="Gallery" className="h-8 w-8" />
            <p className="text-gray-400 text-md font-medium dark:text-gray-400 mt-1">Drop files to upload</p>
          </div>
        </div>
        <hr className="dark:border-gray-500" />
        <div className="flex flex-row gap-3 mt-4 text-sm font-medium">
          <button className="bg-blue-700 text-white px-3 rounded-md" onClick={onAddCard}>
            + Add Card
          </button>
          <button className="px-4 py-2 border dark:border-gray-500 dark:text-white rounded-md hover:bg-gray-300" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCart;

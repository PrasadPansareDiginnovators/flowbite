import React from 'react';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center">
      <div className="bg-white m-4 dark:bg-gray-800 p-4 rounded-lg shadow-lg w-10/12  max-w-lg">
        
    {children}
      </div>
    </div>
  );
};

export default Modal;

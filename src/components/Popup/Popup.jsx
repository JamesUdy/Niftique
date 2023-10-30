import React from 'react';

const Popup = ({onClose, onConfirm}) => {
  return (
    <div className="fixed w-1/2 mx-auto inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg shadow-black">
        <p className="text-lg text-gray-700 mb-4">
            🚧 This website is currently under development, and there may be unfinished components or work in progress. 🛠️ We appreciate your understanding and patience. If you wish to proceed, click "OK." 👍
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
};

export default Popup;

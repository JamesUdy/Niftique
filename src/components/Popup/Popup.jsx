import React from 'react';

const Popup = ({onClose, onConfirm}) => {
  return (
    <div className="fixed w-1/2 mx-auto inset-0 flex items-center justify-center z-50">
      <div className="bg-slate-900 p-6 rounded-lg shadow-lg shadow-slate-950 font-semibold text-justify">
        <p className="text-lg text-gray-300 mb-4 font-mono">
            🚧 This website is currently under development, and there may be unfinished components or work in progress. 🛠️ We appreciate your understanding and patience. If you wish to proceed, click "OK". 👍
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 text-gray-100 border border-gray-300 rounded ease-in duration-200 hover:bg-gray-200 hover:text-gray-900 font-mono"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded ease-in duration-200 hover:bg-blue-800 font-mono"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
};

export default Popup;

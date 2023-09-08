import React from 'react';

const Etherium = () => {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute top-5 left-5 hidden group-hover:block"
        viewBox="0 0 32 32"
        style={{
            transition: 'opacity 5s ease-linear',
        }}
        >
        <g fill="none" fill-rule="evenodd">
            <circle cx="16" cy="16" r="16" fill="#240046d2" />
            <g fill="#e0aaff" fill-rule="nonzero">
            <path fill-opacity="0.8" d="M16.498 4v8.87l7.497 3.35z" />
            <path d="M16.498 4L9 16.22l7.498-3.35z" />
            <path fill-opacity="0.9" d="M16.498 21.968v6.027L24 17.616z" />
            <path d="M16.498 27.995v-6.028L9 17.616z" />
            <path fill-opacity=".4" d="m16.498 20.573l7.497-4.353l-7.497-3.348z" />
            <path fill-opacity="0.7" d="m9 16.22l7.498 4.353v-7.701z" />
            </g>
        </g>
    </svg>
  )
};

export default Etherium;
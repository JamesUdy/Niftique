import React from 'react';
import { Rightarrow, Leftarrow } from '../../../assets';

export const CustomPrevArrow = (props) => (
  <div className="custom-prev-arrow" onClick={props.onClick}>
    <Leftarrow />
  </div>
);
export const CustomNextArrow = (props) => (
  <span className="custom-next-arrow p-0 m-0 bg-transparent rounded-full" onClick={props.onClick}>
    <Rightarrow />
  </span>
);

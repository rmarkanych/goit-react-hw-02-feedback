import React from 'react';
import ReactDOM from 'react-dom';
import s from '../Button/Button.module.css';

const Button = ({ content }) => {
  return (
    <>
      {content.map(item => {
        return (
          <button key={item} className={s.search} type="button">
            {item}
          </button>
        );
      })}
    </>
  );
};

export default Button;

import React from 'react';
import s from '../Button/Button.module.css';

const Button = ({ content, onBtnClick }) => (
  <ul className={s.list}>
    {content.map(item => (
      <li className={s.item}>
        <button
          type="button"
          key={item}
          className={s.btn}
          onClick={() => {
            onBtnClick(item);
          }}
        >
          {item.toUpperCase()}
        </button>
      </li>
    ))}
  </ul>
);

export default Button;

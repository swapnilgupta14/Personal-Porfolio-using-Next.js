// components/AddButton.js
import React from 'react';
import Link from 'next/link';
// import styles from './addButton.module.scss';

const AddButton = () => {
  return (
    <div className="add">
      <Link href="https://drive.google.com/file/d/1lkYROIEsFh7hk-zXhZ2-qXXKAhrA-2nW/view?usp=drive_link" className="iconLink">
        <svg className="icon">
          <use xlinkHref="#fileIcon" />
        </svg>
      </Link>
      <Link href="#" className="iconLink">
        <svg className="icon">
          <use xlinkHref="#imageIcon" />
        </svg>
      </Link>
      <Link href="mailto:mail.swapnilgupta@gmail.com" className="iconLink">
        <svg className="icon">
          <use xlinkHref="#mailIcon" />
        </svg>
      </Link>
      <Link href="https://buymeacoffee.com/14guptaswapnil" className="iconLink">
        <svg className="icon">
          <use xlinkHref="#chatIcon" />
        </svg>
      </Link>
      {/* <a className="dribble iconLink" href="https://dribbble.com/shots/5419580-Add-Button-hover-animation" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt="Dribbble" />
      </a> */}
    </div>
  );
};

export default AddButton;

// Import necessary dependencies and styles
import React from 'react';
import { Bars } from 'react-loader-spinner';
import style from './Loader.module.css';

// Define the Loader functional component
export default function Loader() {
  // JSX structure for the Loader component
  return (
    <div className={style.loader}>
      {/* Loading spinner using react-loader-spinner */}
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

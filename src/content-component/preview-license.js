import React from 'react';
import {useLocation} from 'react-router-dom';

const Preview = () => {
   const location = useLocation();
   console.log(location.state)
   return (
      <div className='container bg-preview vh-100'>
         <img src='img/license1.png' className='img img-fluid' />
         
      </div>
   );
}

export default Preview;

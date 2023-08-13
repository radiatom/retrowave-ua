import React from 'react';
import './Track.scss'
import Rating from '../../../Rating/Rating';
const Track = ({title,index,rating,duration,id}) => {
      return (
            <div className='track'>
                  <div className='track__position'>{index+1}</div>
                  <div className='track__title'>{title}</div>
                  <div className='track__rating'><Rating rating={rating} id={id}/> </div>
                  <div className='track__duration'>{Math.round(duration/1000)}</div>
            </div>
      );
}

export default Track;

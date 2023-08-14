import React from 'react';
import './Track.scss'
import Rating from '../../../Rating/Rating';
import { newTime } from '../../../../function';
import { useState } from 'react';
import addIco from'./../../../../img/icons/add.svg'
const Track = ({title,index,rating,duration,id}) => {
      const [active,setActive]=useState(false)
      return (
            <div className='track'>
                  <div className='track__position'>{index+1}</div>
                  <div className='track__title'>{title}</div>
                  <div className='track__rating'><Rating rating={rating} id={id}/> </div>
                  <div className='track__duration'>{newTime(Math.round(duration/1000))}</div>
                  <img className={active?'track__addIco active':'track__addIco'} onClick={()=>setActive(!active)} src={addIco} alt="addIco" />
            </div>
      );
}

export default Track;

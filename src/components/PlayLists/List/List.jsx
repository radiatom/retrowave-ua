import React from 'react';
import './List.scss'
import { useDispatch, useSelector } from 'react-redux';
import { leftListSelector, rightListSelector } from '../../../selectorApp';
import Track from './Track/Track';
const List = ({position, list}) => {
      const dispatch =useDispatch()
      const clickRating=()=>{
            dispatch({type:'crateRatingList'})
            dispatch({type:"setList", position, typeList:'rating' })
      }
      const clickDefault=()=>{
            dispatch({type:'crateDefaultList'})
            dispatch({type:"setList", position, typeList:'default' })
      }
      const clickRandom=()=>{
            dispatch({type:'crateRandomList'})
            dispatch({type:"setList", position, typeList:'random' })
      }
      return (
            <div className='List'>
                  <button className='List__btn' onClick={()=>clickRating()}>rating</button>
                  <button className='List__btn' onClick={()=>clickDefault()}>default</button>
                  <button className='List__btn' onClick={()=>clickRandom()}>random</button>
                  {list.map((track,index)=>{return(<Track id={track.id} title={track.title} index={index} key={index} rating={track.rating} duration={track.duration}/>)})}
            </div>
      );
}

export default List;


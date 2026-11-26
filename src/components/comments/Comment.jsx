import './style.css'
import React from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';

function Comment({ comment }) {

  return (
    <figure className='comment card'>
      <RiDoubleQuotesL className='comment__icon' aria-hidden='true' />
      <blockquote className='comment__text'>{comment.text}</blockquote>
      <figcaption className='comment__meta'>
        <span className='comment__author'>{comment.user_id?.name || 'Читач'}</span>
        {comment.poem_id?.name && <span className='comment__poem'>до вірша «{comment.poem_id.name}»</span>}
      </figcaption>
    </figure>
  )


}
export default Comment;

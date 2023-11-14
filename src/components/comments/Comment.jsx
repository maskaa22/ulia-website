import './style.css'
import React from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';

function Comment({ comment }) {

  return (
    <div className='comment'>
      <div>
        <p className='comment-poem'>{comment.poem_id.name}</p>
      <div className="br">{comment.text}</div>
      <p className='user-name'>{comment.user_id.name}</p>
      <div className='commeny-icon'><RiDoubleQuotesL/></div>
    </div></div>
  )


}
export default Comment;
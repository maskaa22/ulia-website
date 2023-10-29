import './style.css'
import React from 'react';

export class Comment extends React.Component {

render() {
  return (
    <div className="br">
      {/* {comment.text} */}
      {this.props.comment.text}
    </div>
  )
}

}
export default Comment;
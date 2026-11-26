import './style.css'
import React, { useState, useEffect } from 'react';
import { getComments } from "../../actions/user";
import Comment from "./Comment";

function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComments().then(com => {
      setComments(com || []);
      setLoading(false);
    })
  }, []);

  return (
    <section className='container comments'>
      <div className='page-head'>
        <h1>Відгуки читачів</h1>
        <p>Слова, якими читачі діляться про вірші. Залишити свій відгук можна під будь-яким віршем.</p>
      </div>

      {loading && (
        <div className='comments__grid'>
          {[0, 1, 2].map(i => <div key={i} className='skeleton' style={{ height: 180 }} />)}
        </div>
      )}

      {!loading && comments.length === 0 && (
        <p className='empty'>Відгуків поки немає. Станьте першим — відкрийте будь-який вірш і натисніть «Відгук».</p>
      )}

      {!loading && comments.length > 0 && (
        <div className='comments__grid'>
          {comments.map(comment => <Comment key={comment._id} comment={comment} />)}
        </div>
      )}
    </section>
  )
}
export default Comments;

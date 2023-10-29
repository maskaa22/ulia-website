import React from 'react'

import Comment from './Comment';


class Comments extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      name: '',
      comment: '',
      email: ''
    }
    this.addComment = this.addComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:5000/comments').then((response) => response.json()).then((data) => {
      this.setState({ comments: data })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.email !== this.props.email) {
      fetch('http://localhost:5000/comments').then((response) => response.json()).then((data) => {
        this.setState({ comments: data })
      })
    }

  }


  addComment = () => {
    this.setState({
      comments: [...this.state.comments,
      { email: this.state.email, }
      ]
    },
      () => {
        fetch('http://localhost:5000/comments', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.state.email
          })
        });
      })
  }



  //     removeComment = (id) => {

  //       this.setState({

  //         comments: this.state.comments.filter(comment => comment.id !== id)

  //       }, () => localStorage.setItem('state', JSON.stringify(this.state)))

  //     }



  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })

  }

  render() {
    const { comments } = this.state;
   
    return (
      <div className="App">

        {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}

        {/* <button onClick={this.removeComment.bind(null, comment.id)}>Удалить комментарий</button> */}

        <div>

          <label>Имя: <input

            type="text"

            value={this.state.name}

            name="name"

            onChange={this.handleChange} /></label>

          <label>Комментарий: <textarea

            name="email"

            value={this.state.email}

            onChange={this.handleChange}></textarea>

          </label>

          <button onClick={this.addComment}>Добавить комментарий</button>

        </div>



      </div>

    )

  }

}

export default Comments;

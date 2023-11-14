
import './style.css';
import { IoClose } from 'react-icons/io5';
import React from 'react';
import { createPoem, getPoem } from '../../actions/user';
import Poem from './Poem';


class CreatePoem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visibleCreatePoem: 'hiden-block',
      title: '',
      text: '',
      poems: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.setVisibleCreatePoem = this.setVisibleCreatePoem.bind(this);
  }

  componentDidMount() {
    getPoem().then(poem => {this.setState({ poems: poem })})
  }
    componentDidUpdate(prevProps, prevState) {
    if (prevState.text !== this.state.text) {
      this.componentDidMount()
    }

  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  setVisibleCreatePoem = (visible) => {
    this.setState({ visibleCreatePoem: visible })
  }


  render() {
    const { poems } = this.state;

    return (
      <>
        {this.props.currentUser.role === 'admin' && <div className='position-center'><button className='create-poem-button' onClick={() => this.setVisibleCreatePoem('visible-block')}>Додати вірш</button></div>}
        
        <div className='position-center'>
          <div className={`create-poem-container ${this.state.visibleCreatePoem}`}>
            <div className='create-poem-close' onClick={() => this.setVisibleCreatePoem('hiden-block')}><IoClose /></div>
            <div className='position-between'>
              <label className='create-poem-lable'>Назва:</label>
              <input className='create-poem-input' value={this.state.title} onChange={this.handleChange} type='text' name="title" />
            </div>
            <div className='position-between'>
              <label className='create-poem-lable'>Текст:</label>
              <textarea className='create-poem-textarea' value={this.state.text} onChange={this.handleChange} name="text" />
            </div>
            <div className='position-center'><button className='create-poem-button save-button' onClick={() => {
              createPoem(this.props.currentUser.id, this.state.title, this.state.text);
            this.setState({ title: '', text: '' });
            this.setVisibleCreatePoem('hiden-block')
            }}>Опублікувати</button></div>
          </div>
        </div>

        <div>
          {
            poems.map(poem => <Poem key={poem._id} poem={poem} handleOpen={this.props.handleOpen} setPoem_id={this.props.setPoem_id}/>)
          }
        </div>
      </>
    )
  }
}

export default CreatePoem;
import './style.css';



function Galarys() {

  return (
    <div className='container'>
    <div className="galary-container">
      <div className='galary-item'>
        <div className='item-img1'>
          <img src={'../../galary_img/' + '3.JPG'} alt={'dfvdfv'}  className='galary-img'/>
        </div>
        <div className='item-img2'>
        <img src={'../../galary_img/' + '2.JPG'} alt={'dfvdfv'}  className='galary-img'/>
        </div>
      </div>
      <div className='galary-item'>
      <div className='item-img3'>
      <img src={'../../galary_img/' + '1.jpg'} alt={'dfvdfv'}  className='galary-img'/>
      </div>
        <div className='item-img4'>
          <img src={'../../galary_img/' + '4.JPG'} alt={'dfvdfv'}  className='galary-img'/>
        </div>
      </div>
      <div className='galary-item'>
        <div className='item-img1'>
          <img src={'../../galary_img/' + '5.JPG'} alt={'dfvdfv'}  className='galary-img'/>
        </div>
        <div className='item-img2'>
        <img src={'../../galary_img/' + '6.JPG'} alt={'dfvdfv'}  className='galary-img'/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Galarys;
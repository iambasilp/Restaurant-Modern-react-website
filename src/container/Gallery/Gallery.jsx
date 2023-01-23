import React from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import {images} from '../../constants';
import {SubHeading} from '../../components'
import './Gallery.css';

const GallaryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = React.useRef()
  const scroll = (direction)=>{
     const {current} = scrollRef;
     if(direction === 'left'){
      current.scrollLeft -= 300;
     }else{
      current.scrollLeft += 300;
     }
  }
  return (
    <div className="app__gallary flex__center">
      <div className='app__gallary-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color:"#AAA"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className="app__gallary-images">
        <div className="app__gallary-images_container" ref={scrollRef}>
            {GallaryImages.map((image,index)=>(
                <div className="app__gallary-images_card flex__center" key={`gallary_images-${index + 1}`}>
                  <img src={image} alt="gallary images" />
                  <BsInstagram className='gallary__img-icon' />
                </div>
            ))}
        </div>
        <div className='app__gallary-images_arrows'>
          <BsArrowLeftShort className='gallary__arrow-icons' onClick={()=> scroll('left')} />
          <BsArrowRightShort className='gallary__arrow-icons' onClick={()=> scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery;

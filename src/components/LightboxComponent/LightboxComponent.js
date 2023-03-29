import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../store/art/actions';
import { useEffect } from 'react';
import { useState } from 'react';


const LightboxComponent = () => {
  const dispatch = useDispatch();
  const { images, loadingImages } = useSelector((state) => state.ArtReducer);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  if (loadingImages) {
    return <p>Cargando...</p>;
  }

  return (
    <div className='galleryCol'>
        {images.map((image, i) => (
          <div className='galleryItem'>
            <p>{image.title}</p>
            <img className='galleryArtworkImage' src={image} alt={i}></img>
          </div>
          ))}
    </div>
  )

};

LightboxComponent.propTypes = {};

LightboxComponent.defaultProps = {};

export default LightboxComponent;


 // const dispatch = useDispatch();
  // const { images, loadingImages } = useSelector((state) => state.ArtReducer);
  // const [currentImageIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   dispatch(getImages());
  // }, []);

  // if (loadingImages) {
  //   return <p>Cargando...</p>;
  // }

  //   const gotoPrevious = () =>
  //       currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  //   const gotoNext = () =>
  //       currentImageIndex + 1 < images.length &&
  //       setCurrentIndex(currentImageIndex + 1);

  // return (
  //   <div>
  //   {loadingImages ? (<div>Cargando imágenes...</div>) : 
  //   (
  //     <Lightbox
  //       isOpen={true}
  //       onPrev={gotoPrevious}
  //       onNext={gotoNext}
  //       images={images.map((image) => ({ src: image }))}
  //       currentIndex={currentImageIndex}
  //       singleClickToZoom
  //       pageTransitionConfig={{
  //       from: { transform: "scale(0.75)", opacity: 0 },
  //       enter: { transform: "scale(1)", opacity: 1 },
  //       leave: { transform: "scale(0.75)", opacity: 0 },
  //       config: { mass: 1, tension: 320, friction: 32 }
  //     }}

  //     />
  //   )}
  // </div>
  // )
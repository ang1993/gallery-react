import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "../../pages/styles.css"
import { useDispatch, useSelector } from 'react-redux';
import { getArtworks } from '../../store/art/actions';


const GalleryGridComponent = () => {

  const dispatch = useDispatch()
  const {artworks, loadingArtworks} = useSelector((state) => state.ArtReducer)

  useEffect( () => {
    dispatch(getArtworks())
  }, [])

  if(loadingArtworks){
    return (
      <div>
        vamos a ver
      </div>
    )
  }


  return(
    <div className='GalleryGridBox'>
      {artworks.slice(10,13).map((art) => (
          <div>
            <img src={art.images.web.url} alt={art.title} />
          </div>
        ))}
    </div>
  )
}

GalleryGridComponent.propTypes = {};

GalleryGridComponent.defaultProps = {};

export default GalleryGridComponent;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "../../pages/styles.css"
import { useDispatch, useSelector } from 'react-redux';
import { getArtworks } from '../../store/art/actions';
import "./gallerygrid.css"
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


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
    <Container>
    <div className='galleryGrid'>
      {artworks.slice(0,12).map((art, index) => (
        <Link className='galleryLink' to={`/artwork/${art.id}`}>
            <img className="galleryImage" src={art.images.web.url} alt={art.title} />
        </Link>
        ))}
    </div>
    </Container>
    </div>
  )
}

GalleryGridComponent.propTypes = {};

GalleryGridComponent.defaultProps = {};

export default GalleryGridComponent;

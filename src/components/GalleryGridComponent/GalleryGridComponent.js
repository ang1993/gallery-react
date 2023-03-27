import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "../../pages/styles/styles.css"
import { useDispatch, useSelector } from 'react-redux';
import { getArtworks } from '../../store/art/actions';
import "./gallerygrid.css"
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ArtReducer from '../../store/art/reducer';

const GalleryGridComponent = () => {

  const dispatch = useDispatch()
  const {artworks, loadingArtworks} = useSelector((state) => state.ArtReducer)

  useEffect( () => {
    dispatch(getArtworks())
  }, [])


  if(!artworks){
    return null
  }
  return(
    <div className='GalleryGridBox'>
    <Container>
    <div className='galleryGrid'>
      <div className='galleryRow'>
        <div className='galleryCol'>
        {artworks.slice(0,10).map((art, index) => (
          <Link className='galleryLink' to={`/artwork/${art.id}`}>
              {art.images.web ? <img className="galleryImage" src={art.images.web.url} alt={art.title} /> : ""}
          </Link>
          ))}
          </div>
          <div className='galleryCol'>
        {artworks.slice(11,23).map((art, index) => (
          <Link className='galleryLink' to={`/artwork/${art.id}`}>
              {art.images.web ? <img className="galleryImage" src={art.images.web.url} alt={art.title} /> : ""}
          </Link>
          ))}
          </div>
          <div className='galleryCol'>
        {artworks.slice(24,33).map((art, index) => (
          <Link className='galleryLink' to={`/artwork/${art.id}`}>
              {art.images.web ? <img className="galleryImage" src={art.images.web.url} alt={art.title} /> : ""}
          </Link>
          ))}
          </div>
          <div className='galleryCol'>
          {artworks.slice(35,45).map((art, index) => (
          <Link className='galleryLink' to={`/artwork/${art.id}`}>
              {art.images.web ? <img className="galleryImage" src={art.images.web.url} alt={art.title} /> : ""}
          </Link>
          ))}
          </div>
          <div className='galleryCol'>
          {artworks.slice(46,58).map((art, index) => (
          <Link className='galleryLink' to={`/artwork/${art.id}`}>
              {art.images.web ? <img className="galleryImage" src={art.images.web.url} alt={art.title} /> : ""}
          </Link>
          ))}
          </div>
      </div>
    </div>
    </Container>
    </div>
  )
}

GalleryGridComponent.propTypes = {};

GalleryGridComponent.defaultProps = {};

export default GalleryGridComponent;

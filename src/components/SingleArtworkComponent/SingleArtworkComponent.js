import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ArtReducer from '../../store/art/reducer';


const SingleArtworkComponent = () => {

  const {artwork} = useSelector((state) => state.ArtReducer)

  // if(!artwork.id){
  //   return (
  //     <Container>
  //       Cargando...
  //     </Container>
  //   )
  // } else {
  return (
    <Container>
    <div className='row gx-4'>
    <div className='col-6'>
    {/* {!artwork.images.web.url ? "" : <img src={artwork.images.web.url} width="100%" alt={artwork.title}/>}  */}
    </div>
    <div className='col-6'>
        <h3>{artwork.title}</h3>
        <p>{artwork.creation_date}</p>
        <p>{artwork.collection}</p>
        <p>{artwork.technique}</p>
        <p>{artwork.measurements}</p>
        <p> {artwork.wall_description}</p>
        
        <h3>Artista:</h3>
        {/* {artwork.creators.map((artist) => (
          <div>
            {artist.description}
            {artist.biography}
          </div>
        ))} */}
        {artwork.fun_fact}
        </div>
      </div>
    </Container>
  )
 }
SingleArtworkComponent.propTypes = {};

SingleArtworkComponent.defaultProps = {};

export default SingleArtworkComponent;

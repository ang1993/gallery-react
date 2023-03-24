import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ArtReducer from '../../store/art/reducer';


const SingleArtworkComponent = () => {

  const {artwork} = useSelector((state) => state.ArtReducer)

  return (
    <Container>
        <h2>SingleArtworkComponent</h2>
        <h3>Título:</h3>
        {artwork.title}
        <h3>Fecha de creación:</h3>
        {artwork.creation_date}
        <h3>Tipo:</h3>
        {artwork.collection}
        <h3>Técnica:</h3>
        {artwork.technique}
        <h3>Medidas:</h3>
        {artwork.measurements}
        <h3>Descripción:</h3>
        <p> {artwork.wall_description}</p>
        {/* PROBLEMA AL LEER URL: */}
        {/* <img src={artwork.images.web.url} width="300" alt={artwork.title}/> */}
        <h3>Artista:</h3>
        {/* PROBLEMA AL LEER MAP: */}
        {/* {artwork.creators.map((artist) => (
          <div>
            {artist.description}
            {artist.biography}
          </div>
        ))} */}
        <h3>Fun Fact:</h3>
        {artwork.fun_fact}
        <h3>Trabajos relacionados:</h3>
        {/* PROBLEMA AL LEER MAP: */}
        {/* {artwork.related_works.map((rw) => (
          <div>
            {rw.id}
            {rw.description}
          </div> 
        ))} */}
    </Container>
  )
}
SingleArtworkComponent.propTypes = {};

SingleArtworkComponent.defaultProps = {};

export default SingleArtworkComponent;

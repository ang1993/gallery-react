import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ArtReducer from '../../store/art/reducer';
import { Link } from 'react-router-dom';


const ArtistComponent = () => {
  const {searchResult} = useSelector((state) => state.ArtReducer)

  return(
    <Container>
      <h3>{searchResult[0].name}</h3>
      <p>{searchResult[0].nationality}</p>
      <p>{searchResult[0].birth_year} - {searchResult[0].death_year} </p>
      {searchResult[0].artworks.map((artwork) => (
          <div>
            {artwork.title}
            {artwork.tombstone}
            <Link to={`/artwork/${artwork.id}`}><Button>View</Button></Link>
          </div>
        ))}
    </Container>
  ) 
};

ArtistComponent.propTypes = {};

ArtistComponent.defaultProps = {};

export default ArtistComponent;

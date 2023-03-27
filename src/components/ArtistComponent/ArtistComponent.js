import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ArtReducer from '../../store/art/reducer';
import { Link } from 'react-router-dom';
import "./artistcomponent.css";
import "../../pages/styles/styles.css"


const ArtistComponent = () => {
  const {searchResult} = useSelector((state) => state.ArtReducer)

  return(
    <div className='ArtistCompBox'>
    <Container>
      <h3 className='H3RegularText'>{searchResult[0].name}</h3>
      <p className='artistNation'>{searchResult[0].nationality}</p>
      <p className='birthDead'>{searchResult[0].birth_year} - {searchResult[0].death_year} </p>
      {searchResult[0].artworks.map((artwork) => (
          <div className='ArtworkPreviewBox'>
            <h6 className='ArtworkTitleList'>{artwork.title}</h6>
            <p className='ArtworkTombstoneList'>{artwork.tombstone}</p>
            <Link to={`/artwork/${artwork.id}`} className='ScndButton'>View</Link>
          </div>
        ))}
    </Container>
    </div>
  ) 
};

ArtistComponent.propTypes = {};

ArtistComponent.defaultProps = {};

export default ArtistComponent;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getArtworks } from '../../store/art/actions';
import { Link } from 'react-router-dom';


const ArtworksComponent = () => {
  const dispatch = useDispatch();
  const {artworks} = useSelector((state) => state.ArtReducer)

  useEffect( () => {
    dispatch(getArtworks())
  }, [])

  return (
    <Container>
      {artworks.map((a) => (
        <Link to={`/artwork/${a.id}`}><Card key={a.id}>
          <img width={200} src={a.images.web.url} alt={a.title}/>
          <Card.Title> {a.title}</Card.Title>
        </Card></Link>
      ))}
    </Container>
  )
};

ArtworksComponent.propTypes = {};

ArtworksComponent.defaultProps = {};

export default ArtworksComponent;

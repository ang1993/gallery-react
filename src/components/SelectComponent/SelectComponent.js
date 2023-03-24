import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ArtReducer from '../../store/art/reducer';
import { Card, Container } from 'react-bootstrap';


const SelectComponent = () => {
  const {artworks} = useSelector((state) => state.ArtReducer)
  
  return (
    <Container>
      {artworks.map((col) => (
        <Card>
          {/* <img width={200} src={a.images.web.url} alt={a.title}/> */}
          <Card.Title key={col.id}> {col.collection}</Card.Title>
        </Card>
      ))}
    </Container>
  )
};

SelectComponent.propTypes = {};

SelectComponent.defaultProps = {};

export default SelectComponent;

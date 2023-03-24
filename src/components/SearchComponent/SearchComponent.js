import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getArtworkSearch } from '../../store/art/actions';
import ArtReducer from '../../store/art/reducer';
import { Link } from 'react-router-dom';


const SearchComponent = () => {

  const dispatch  = useDispatch();
  const [inputValue, setInputValue] = useState("")
  const {searchResult} = useSelector((state) => state.ArtReducer)

  return (
    <Container>
    <InputGroup className='mb-3' size='lg'>
      <FormControl
      placeholder='Search for Artist'
      type='input'
      onKeyDown={event => {
        if(event.key === "Enter"){
          dispatch(getArtworkSearch(inputValue));
        }
      }}
      onChange = {event => setInputValue(event.target.value)}
       />
      <Button onClick={() => dispatch(getArtworkSearch(inputValue))}>Search</Button>
    </InputGroup>
    <Card>
      {searchResult.map((obj) => (
        <Link to={`/artwork/${obj.id}`}>
        <Card.Title>{obj.title}</Card.Title>
        {/* PROBLEMA AL LEER URL: */}
        {/* <img src={obj.images.web.url} width={200} alt={obj.title} /> */}
        </Link>
      ))}
    </Card>
  </Container>
  )
}

SearchComponent.propTypes = {};

SearchComponent.defaultProps = {};

export default SearchComponent;

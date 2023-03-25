import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getArtworkSearch } from '../../store/art/actions';
import ArtReducer from '../../store/art/reducer';
import { Link } from 'react-router-dom';
import "./searchcomponent.css";


const SearchComponent = () => {

  const dispatch  = useDispatch();
  const [inputValue, setInputValue] = useState("")
  const {searchResult, loadingSearch} = useSelector((state) => state.ArtReducer)
  

  function search(){
    dispatch(getArtworkSearch(inputValue))
    setInputValue("")
  }

  return (
    <Container>
    <div className='row gx-5'>
    <div className='col-4 px-4'>
    <InputGroup className='mb-3' size='m'>
      <FormControl
      placeholder='Search for Artist'
      type='input'
      onKeyDown={event => {if(event.key === "Enter"){search()}}}
      onChange = {event => setInputValue(event.target.value)}
       />
      <Button onClick={search}>Search</Button>
    </InputGroup>
    </div>
    <div className='col-8 px-4'>
    <div className='row g-5'>
      {searchResult.map(obj => (
        <Link to={`/artist/${obj.name}`}>
          <Card className='col-4' key={obj.id}>
          <Card.Title>{obj.name}</Card.Title>
          <p>{obj.nationality}</p>
          <p>{obj.birth_year} - {obj.death_year}</p>
          </Card> 
        </Link>
      ))}
      </div>
    </div>
    </div>
  </Container>
  )
}

SearchComponent.propTypes = {};

SearchComponent.defaultProps = {};

export default SearchComponent;

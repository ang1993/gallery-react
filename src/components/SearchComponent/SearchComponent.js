import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getArtworkSearch } from '../../store/art/actions';
import ArtReducer from '../../store/art/reducer';
import { Link } from 'react-router-dom';
import "./searchcomponent.css";
import "../../pages/styles/styles.css"

const SearchComponent = () => {

  const dispatch  = useDispatch();
  const [inputValue, setInputValue] = useState("")
  const {searchResult, loadingSearch} = useSelector((state) => state.ArtReducer)
  

  function search(){
    dispatch(getArtworkSearch(inputValue))
    setInputValue("")
  }

  if(searchResult === []) {
    return (
      console.log("nothingFound")
    )
  } 

  return (
    <Container>
    <div className='SearcherContainer'>
    <div className='SearcherBox'>
    <label className='searcherLabel'>Search an artist by name: </label>
    <input 
      className='formInput inputSearch'
      placeholder='Ex: Goya'
      onKeyDown={event => {if(event.key === "Enter"){search()}}}
      onChange = {event => setInputValue(event.target.value)}
       />
      <Link className='PrimaryButton' onClick={search}>Browse</Link>
    </div>
    <div>
    <div className='searchResultGrid'>
      {searchResult.map(obj => (
        <Link className='cardArtistLink' to={`/artist/${obj.name}`}>
          <div className='searcher-card' key={obj.id}>
          <h5 className='artistName'>{obj.name}</h5>
          <div className='pinkLine'></div>
          <p className='searcherCountry'>{obj.nationality}</p>
          <p className='birthDeath'>{obj.birth_year} - {obj.death_year}</p>
          </div> 
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

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getArtworkSearch } from '../../store/art/actions';
import ArtReducer from '../../store/art/reducer';
import { Link } from 'react-router-dom';
import "./searchcomponent.css";
import "../../pages/styles.css"
import LoremIpsum from 'react-lorem-ipsum';


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
    <div className='row gx-5'>
    <div className='col-4 px-4 SearcherBox'>
    <h3 className='H3RegularText'>Search&<span className='italic'>Find</span></h3>
    <p className='BiggerP'>Lorem ipsum odor amet, consectetuer adipiscing elit. Sem. Maecenas conubia. Neque nascetur. Erat? Finibus. Fringilla. Ut. Erat.</p>
    <InputGroup className='mb-3' size='m'>
      <FormControl
      placeholder='Write an artist by name'
      type='input'
      onKeyDown={event => {if(event.key === "Enter"){search()}}}
      onChange = {event => setInputValue(event.target.value)}
       />
      <Button onClick={search}>Browse</Button>
    </InputGroup>
    </div>
    <div className='col-8 px-4'>
    <div className='row g-5'>
      {searchResult.map(obj => (
        <Link to={`/artist/${obj.name}`}>
          <div className='searcher-card' key={obj.id}>
          <h5>{obj.name}</h5>
          <p className='searcher-country'>{obj.nationality}</p>
          <p className='birth-death'>{obj.birth_year} - {obj.death_year}</p>
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

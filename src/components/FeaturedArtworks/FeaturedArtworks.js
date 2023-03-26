import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from 'react-bootstrap';
import { LoremIpsum } from "react-lorem-ipsum";
import { useDispatch, useSelector } from 'react-redux';
import { getArtworks } from '../../store/art/actions';
import "../../pages/styles.css"
import { Link } from 'react-router-dom';


const FeaturedArtworks = () => {

  const dispatch = useDispatch()
  const {artworks, loadingArtworks} = useSelector((state) => state.ArtReducer)

  useEffect( () => {
    dispatch(getArtworks())
  }, [])

  if(loadingArtworks){
    return (
      <div>
        cargando
      </div>
    )
  }

  return (
    <Container>
    <div className='FeaturedArtworksBox'>
      <div className="row p-4">
          <div className="col-md-10">
            <h3 className="H3RegularText">What's new?</h3>
          </div>
          <div class="col-md-10 d-flex align-items-center">
            <p className="BiggerP"><LoremIpsum avgWordsPerSentence={8}/></p>
          </div>
          <div>
            <Link>Take a look</Link>
          </div>
      </div>
      <section className='row p-4'>
      {artworks.slice(8,11).map((artwk) => (
        <div className="col-md-4 CardBox">
          <div className='CardImageBox'>
          <img className='CardImage' src={artwk.images.web.url} alt={artwk.title} />
          </div>
          <span> {artwk.department} </span>
            <h5>{artwk.title}</h5>
            <p>{artwk.creators[0].description}</p>
            <p>{artwk.technique}</p>
            <Link to={`/artwork/${artwk.id}`}><Button>View</Button></Link>
      </div>
      ))}
      </section>
      </div>
    </Container>
  )
}

FeaturedArtworks.propTypes = {};

FeaturedArtworks.defaultProps = {};

export default FeaturedArtworks;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from 'react-bootstrap';
import { LoremIpsum } from "react-lorem-ipsum";
import { useDispatch, useSelector } from 'react-redux';
import { getFemaleArtworks } from '../../store/art/actions';
import "../../pages/styles.css"


const FeaturedArtworks = () => {


  return (
    <Container>
      <div className="row p-4">
          <div className="col-md-12 ">
            <h3 className="H3RegularText">What's new?</h3>
          </div>
          <div class="col-md-12 d-flex align-items-center">
            <p className="BiggerP"><LoremIpsum avgWordsPerSentence={8}/></p>
          </div>
          </div>
      <section className='row p-4'>
      <div className="col-md-6">
          <div>
          <div className="RandomImgBox"></div>
          </div>
            <span>New Collection</span>
            <h4 className="H3RegularText">Random</h4>
            <p><LoremIpsum avgWordsPerSentence={4}/></p>
            <Button>Explore</Button>
      </div>
      </section>
    </Container>
  )
}

FeaturedArtworks.propTypes = {};

FeaturedArtworks.defaultProps = {};

export default FeaturedArtworks;

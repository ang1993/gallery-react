import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getArtworks } from '../../store/art/actions';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';


const ArtworksComponent = () => {
  const dispatch = useDispatch();
  const {artworks} = useSelector((state) => state.ArtReducer)

  useEffect( () => {
    dispatch(getArtworks())
  }, [])

  return (
    <Container className='col'>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSwiper={(swiper) => console.log(swiper)}>
      {artworks.map((a) => (
        <SwiperSlide key={a.id}>
        <Link to={`/artwork/${a.id}`}>
        <img className='card-img-top' width={200} src={a.images.web.url} alt={a.title}/>
        </Link>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* <div className='row'>
      {artworks.map((a) => (
        <Card className='col-2' key={a.id}>
        <Link to={`/artwork/${a.id}`}>
          <img className='card-img-top' width={200} src={a.images.web.url} alt={a.title}/>
          <Card.Title> {a.title}</Card.Title>
          </Link>
        </Card>
      ))}
      </div> */}
    </Container>
  )
};

ArtworksComponent.propTypes = {};

ArtworksComponent.defaultProps = {};

export default ArtworksComponent;

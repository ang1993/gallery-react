import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getArtworks } from '../../store/art/actions';
import { Link } from 'react-router-dom';
import "./artworkscomponent.css";

//swiper:
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import { Pagination } from "swiper";


const ArtworksComponent = () => {
  const dispatch = useDispatch();
  const {artworks} = useSelector((state) => state.ArtReducer)

  useEffect( () => {
    dispatch(getArtworks())
  }, [])

  return (
    <div>
    <Swiper
      pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
      {artworks.map((a) => (
        <SwiperSlide key={a.id}>
        <Link to={`/artwork/${a.id}`}>
        <div className='BannerHome'>
        <img className='BannerHomeImg' width={200} src={a.images.web.url} alt={a.title}/>
        </div>
        </Link>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
};

ArtworksComponent.propTypes = {};

ArtworksComponent.defaultProps = {};

export default ArtworksComponent;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getArtworks } from '../../store/art/actions';
import "./artworkscomponent.css";

//swiper:
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

const ArtworksComponent = () => {
  const dispatch = useDispatch();
  const {artworks} = useSelector((state) => state.ArtReducer)

  useEffect( () => {
    dispatch(getArtworks())
  }, [])

  return (
    <div>
    <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
      {artworks.map((a) => (
        <SwiperSlide key={a.id}>
        <div className='BannerHome'>
        <img className='BannerHomeImg' width={200} src={a.images.web.url} alt={a.title}/>
        </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
};

ArtworksComponent.propTypes = {};

ArtworksComponent.defaultProps = {};

export default ArtworksComponent;

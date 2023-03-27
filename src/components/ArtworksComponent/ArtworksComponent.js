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
import { EffectFade, Autoplay,  Navigation, Pagination } from "swiper";


const ArtworksComponent = () => {
  const dispatch = useDispatch();
  const {artworks, loadingArtworks} = useSelector((state) => state.ArtReducer)

  useEffect( () => {
    dispatch(getArtworks())
  }, [])

//funciona ok:

  if(loadingArtworks){
    return (
      <div>
        vamos a ver
      </div>
    )
  }

  return (
    <div>
    <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {artworks.slice(2,6).map((a) => (
        <SwiperSlide key={a.id}>
        <div className='BannerHome'>
        <img className='BannerHomeImg' src={a.images.web.url} alt={a.title}/>
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

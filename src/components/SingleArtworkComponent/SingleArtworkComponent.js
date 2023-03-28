import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ArtReducer from '../../store/art/reducer';
import './singleartworkstyles.css'
import "../../pages/styles/styles.css"



const SingleArtworkComponent = () => {

  const {singleArtwork, loadingSingleArtwork} = useSelector((state) => state.ArtReducer)

  if(loadingSingleArtwork){
    return (
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading" />
      </div>
    )
  } 

  return (
    <Container>
    <div className='myRow'>
    <div className='myColArt'>
    <div className='artworkImageContainer'>
      <Link className="ScndButton BackButton" to='/browse'> {`<`} Back to Browser</Link>
      {singleArtwork.images && singleArtwork.images.web ? <img src={singleArtwork.images.web.url} width={"500"} alt={singleArtwork.title}/> : ""}
    </div>
    </div>
      <div className='myColArt artworkInfoContainer'>
      <SimpleBar
        style={{maxHeight: 500}}
        autoHide = {false}
        >
        <h4>{singleArtwork.title}</h4>
        <p className='creationDate'>{singleArtwork.creation_date}</p>
        {singleArtwork.creators?.map((artist) => (
          <div>
            <span className='creatorName'>{artist.description}</span>
          </div>
        ))}
        <p className='collectionInfo'>{singleArtwork.collection}</p>
        <div className='pinkLine singleArtPinkLine'></div>
        {singleArtwork.technique ? <p className='labelInfo'>Technique: <span className='labelData'>{singleArtwork.technique}</span></p> : ""}
        {singleArtwork.measurements ? <p className='labelInfo'>Dimensions: <span className='labelData'>{singleArtwork.measurements}</span></p> : ""}
        <p className='artwkDescription'> {singleArtwork.wall_description}</p>
        <div className='pinkLine singleArtPinkLine'></div>
        {singleArtwork.creators?.map((artist) => (
          <div>
          {artist.biography ? <p className='labelInfo'>Bio: <span className='normalP'>{artist.biography}</span></p> : ""}
          </div>
        ))}
        {singleArtwork.fun_fact ? <p className='labelInfo'>Fun fact: <span className='normalP'>{singleArtwork.fun_fact}</span></p> : ""}
        </SimpleBar>
        </div>
      </div>
    </Container>
  )
 }
SingleArtworkComponent.propTypes = {};

SingleArtworkComponent.defaultProps = {};

export default SingleArtworkComponent;

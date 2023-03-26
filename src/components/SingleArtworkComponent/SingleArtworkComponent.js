import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ArtReducer from '../../store/art/reducer';


const SingleArtworkComponent = () => {

  const {singleArtwork, loadingSingleArtwork} = useSelector((state) => state.ArtReducer)

  if(loadingSingleArtwork){
    return ("")
  } 

  return (
    <Container>
    <div className='row gx-4'>
    <div className='col-6'>
        <h3>{singleArtwork.title}</h3>
        <p>{singleArtwork.creation_date}</p>
        <p>{singleArtwork.collection}</p>
        <p>{singleArtwork.technique}</p>
        <p>{singleArtwork.measurements}</p>
        <p> {singleArtwork.wall_description}</p>
        <h3>Artist:</h3>
        {singleArtwork.creators?.map((artist) => (
          <div>
            {artist.description}
            <h5>Bio:</h5>
            {artist.biography}
          </div>
        ))}
        <h3>Fun fact:</h3>
        {singleArtwork.fun_fact}
        </div>
      </div>
      <div className='col-6'>
      {singleArtwork.images && singleArtwork.images.web ? <img src={singleArtwork.images.web.url} width={"500"} alt={singleArtwork.title}/> : ""}
      </div>
    </Container>
  )
 }
SingleArtworkComponent.propTypes = {};

SingleArtworkComponent.defaultProps = {};

export default SingleArtworkComponent;

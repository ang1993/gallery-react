import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ArtReducer from '../../store/art/reducer';


const SingleArtworkComponent = () => {

  const {artwork, loadingArtwork} = useSelector((state) => state.ArtReducer)

  if(!loadingArtwork){
    
  } 

  return (
    <Container>
    <div className='row gx-4'>
    <div className='col-6'>
    {artwork.images.web.url ? <img src={artwork.images.web.url} width={"500"} alt={artwork.title}/> : "!"}
    </div>
    <div className='col-6'>
        <h3>{artwork.title}</h3>
        <p>{artwork.creation_date}</p>
        <p>{artwork.collection}</p>
        <p>{artwork.technique}</p>
        <p>{artwork.measurements}</p>
        <p> {artwork.wall_description}</p>
        <h3>Artist:</h3>
        {artwork.creators.map((artist) => (
          <div>
            {artist.description}
            <h5>Bio:</h5>
            {artist.biography}
          </div>
        ))}
        <h3>Fun fact:</h3>
        {artwork.fun_fact}
        </div>
      </div>
    </Container>
  )
 }
SingleArtworkComponent.propTypes = {};

SingleArtworkComponent.defaultProps = {};

export default SingleArtworkComponent;

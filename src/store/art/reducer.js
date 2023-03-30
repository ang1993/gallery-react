import {
  GET_ARTWORKS,
  GET_ARTWORKS_OK,
  GET_ARTWORKS_FAIL,
  GET_SINGLE_ARTWORK,
  GET_SINGLE_ARTWORK_OK,
  GET_SINGLE_ARTWORK_FAIL,
  GET_SEARCH,
  GET_SEARCH_OK,
  GET_SEARCH_FAIL,
  GET_FEMALE_ARTWORK,
  GET_FEMALE_ARTWORK_OK,
  GET_FEMALE_ARTWORK_FAIL,
} from "./actionTypes";

const initialState = {
  artworks: [],
  loadingArtworks: false,
  singleArtwork: {},
  loadingSingleArtwork: false,
  searchResult: [],
  loadingSearch: false,
  femaleArtworks: [],
  loadingFemArt: false,
  error: {
    message: "",
  },
};

export default function ArtReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTWORKS:
      state = { ...state, loadingArtworks: true };
      break;
    case GET_ARTWORKS_OK:
      state = { ...state, artworks: action.payload, loadingArtworks: false };
      break;
    case GET_ARTWORKS_FAIL:
      state = {
        ...state,
        artworks: [],
        loadingArtworks: false,
        error: { message: action.payload },
      };
      break;
    case GET_SINGLE_ARTWORK:
      state = { ...state, loadingArtwork: true };
      break;
    case GET_SINGLE_ARTWORK_OK:
      state = {
        ...state,
        singleArtwork: action.payload,
        loadingSingleArtwork: false,
      };
      break;
    case GET_SINGLE_ARTWORK_FAIL:
      state = {
        ...state,
        singleArtwork: {},
        loadingSingleArtwork: false,
        error: { message: action.payload },
      };
      break;
    case GET_SEARCH:
      state = { ...state, loadingSearch: true };
      break;
    case GET_SEARCH_OK:
      state = { ...state, searchResult: action.payload, loadingSearch: false };
      break;
    case GET_SEARCH_FAIL:
      state = {
        ...state,
        searchResult: [],
        loadingSearch: false,
        error: { message: action.payload },
      };
      break;
    case GET_FEMALE_ARTWORK:
      state = { ...state, loadingFemArt: true };
      break;
    case GET_FEMALE_ARTWORK_OK:
      state = {
        ...state,
        femaleArtworks: action.payload,
        loadingFemArt: false,
      };
      break;
    case GET_FEMALE_ARTWORK_FAIL:
      state = {
        ...state,
        femaleArtworks: [],
        loadingFemArt: false,
        error: { message: action.payload },
      };
      break;
    default:
      break;
  }
  return state;
}

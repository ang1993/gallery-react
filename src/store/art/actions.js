import axios from 'axios'
import {

    GET_ARTWORKS,
    GET_ARTWORKS_OK,
    GET_ARTWORKS_FAIL,

    GET_SINGLE_ARTWORK,
    GET_SINGLE_ARTWORK_OK,
    GET_SINGLE_ARTWORK_FAIL,

    GET_SEARCH,
    GET_SEARCH_OK,
    GET_SEARCH_FAIL

} from './actionTypes'

const apiUrl = "https://openaccess-api.clevelandart.org/api/artworks"

//GET ARTWORKS:

export function actionGetArtworks(){
    return {
        type: GET_ARTWORKS
    }
}

export function actionGetArtworksOk(artworks){
    return {
        type: GET_ARTWORKS_OK,
        payload: artworks
    }
}

export function actionGetArtworksFail(error){
    return {
        type: GET_ARTWORKS_FAIL,
        payload: error
    }
}

export function getArtworks(){
    return async(dispatch) => {
        dispatch(actionGetArtworks())
        try {
            const res = await axios.get(`${apiUrl}/?q=&limit=8`)
            dispatch(actionGetArtworksOk(res.data.data))
        } catch (error) {
            dispatch(actionGetArtworksFail(error))
        }
    }
}

//GET SINGLE ARTWORK:

export function actionGetSingleArtwork(artwork){
    return {
        type: GET_SINGLE_ARTWORK,
        payload: artwork
    }
}


export function actionGetSingleArtworkOk(singleArtwork){
    return {
        type: GET_SINGLE_ARTWORK_OK,
        payload: singleArtwork
    }
}

export function actionGetSingleArtworkFail(error){
    return {
        type: GET_SINGLE_ARTWORK_FAIL,
        payload: error
    }
}

export function getSingleArtwork(artworkId){
    return async(dispatch) => {
        dispatch(actionGetSingleArtwork(artworkId))
        try {
            const res = await axios.get(`${apiUrl}/${artworkId}`)
            dispatch(actionGetSingleArtworkOk(res.data.data))
        } catch (error) {
            dispatch(actionGetSingleArtworkFail(error))
        }
    }
}

//SEARCH:

export function actionGetArtworkSearch(search){
    return {
        type: GET_SEARCH,
        payload: search
    }
}


export function actionGetArtworkSearchOk(result){
    return {
        type: GET_SEARCH_OK,
        payload: result
    }
}

export function actionGetArtworkSearchFail(error){
    return {
        type: GET_SEARCH_FAIL,
        payload: error
    }
}

export function getArtworkSearch(searchParam){
    return async(dispatch) => {
        dispatch(actionGetArtworkSearch(searchParam))
        try {
            const res = await axios.get(`https://openaccess-api.clevelandart.org/api/creators/?name=${searchParam}`)
            dispatch(actionGetArtworkSearchOk(res.data.data))
        } catch (error) {
            dispatch(actionGetArtworkSearchFail(error))
        }
    }
}

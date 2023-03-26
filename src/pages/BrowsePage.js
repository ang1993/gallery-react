import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ArtworksComponent from '../components/ArtworksComponent/ArtworksComponent'
import SearchComponent from "../components/SearchComponent/SearchComponent";
import "./styles.css"

export default function BrowsePage(){

    const {searchResult} = useSelector((state) => state.ArtReducer)

    return (
        <Container>
        Browse page
          {searchResult ? <SearchComponent></SearchComponent> : ""} 
        </Container>
    )
}
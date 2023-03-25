import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ArtworksComponent from '../components/ArtworksComponent/ArtworksComponent'
import SearchComponent from "../components/SearchComponent/SearchComponent";
import SelectComponent from "../components/SelectComponent/SelectComponent";
import "./styles.css"

export default function GalleryPage(){

    const {searchResult} = useSelector((state) => state.ArtReducer)

    return (
        <Container>            
            {/* <SelectComponent></SelectComponent> */}
            {searchResult ? <SearchComponent></SearchComponent> : ""} 
        </Container>
    )
}
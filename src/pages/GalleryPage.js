import { Container } from "react-bootstrap";
import ArtworksComponent from '../components/ArtworksComponent/ArtworksComponent'
import SearchComponent from "../components/SearchComponent/SearchComponent";
import SelectComponent from "../components/SelectComponent/SelectComponent";

export default function GalleryPage(){
    return (
        <Container>
            <h1>Gallery - Browse</h1>
            {/* <SelectComponent></SelectComponent> */}
            <SearchComponent></SearchComponent>
        </Container>
    )
}
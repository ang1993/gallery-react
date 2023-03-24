import { Container } from "react-bootstrap";
import ArtworksComponent from "../components/ArtworksComponent/ArtworksComponent";

export default function HomePage(){
    return (
        <Container>
            <h1>Home Page</h1>
            <ArtworksComponent></ArtworksComponent>
        </Container>
    )
}
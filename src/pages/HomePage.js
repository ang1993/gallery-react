import { Container } from "react-bootstrap";
import ArtworksComponent from "../components/ArtworksComponent/ArtworksComponent";
import { LoremIpsum } from "react-lorem-ipsum";
import FeaturedArtworks from "../components/FeaturedArtworks/FeaturedArtworks";

export default function HomePage(){
    return (
        <Container>
        <section className="container">
            <div className="row p-4">
                <div className="col-md-6">
                    <h1 className="H1RegularText">Believers &<span className="H1ItalicText">Humanity.</span></h1>
                </div>
            <div class="col-md-6 d-flex align-items-end">
                    <p className="BiggerP"><LoremIpsum avgWordsPerSentence={5}/></p>
                </div>
            </div>
        </section>
        <ArtworksComponent></ArtworksComponent>
        <FeaturedArtworks></FeaturedArtworks>
        </Container>
    )
}
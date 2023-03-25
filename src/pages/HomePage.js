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
        {/* <section className="container">
            <div className="row p-4">
                <div className="col-md-12 ">
                    <h3 className="H3RegularText">What's new?</h3>
                </div>
            <div class="col-md-12 d-flex align-items-center">
                    <p className="BiggerP"><LoremIpsum avgWordsPerSentence={8}/></p>
                </div>
            </div>
            <div className="row p-4">
                <div className="col-md-6">
                    <div className="RandomImgBox"></div>
                    <span>New Collection</span>
                    <h4 className="H3RegularText">Art by Random</h4>
                    <p><LoremIpsum avgWordsPerSentence={4}/></p>
                    <Button>Explore</Button>
                </div>
                <div class="col-md-6">
                    <div className="RandomImgBox"></div>
                    <span>New Collection</span>
                    <h4 className="H3RegularText">Art by Random</h4>
                    <p><LoremIpsum avgWordsPerSentence={4}/></p>
                    <Button>Explore</Button>
                </div>
            </div>
        </section> */}
        </Container>
    )
}
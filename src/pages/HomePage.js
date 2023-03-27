import { Container } from "react-bootstrap";
import ArtworksComponent from "../components/ArtworksComponent/ArtworksComponent";
import FeaturedArtworks from "../components/FeaturedArtworks/FeaturedArtworks";
import "./styles//styles.css"
import { Link } from "react-router-dom";


export default function HomePage(){

    return (
        <div className = 'HomePageBox'>
        <ArtworksComponent></ArtworksComponent>
        <Container>
        <section className="container">
            <div className="row p-4">
                <div className="col-md-6">
                    <h1 className="H1RegularText">Cansada &<span className="H1ItalicText">Harta.</span></h1>
                </div>
            <div class="col-md-6 flex align-self-center">
                <Link>Try browse</Link>
            </div>
            </div>
        </section>
        <FeaturedArtworks></FeaturedArtworks>
        <div className="row p-5"></div>

        </Container>
        </div>
    )
}
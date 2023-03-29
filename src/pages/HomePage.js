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
            <div className="row p-5">
                <div className="col-md-6">
                    <h1 className="H1RegularText">Goya, Hiroshige, <span className="H1ItalicText">Start exploring</span></h1>
                </div>
            <div class="col-md-6 flex align-self-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies enim nec quam dignissim, eu ultrices dolor varius. Pellentesque eu scelerisque mauris. Nullam posuere magna quis mauris aliquam, a semper ex tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <Link to={"/browse"} className="PrimaryButton">Start browsing</Link>
            </div>
            </div>
        </section>
        <FeaturedArtworks></FeaturedArtworks>
        <div className="row p-5"></div>

        </Container>
        </div>
    )
}
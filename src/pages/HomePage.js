import { Container } from "react-bootstrap";
import ArtworksComponent from "../components/ArtworksComponent/ArtworksComponent";
import { LoremIpsum } from "react-lorem-ipsum";
import FeaturedArtworks from "../components/FeaturedArtworks/FeaturedArtworks";
import "./styles.css"
import { Link } from "react-router-dom";
import GalleryGridComponent from "../components/GalleryGridComponent/GalleryGridComponent";
import { useDispatch, useSelector } from "react-redux";
import { getArtworks } from "../store/art/actions";
import { useEffect } from "react";

export default function HomePage(){

    return (
        <div className = 'HomePageBox'>
        <ArtworksComponent></ArtworksComponent>
        <Container>
        <section className="container">
            <div className="row p-4">
                <div className="col-md-6">
                    <h1 className="H1RegularText">Believers &<span className="H1ItalicText">Humanity.</span></h1>
                </div>
            <div class="col-md-6 flex align-self-center">
                <Link>Try browse</Link>
            </div>
            </div>
        </section>
        <FeaturedArtworks></FeaturedArtworks>
        <div className="row p-4"></div>
        {/* <GalleryGridComponent></GalleryGridComponent> */}
        </Container>
        </div>
    )
}
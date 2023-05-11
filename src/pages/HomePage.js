import { Container } from "react-bootstrap";
import ArtworksComponent from "../components/ArtworksComponent/ArtworksComponent";
import FeaturedArtworks from "../components/FeaturedArtworks/FeaturedArtworks";
import "./styles//styles.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="HomePageBox">
      <ArtworksComponent></ArtworksComponent>
      <Container>
        <section className="container">
          <div className="row p-5">
            <div className="col-md-6">
              <h1 className="H1RegularText">
                Browse artists,{" "}
                <span className="H1ItalicText">start exploring</span>
              </h1>
            </div>
            <div class="col-md-6 flex align-self-center">
              <p>
                Browse artists, embark on your art journey Discover a world of
                creativity and inspiration. Find your favorite artists, explore
                their captivating artwork, and delve into the depths of artistic
                expression. Start browsing now to uncover hidden gems and
                unearth new masterpieces. 
              </p>
              <Link to={"/browse"} className="PrimaryButton">
                Start browsing
              </Link>
            </div>
          </div>
        </section>
        <FeaturedArtworks></FeaturedArtworks>
        <div className="row p-5"></div>
      </Container>
    </div>
  );
}

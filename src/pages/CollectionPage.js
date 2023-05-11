import { Container } from "react-bootstrap";
import GalleryGridComponent from "../components/GalleryGridComponent/GalleryGridComponent";

export default function CollectionPage() {
  return (
    <div className="CollectionPageBox">
      <Container>
        <header className="PageHeader">
          <h3 className="GalleryH3">Take a look</h3>
          <p className="whiteP">
            Step into a virtual sanctuary of artistic wonders. Our gallery
            showcases a diverse collection of captivating artworks that will
            transport you to new realms of imagination and emotion. Marvel at
            the vibrant colors, intricate details, and profound expressions
            captured by talented artists from around the world. Immerse yourself
            in the beauty and depth of each piece as you wander through the
            virtual halls of our gallery. Discover hidden gems, encounter
            masterpieces, and let the art speak to your soul. Welcome to the
            Gallery at Art Browser, where inspiration awaits at every turn.
          </p>
        </header>
        <GalleryGridComponent></GalleryGridComponent>
      </Container>
    </div>
  );
}

import { Container } from "react-bootstrap";
import GalleryGridComponent from "../components/GalleryGridComponent/GalleryGridComponent";

export default function CollectionPage() {
  return (
    <div className="CollectionPageBox">
      <Container>
        <header className="PageHeader">
          <h3 className="GalleryH3">Take a look</h3>
          <p className="whiteP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            euismod libero vitae congue tincidunt. Etiam congue dui quam, ut
            porta ante rutrum vel. Maecenas turpis est, pretium eget augue a,
            ullamcorper ornare nisi. Etiam nisl justo, congue eget lectus sit
            amet, vestibulum bibendum elit. Nulla facilisi.{" "}
          </p>
        </header>
        <GalleryGridComponent></GalleryGridComponent>
      </Container>
    </div>
  );
}

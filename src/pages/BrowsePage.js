import { Container } from "react-bootstrap";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import "./styles/styles.css";

export default function BrowsePage() {
  return (
    <div className="BrowsePageBox">
      <Container>
        <header className="PageHeader">
          <h3 className="H3RegularText">
            Search&<span className="italic">Find</span>
          </h3>
          <p className="BiggerP">
            Unleash your inner art detective and dive into the realm of endless
            possibilities. Our powerful search engine empowers you to find the
            perfect artwork or artist that resonates with your unique taste and
            preferences. Whether you're seeking a specific masterpiece or simply
            browsing for inspiration, let your curiosity guide you on a
            captivating journey through the vast collection of Art Browser.
            Discover, explore, and find your artistic gems today.
          </p>
        </header>
        <SearchComponent></SearchComponent>
      </Container>
    </div>
  );
}

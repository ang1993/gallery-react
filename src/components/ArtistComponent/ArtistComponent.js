import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./artistcomponent.css";
import "../../pages/styles/styles.css";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const ArtistComponent = () => {
  const { searchResult } = useSelector((state) => state.ArtReducer);

  return (
    <div className="ArtistCompBox">
      <Container>
        <Link className="ScndButton BackButton" to="/browse">
          {" "}
          {`<`} Back to Browser
        </Link>
        <h3 className="H3RegularText ArtistH3">{searchResult[0].name}</h3>
        <p className="artistNation">{searchResult[0].nationality}</p>
        <p className="birthDead">
          {searchResult[0].birth_year} - {searchResult[0].death_year}{" "}
        </p>
        <SimpleBar style={{ maxHeight: 400 }} forceVisible="y" autoHide={false}>
          {searchResult[0].artworks.map((artwork) => (
            <div className="ArtworkPreviewBox">
              <h6 className="ArtworkTitleList">{artwork.title}</h6>
              <p className="ArtworkTombstoneList">{artwork.tombstone}</p>
              <Link to={`/artwork/${artwork.id}`} className="ScndButton">
                View
              </Link>
            </div>
          ))}
        </SimpleBar>
      </Container>
    </div>
  );
};

export default ArtistComponent;

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getArtworkSearch } from "../../store/art/actions";
import { Link } from "react-router-dom";
import "./searchcomponent.css";
import "../../pages/styles/styles.css";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const { searchResult } = useSelector((state) => state.ArtReducer);
  const [showImages, setShowImages] = useState(true);

  function search() {
    setShowImages(false);
    dispatch(getArtworkSearch(inputValue));
  }

  return (
    <Container>
      <section className="SearcherContainer">
        <div className="SearcherBox">
          <label className="searcherLabel">Search an artist by name: </label>
          <input
            className="formInput inputSearch"
            placeholder="Ex: Goya"
            defaultValue=""
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <Link className="PrimaryButton" onClick={search}>
            Browse
          </Link>
        </div>
        {showImages && <div className="BannerSearch"></div>}
        <div className="searchResultBox">
          <div className="searchResultGrid">
            {searchResult.map((obj) => (
              <Link className="cardArtistLink" to={`/artist/${obj.name}`}>
                <div className="searcher-card" key={obj.id}>
                  <h5 className="artistName">{obj.name}</h5>
                  <div className="pinkLine"></div>
                  <p className="searcherCountry">{obj.nationality}</p>
                  <p className="birthDeath">
                    {obj.birth_year} - {obj.death_year}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default SearchComponent;

import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getArtworks } from "../../store/art/actions";
import "../../pages/styles/styles.css";
import "./featuredartworks.css";
import { Link } from "react-router-dom";

const FeaturedArtworks = () => {
  const dispatch = useDispatch();
  const { artworks, loadingArtworks } = useSelector(
    (state) => state.ArtReducer
  );

  useEffect(() => {
    dispatch(getArtworks());
  }, [dispatch]);

  if (loadingArtworks) {
    return (
      <div className="VoidBanner">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          alt="loading"
        />
      </div>
    );
  }

  return (
    <Container>
      <div className="FeaturedArtworksBox">
        <header className="FeaturedArtworksHeader">
          <h3 className="H3RegularText">What's new?</h3>
          <p className="BiggerP">
            Discover the latest additions to our ever-growing collection of
            artwork. Our curated selection showcases the most captivating and
            innovative pieces from talented artists around the world. Immerse
            yourself in a world of artistic inspiration and stay up-to-date with
            the latest trends in the art scene.
          </p>
        </header>
        <section className="AllCardsBox">
          {artworks.slice(8, 11).map((artwk) => (
            <div className="CardBox" key={artwk.id}>
              <div className="CardImageBox">
                <img
                  className="CardImage"
                  src={artwk.images.web.url}
                  alt={artwk.title}
                />
              </div>
              <div className="CardInfo">
                <span className="collectionInfo"> {artwk.department} </span>
                <h5 className="CardTitle">{artwk.title}</h5>
                <p>{artwk.creators[0].description}</p>
                <p className="labelData">{artwk.technique}</p>
                <Link to={`/artwork/${artwk.id}`} className="PrimaryShrtButton">
                  View
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Container>
  );
};

export default FeaturedArtworks;

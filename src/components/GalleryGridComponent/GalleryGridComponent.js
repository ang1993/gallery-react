import React, { useEffect } from "react";
import "../../pages/styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getArtworks } from "../../store/art/actions";
import "./gallerygrid.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import SimpleBar from "simplebar-react";

const GalleryGridComponent = () => {
  const dispatch = useDispatch();
  const { artworks } = useSelector((state) => state.ArtReducer);

  useEffect(() => {
    dispatch(getArtworks());
  }, [dispatch]);

  if (!artworks) {
    return null;
  }
  return (
    <div className="GalleryGridBox">
      <Container>
        <SimpleBar style={{ maxHeight: 450 }} forceVisible="y" autoHide={false}>
          <section className="galleryGrid">
            <div className="galleryRow">
              <div className="galleryCol">
                {artworks.slice(0, 10).map((art) => (
                  <Link className="galleryLink" to={`/artwork/${art.id}`}>
                    {art.images.web ? (
                      <img
                        className="galleryImage"
                        src={art.images.web.url}
                        key={art.id}
                        alt={art.title}
                      />
                    ) : (
                      ""
                    )}
                  </Link>
                ))}
              </div>
              <div className="galleryCol">
                {artworks.slice(11, 23).map((art) => (
                  <div className="galleryItem">
                    <Link className="galleryLink" to={`/artwork/${art.id}`}>
                      {art.images.web ? (
                        <img
                          className="galleryImage"
                          src={art.images.web.url}
                          key={art.id}
                          alt={art.title}
                        />
                      ) : (
                        ""
                      )}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="galleryCol">
                {artworks.slice(24, 33).map((art) => (
                  <Link className="galleryLink" to={`/artwork/${art.id}`}>
                    {art.images.web ? (
                      <img
                        className="galleryImage"
                        src={art.images.web.url}
                        key={art.id}
                        alt={art.title}
                      />
                    ) : (
                      ""
                    )}
                  </Link>
                ))}
              </div>
              <div className="galleryCol">
                {artworks.slice(35, 45).map((art) => (
                  <Link className="galleryLink" to={`/artwork/${art.id}`}>
                    {art.images.web ? (
                      <img
                        className="galleryImage"
                        src={art.images.web.url}
                        key={art.id}
                        alt={art.title}
                      />
                    ) : (
                      ""
                    )}
                  </Link>
                ))}
              </div>
              <div className="galleryCol">
                {artworks.slice(46, 58).map((art) => (
                  <Link className="galleryLink" to={`/artwork/${art.id}`}>
                    {art.images.web ? (
                      <img
                        className="galleryImage"
                        src={art.images.web.url}
                        key={art.id}
                        alt={art.title}
                      />
                    ) : (
                      ""
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </SimpleBar>
      </Container>
    </div>
  );
};

export default GalleryGridComponent;

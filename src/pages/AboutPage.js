import { Container } from "react-bootstrap";
import "./styles/styles.css";

export default function AboutPage() {
  return (
    <div className="AboutPageBox">
      <Container>
        <header className="PageHeader">
          <h3 className="H3RegularText">About</h3>
          <p className="BiggerP">
            At Art Browser, we believe in the transformative power of art. Our
            mission is to connect art enthusiasts with extraordinary artwork
            from all corners of the globe. With a passion for creativity and a
            dedication to curating exceptional collections, we strive to bring
            the world of art closer to you. Our team of art experts and
            enthusiasts carefully handpick each artwork, ensuring a diverse
            range of styles, mediums, and perspectives. Whether you're an
            established collector or a budding art enthusiast, we invite you to
            embark on a journey of discovery and inspiration. Experience the joy
            of exploring captivating paintings, mesmerizing sculptures, and
            thought-provoking mixed media creations. Immerse yourself in the
            stories and emotions behind each piece, as we celebrate the
            boundless beauty and limitless expressions of art. Join us as we
            celebrate the artists, the visionaries, and the dreamers who dare to
            push the boundaries of creativity. Together, let's embrace the power
            of art to inspire, to provoke, and to enrich our lives. Welcome to
            ArtWorld, where imagination knows no bounds.
          </p>
        </header>
        <section className="AboutBox">
          <article className="CardBox CardAbout">
            <div className="AboutCardInfo">
              <h5 className="AboutCardTitle">Our Browser</h5>
              <div className="pinkLine"></div>
              <p>
                Explore our user-friendly browser that allows you to
                effortlessly navigate through our extensive collection of
                artworks. Discover a world of creativity at your fingertips and
                easily find the perfect piece that resonates with your artistic
                sensibilities.
              </p>
            </div>
          </article>
          <article className="CardBox CardAbout">
            <div className="AboutCardInfo">
              <h5 className="AboutCardTitle">Artworks</h5>
              <div className="pinkLine"></div>
              <p>
                Immerse yourself in a diverse collection of mesmerizing artworks
                that span various styles, mediums, and genres. From stunning
                paintings to captivating sculptures, each artwork tells a unique
                story and evokes a range of emotions. Experience the beauty and
                power of artistic expression through our carefully curated
                selection.
              </p>
            </div>
          </article>
          <article className="CardBox CardAbout">
            <div className="AboutCardInfo">
              <h5 className="AboutCardTitle">Artists</h5>
              <div className="pinkLine"></div>
              <p>
                Discover a community of talented artists who breathe life into
                their creations. Delve into their artistic journeys,
                inspirations, and techniques as you explore their impressive
                portfolios. From emerging talents to renowned masters, our
                platform celebrates artists from around the world and their
                contributions to the art world.
              </p>
            </div>
          </article>
          <article className="CardBox CardAbout">
            <div className="AboutCardInfo">
              <h5 className="AboutCardTitle">Who</h5>
              <div className="pinkLine"></div>
              <p>
                Art enthusiasts, collectors, and curious minds — our platform is
                designed for anyone who appreciates the beauty and significance
                of art. Whether you're a seasoned collector looking to expand
                your collection or a newcomer eager to explore the art scene, we
                welcome you to join our vibrant community of like-minded
                individuals.
              </p>
            </div>
          </article>
          <article className="CardBox CardAbout">
            <div className="AboutCardInfo">
              <h5 className="AboutCardTitle">Where</h5>
              <div className="pinkLine"></div>
              <p>
                No matter where you are, Art Browser brings the world of art to
                your fingertips. Explore artwork from every corner of the globe,
                transcending geographical boundaries. Our platform connects art
                lovers worldwide, fostering a global appreciation for art and
                cultural exchange.
              </p>
            </div>
          </article>
          <article className="CardBox CardAbout">
            <div className="AboutCardInfo">
              <h5 className="AboutCardTitle">Why</h5>
              <div className="pinkLine"></div>
              <p>
                At Art Browser, we believe that art has the power to inspire,
                ignite emotions, and create meaningful connections. We strive to
                provide a platform that celebrates the transformative nature of
                art and its ability to enrich our lives. Join us in embracing
                the beauty, creativity, and endless possibilities that art
                offers.
              </p>
            </div>
          </article>
        </section>
      </Container>
    </div>
  );
}

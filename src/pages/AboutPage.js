import { Container } from "react-bootstrap";
import "./styles/styles.css";

export default function AboutPage() {
  return (
    <div className="AboutPageBox">
      <Container>
        <header className="PageHeader">
          <h3 className="H3RegularText">About</h3>
          <p className="BiggerP">
            Duis bibendum dictum est, et suscipit purus porta nec. Morbi tortor
            nulla, rutrum ac venenatis dapibus, placerat mattis ex. Aliquam
            mollis malesuada ultrices. Quisque eget pretium elit. Sed aliquam
            tortor ultricies, dictum tellus sit amet, gravida odio. Praesent
            congue ante ut massa accumsan gravida. Donec sed pharetra risus.
            Maecenas suscipit enim est, ac molestie mauris mollis id.
            Suspendisse potenti. In ante orci, viverra ac dolor in, dictum
            consequat mauris.{" "}
          </p>
        </header>
        <section className="AboutBox">
          <article className="CardBox CardAbout">
            <div className="AboutCardInfo">
              <h5 className="AboutCardTitle">Our Browser</h5>
              <div className="pinkLine"></div>
              <p>
                Duis bibendum dictum est, et suscipit purus porta nec. Morbi
                tortor nulla, rutrum ac venenatis dapibus, placerat mattis ex.
                Aliquam mollis malesuada ultrices.
              </p>
            </div>
          </article>
          <article className="CardBox CardAbout">
            <div className="AboutCardInfo">
              <h5 className="AboutCardTitle">Artworks</h5>
              <div className="pinkLine"></div>
              <p>
                Duis bibendum dictum est, et suscipit purus porta nec. Morbi
                tortor nulla, rutrum ac venenatis dapibus, placerat mattis ex.
                Aliquam mollis malesuada ultrices.
              </p>
            </div>
          </article>
          <article className="CardBox CardAbout">
            <div className="AboutCardInfo">
              <h5 className="AboutCardTitle">Artists</h5>
              <div className="pinkLine"></div>
              <p>
                Duis bibendum dictum est, et suscipit purus porta nec. Morbi
                tortor nulla, rutrum ac venenatis dapibus, placerat mattis ex.
                Aliquam mollis malesuada ultrices.
              </p>
            </div>
          </article>
          <article className="CardBox CardAbout">
            <div className="AboutCardInfo">
              <h5 className="AboutCardTitle">Who</h5>
              <div className="pinkLine"></div>
              <p>
                Duis bibendum dictum est, et suscipit purus porta nec. Morbi
                tortor nulla, rutrum ac venenatis dapibus, placerat mattis ex.
                Aliquam mollis malesuada ultrices.
              </p>
            </div>
          </article>
          <article className="CardBox CardAbout">
            <div className="AboutCardInfo">
              <h5 className="AboutCardTitle">Where</h5>
              <div className="pinkLine"></div>
              <p>
                Duis bibendum dictum est, et suscipit purus porta nec. Morbi
                tortor nulla, rutrum ac venenatis dapibus, placerat mattis ex.
                Aliquam mollis malesuada ultrices.
              </p>
            </div>
          </article>
          <article className="CardBox CardAbout">
            <div className="AboutCardInfo">
              <h5 className="AboutCardTitle">Why</h5>
              <div className="pinkLine"></div>
              <p>
                Duis bibendum dictum est, et suscipit purus porta nec. Morbi
                tortor nulla, rutrum ac venenatis dapibus, placerat mattis ex.
                Aliquam mollis malesuada ultrices.
              </p>
            </div>
          </article>
        </section>
      </Container>
    </div>
  );
}

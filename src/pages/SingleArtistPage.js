import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ArtistComponent from "../components/ArtistComponent/ArtistComponent";
import { getArtworkSearch } from "../store/art/actions";

export default function SingleArtistPage() {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtworkSearch(param.name));
  }, [dispatch, param.name]);

  return (
    <Container>
      <ArtistComponent></ArtistComponent>
    </Container>
  );
}

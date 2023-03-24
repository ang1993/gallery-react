import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SingleArtworkComponent from "../components/SingleArtworkComponent/SingleArtworkComponent";
import { getSingleArtwork } from "../store/art/actions";

export default function SingleArtworkPage(){

    const param = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleArtwork(param.id))
    }, [])

    return (
        <Container>
            <SingleArtworkComponent></SingleArtworkComponent>
        </Container>
    )
}


import { Container, Form, FormGroup, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { doLogout } from "../store/auth/actions";

export default function UserAreaPage(){

    const {user} = useSelector((state) => state.UserReducer)
    const dispatch = useDispatch()

    function logOut(){
      dispatch(doLogout())
    }
  

    return (
        <Container>
            <h4>Welcome {user.username}</h4>
            <Form>
                <FormGroup>
                    <label>Nombre: </label> {user.firstName}
                </FormGroup>
                <FormGroup>
                    <label>Apellidos: </label> {user.lastName}
                </FormGroup>
                <FormGroup>
                    <label>Email: </label> {user.email}
                </FormGroup>
            </Form>

            <Image src= {user.image}></Image>
            <Link onClick={logOut}>Logout</Link>

        </Container>
    )
}
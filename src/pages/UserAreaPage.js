import { Container, Form, FormGroup, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function UserAreaPage(){

    const {user} = useSelector((state) => state.UserReducer)

    return (
        <Container>
            <h4>Welcome {user.username}</h4>
            <Form>
                <FormGroup>
                    <label>Nombre: </label> {user.username}
                </FormGroup>
                <FormGroup>
                    <label>Apellidos: </label> {user.lastname}
                </FormGroup>
                <FormGroup>
                    <label>Email: </label> {user.email}
                </FormGroup>
            </Form>

            <Image src= {user.image}></Image>

        </Container>
    )
}
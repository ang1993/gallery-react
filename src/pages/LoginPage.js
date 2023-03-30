import { Container } from "react-bootstrap";
import LoginComponent from "../components/LoginComponent/LoginComponent";
import "./styles/userstyles.css";

export default function LoginPage() {
  return (
    <div className="LoginAreaPageBox">
      <Container>
        <div className="myCol">
          <LoginComponent></LoginComponent>
        </div>
      </Container>
    </div>
  );
}

import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { doLogout } from "../store/auth/actions";
import "./styles/styles.css"


export default function UserAreaPage(){

    const {user} = useSelector((state) => state.UserReducer)
    const dispatch = useDispatch()

    function logOut(){
      dispatch(doLogout())
    }
  

    return (
        <div className="UserAreaPageBox">
        <Container>
            <div className="myCol">
            <div className= "welcomeUserHeader">
                <h4>Nice to see you again, {user.username}!</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in enim nisl. Suspendisse mauris tortor, consectetur ut ipsum a, euismod fermentum velit. Donec quis felis et ligula ornare auctor. </p>
            </div>
                <div className="UserLoggedCard">
                <div className="userImageBox">
                    <img src= {user.image} alt={user.firstName} />
                </div>
                <div className="userInfoBox">
                    <p className="userInfoBox-userName"> {user.username} </p>
                    <p> {user.firstName} {user.lastName}</p>
                    <p> {user.email} </p>
                </div>
                </div>
                <div className="buttonsBox">
                    <Link to={"/browse"} className="PrimaryButton">Start browsing</Link>
                    <Link className="ScndButton" onClick={logOut}>Logout</Link>
                </div>
            </div>
        </Container>
        </div>
    )
}
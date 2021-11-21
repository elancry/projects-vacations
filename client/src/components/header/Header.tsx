import { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { ActionType } from "../../redux/action-type";
import { AppState } from "../../redux/app-state";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  const isLoginStatus = useSelector((state: AppState) => state.isLogin);
  const welcomeUser = useSelector((state: AppState) => state.firstName);
  const userTypeStatus = useSelector((state: AppState) => state.user);


  if (localStorage.getItem("user")) {
    const name: any = localStorage.getItem("user");
    const parsedName = JSON.parse(name);
    const welcomeFirstName = parsedName.firstName;
    const userTypeStatus = parsedName.userType;

    dispatch({ type: ActionType.welcomeUser, payload: welcomeFirstName });
    dispatch({ type: ActionType.getUser, payload: userTypeStatus });
  }

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch({ type: ActionType.isLogin, payload: true });
    }
  }, [dispatch]);

  const onLogoutClicked = () => {
    localStorage.removeItem("user");
    dispatch({ type: ActionType.isLogin, payload: false });
  };

  return (
    <Navbar collapseOnSelect expand="sm" className="header" variant="dark">
      <Container>
        <Navbar.Brand className="myBrand" href="/home">
          <span className="t">TRAVELLY.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white navb about" href="/about-me">
              ABOUT
            </Nav.Link>
            {userTypeStatus === "ADMIN" && (
              <Nav.Link className="text-white navb vacations" href="/admin/vacations">
                VACATIONS
              </Nav.Link>
            )}
            {userTypeStatus === "USER" && (
              <Nav.Link className="text-white navb vacations" href="/vacations">
                VACATIONS
              </Nav.Link>
            )}
            {userTypeStatus === "ADMIN" && (
              <Nav.Link className="text-white navb vacations" href="/chart">
                CHART
              </Nav.Link>
            )}
            {userTypeStatus === "ADMIN" && (
              <Nav.Link className="text-white navb vacations" href="/add-vacation">
                ADD VACATIONS
              </Nav.Link>
            )}
          </Nav>

          <Nav>
            <Button onClick={onLogoutClicked} className="text-dark login" href="/login">
              {!isLoginStatus && "Login"}
              {isLoginStatus && "Logout"}
            </Button>
            {!isLoginStatus && (
              <Button className="text-dark sign-up" href="/registration">
                {!isLoginStatus && "Sign up"}
              </Button>
            )}
          </Nav>
          <div className="welcome"> {isLoginStatus && "Welcome " + welcomeUser}</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

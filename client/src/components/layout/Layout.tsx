import "./Layout.css";
import { Grid } from "@material-ui/core";
import Registration from "../registration/Registration";
import Footer from "../footer/Footer";
import Login from "../Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Vacations from "../vacations/Vacations";
import AdminPage from "../Admin/admin-page/AdminPage";
import EditVacation from "../edit-vacation/EditVacation";
import Home from "../home/Home";
import Header from "../header/Header";
import About from "../About/About";
import Chart from "../Chart/Chart";
import AddVacation from "../Admin/add-vacation/AddVacation";

function Layout() {
  return (
    <div className="layout">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Grid>
              <Home />
            </Grid>
          </Route>
          <Route exact path="/login">
            <Grid>
              <Login />
            </Grid>
          </Route>
          <Route exact path="/about-me">
            <About />
          </Route>
          <Route path="/registration">
            <Grid>
              <Registration />
            </Grid>
          </Route>
          <Route path="/chart">
            <Grid>
              <Chart />
            </Grid>
          </Route>
          <Route path="/vacations">
            <Vacations />
          </Route>
          <Route path="/add-vacation">
            <AddVacation />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          <Route path="/edit-vacation">
            <EditVacation />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default Layout;

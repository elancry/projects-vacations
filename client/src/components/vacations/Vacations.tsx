import "./Vacations.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../../redux/action-type";
import { AppState } from "../../redux/app-state";
import { IVacationModel } from "../interfaces/IVacationModel";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";

function Vacations() {
  const dispatch = useDispatch();
  const history = useHistory();

  const vacationArray = useSelector((state: AppState) => state.vacations);

  async function onFollowedClicked(props: IVacationModel) {
    console.log(vacationArray);
    let vacationId = props.vacationId;
    console.log(vacationId);

    if (props.isFollowed) {
      await axios.delete(`http://localhost:3001/followers/${vacationId}`);
    } else {
      await axios.post(`http://localhost:3001/followers/`, { vacationId: props.vacationId });
    }
  }

  useEffect(() => {
    let userData: any = localStorage.getItem("user");
    if (!userData) {
      history.push("/login");
    } else {
      let parsedToken = JSON.parse(userData);
      let token = parsedToken.token;
      let userType = parsedToken.userType;
      console.log("token " + token);
      console.log("user Type " + userType);
      if (userType === "USER") {
        if (token) {
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        }
      } else {
        history.push("/admin");
      }
    }
    getAllVacation();
  }, [vacationArray]);

  function getAllVacation() {
    axios
      .get("http://localhost:3001/vacations")
      .then((response) => {
        let vacations = response.data;
        dispatch({
          type: ActionType.getAllVacations,
          payload: vacations,
        });
      })
      .catch((err) => {
        console.log("Failed to fetch data from Vacations" + err);
        toast.error("Failed to fetch data from Vacations");
      });
  }

  return (
    <div>
      {vacationArray.map((vacations: any, key: number) => (
        <div data-aos="fade-right">
          <div key={key} className="vacation">
            <section className="light">
              <div className="container py-5">
                <article className="postcard light blue">
                  <a className="postcard__img_link" href="#!">
                    <img className="postcard__img" src={vacations.image} alt="" />
                  </a>
                  <div className="postcard__text t-dark ">
                    <div className="mt-2">
                      <h1 className="postcard__title blue mt-2">{vacations.destination}</h1>
                    </div>
                    <div className="postcard__subtitle small">
                      <div className="departing">
                        <GiAirplaneDeparture className="airplane mt" /> Departing :{" "}
                        <i>{vacations.fromDate}</i>
                      </div>
                      <div className="returning">
                        <GiAirplaneArrival className="airplane" /> Returning :{" "}
                        <i>{vacations.toDate}</i>
                      </div>
                    </div>

                    <div className="postcard__bar"></div>
                    <div className="postcard__preview-txt">{vacations.description}</div>

                    <div className="postcard__subtitle small text-center">
                      <h6>
                        TOTAL PRICE : $<i>{vacations.price} USD for one person.</i>
                      </h6>
                      <p>Followed: {vacations.amountOfFollowers} Persons.</p>
                    </div>

                    <span onClick={() => onFollowedClicked(vacations)}>
                      {vacations.isFollowed && <AiFillStar className="unFollow" />}
                      {!vacations.isFollowed && <AiOutlineStar className="follow" />}
                    </span>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Vacations;

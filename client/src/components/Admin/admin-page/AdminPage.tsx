import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ActionType } from "../../../redux/action-type";
import { AppState } from "../../../redux/app-state";
import { IVacationModel } from "../../interfaces/IVacationModel";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import Swal from "sweetalert2";
import "./AdminPage.css";

function AdminPage() {
  const vacationArray = useSelector((state: AppState) => state.vacations);

  let userData: any = localStorage.getItem("user");
  let parsedToken = JSON.parse(userData);
  let token = parsedToken.token;
  let userType = parsedToken.userType;

  const dispatch = useDispatch();
  const history = useHistory();

  const onClickedDeleteVacation = async (vacationId: any) => {
    try {
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:3001/vacations/${vacationId}`);
          dispatch({
            type: ActionType.removeVacation,
            payload: {
              vacationId,
            },
          });
          Swal.fire("Deleted!", "Your vacation has been deleted.", "success");
        }
      });
    } catch {
      console.error(600);
    }
  };

  const onClickedEditVacation = (vacations: any) => {
    try {
      if (userType === "ADMIN") {
        if (token) {
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        }
      }
      history.push(`/edit-vacation/${vacations.vacationId}`);
      dispatch({
        type: ActionType.editVacation,
        payload: vacations,
      });
    } catch {
      console.error(600);
    }
  };

  useEffect(() => {
    if (userType === "ADMIN") {
      if (token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      }
    }
    axios
      .get("http://localhost:3001/vacations")
      .then((response) => {
        dispatch({
          type: ActionType.getAllVacations,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("Failed to fetch data from vacations." + err);
      });
  }, [dispatch]);

  return (
    <div>
      {vacationArray.map((vacations: IVacationModel, key: number) => (
        <div data-aos="fade-right">
          <div key={key} className="vacation">
            <section className="light">
              <div className="container py-5">
                <article className="postcard light blue">
                  <a className="postcard__img_link" href="#!">
                    <img className="postcard__img" src={vacations.image} alt="" />
                  </a>
                  <div className="postcard__text t-dark">
                    <div className="mt-2">
                      <h1 className="postcard__title blue mt-2">{vacations.destination}</h1>
                    </div>
                    <div className="postcard__subtitle small">
                      <div className="departing">
                        <GiAirplaneDeparture className="airplane" /> Departing :{" "}
                        <i>{vacations.fromDate}</i>
                      </div>
                      <div className="returning">
                        <GiAirplaneArrival className="airplane" /> Returning :{" "}
                        <i>{vacations.toDate}</i>
                      </div>
                    </div>

                    <div className="postcard__bar"></div>
                    <div className="postcard__preview-txt">{vacations.description}</div>
                    <div className="postcard__subtitle small text-center mt-3">
                      <h6>
                        TOTAL PRICE : $<i>{vacations.price} USD for one person.</i>
                      </h6>
                      <p>Followed: {vacations.amountOfFollowers} Persons.</p>
                    </div>

                    <FaEdit
                      className="icon__edit"
                      type="button"
                      onClick={() => onClickedEditVacation(vacations)}
                    />
                    <FaTrashAlt
                      className="icon__del"
                      type="button"
                      onClick={() => onClickedDeleteVacation(vacations.vacationId)}
                    />
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

export default AdminPage;

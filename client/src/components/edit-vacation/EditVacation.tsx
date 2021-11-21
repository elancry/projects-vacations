import { ChangeEvent, useEffect, useState } from "react";
import Axios from "axios";
import "./EditVacations.css";
import { Input } from "../common";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/app-state";
import { AiOutlineSave } from "react-icons/ai";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ActionType } from "../../redux/action-type";

export default function EditVacation() {
  const editValues = useSelector((state: AppState) => state.vacationToEdit);
  const [destination, setDestination] = useState(editValues.destination);
  const [description, setDescription] = useState(editValues.description);
  const [fromDate, setFromDate] = useState(editValues.fromDate);
  const [toDate, setToDate] = useState(editValues.toDate);
  const [price, setPrice] = useState(editValues.price);
  const [image, setImage] = useState(editValues.image);

  const history = useHistory();
  const dispatch = useDispatch();

  let url = window.location.href;
  let vacationId = +url.substring(url.lastIndexOf("/") + 1);

  const onClickEditVacation = async () => {
    try {
      await Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: "Don't save",
      }).then((result) => {
        if (result.isConfirmed) {
          Axios.put(`http://localhost:3001/vacations/edit-vacation/${vacationId}`, {
            destination,
            description,
            fromDate,
            toDate,
            price,
            image,
          }).then((Response) => {
            console.log(Response);
            history.push("/vacations");
          });
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          history.push("/vacations");
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } catch {
      console.error(600);
    }
  };

  useEffect(() => {
    let userData: any = localStorage.getItem("user");
    if (!userData) {
      history.push("/login");
    } else {
      let parsedToken = JSON.parse(userData);
      let token = parsedToken.token;
      let userType = parsedToken.userType;
      let username = parsedToken.userName;
      console.log("token " + token);
      console.log("user Type " + userType);

      if (userType === "ADMIN") {
        if (token) {
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
          dispatch({
            type: ActionType.getUser,
            payload: { userType, username },
          });
        }
      } else {
        history.push("/");
      }
    }
  });

  const onDestinationChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setDestination(event.target.value);
  };
  const onDescriptionChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const onFromDateChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setFromDate(event.target.value);
  };
  const onToDateChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setToDate(event.target.value);
  };
  const onSetPriceChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(+event.target.value);
  };
  const onImageChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-3">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3 text-light">Edit Vacation</h4>
                          <div className="form-group">
                            <Input
                              className="form-style"
                              type="text"
                              defaultValue={editValues.destination}
                              placeholder="Destination"
                              onChange={onDestinationChanged}
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>

                          <div className="form-group mt-2">
                            <Input
                              className="form-style"
                              type="text"
                              defaultValue={editValues.description}
                              placeholder="Description"
                              onChange={onDescriptionChanged}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div className="form-group mt-2">
                            <Input
                              className="form-style"
                              defaultValue={editValues.fromDate}
                              type="date"
                              onChange={onFromDateChanged}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div className="form-group mt-2">
                            <Input
                              className="form-style"
                              defaultValue={editValues.toDate}
                              type="date"
                              onChange={onToDateChanged}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <Input
                              className="form-style"
                              defaultValue={editValues.price}
                              placeholder="Price"
                              onChange={onSetPriceChanged}
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <Input
                              className="form-style"
                              type="text"
                              defaultValue={editValues.image}
                              placeholder="Image"
                              onChange={onImageChanged}
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>

                          <button
                            className="btn btn1 mt-4 text-light"
                            type="submit"
                            onClick={onClickEditVacation}
                          >
                            SAVE <AiOutlineSave />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

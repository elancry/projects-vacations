import "./AddVacation.css";
import { ChangeEvent, useEffect, useState } from "react";
import Axios from "axios";
import { Input } from "../../common";
import { MdLibraryAdd } from "react-icons/md";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionType } from "../../../redux/action-type";

export default function AddVacation() {
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const onClickAddVacation = async () => {
    await Axios.post("http://localhost:3001/vacations", {
      destination,
      description,
      fromDate,
      toDate,
      price,
      image,
    }).then((Response) => {
      console.log(Response);
      history.push("/vacations");
      Swal.fire({
        title: "Success",
        text: "Adding a vacation was successful",
        icon: "success",
        confirmButtonText: "Cool",
      });
    });
  };
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
    setPrice(event.target.value);
  };
  const onImageChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
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
          Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
          dispatch({
            type: ActionType.getUser,
            payload: { userType: userType, username: username },
          });
        }
      } else {
        history.push("/");
      }
    }
  });

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
                          <h4 className="mb-4 pb-3 text-light">Add Vacation</h4>
                          <div className="form-group ">
                            <Input
                              className="form-style"
                              type="text"
                              placeholder="Destination"
                              onChange={onDestinationChanged}
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>

                          <div className="form-group mt-2">
                            <Input
                              className="form-style"
                              type="text"
                              placeholder="Description"
                              onChange={onDescriptionChanged}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div className="form-group mt-2">
                            <Input
                              className="form-style"
                              type="date"
                              onChange={onFromDateChanged}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div className="form-group mt-2">
                            <Input className="form-style" type="date" onChange={onToDateChanged} />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <Input
                              className="form-style"
                              type="text"
                              placeholder="Price"
                              onChange={onSetPriceChanged}
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <Input
                              className="form-style"
                              type="text"
                              placeholder="Image"
                              onChange={onImageChanged}
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>

                          <button
                            className="btn btn1 mt-4 text-light"
                            type="submit"
                            onClick={onClickAddVacation}
                          >
                            ADD <MdLibraryAdd />
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

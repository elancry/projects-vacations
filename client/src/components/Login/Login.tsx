import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../common";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { ActionType } from "../../redux/action-type";
import axios from "axios";
import "./Login.css";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});

// ES6 Modules or TypeScript

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const onFirstNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const onLastNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const onUserNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onEmailChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onConfirmPasswordChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const onRegisterClicked = () => {
    Axios.post("http://localhost:3001/users", {
      username,
      password,
      confirmPassword,
      email,
      firstName,
      lastName,
    })
      .then((Response) => {
        Swal.fire({
          title: "Your registration successful",
          text: "In order to see all the vacations please log in.",
          icon: "info",
          confirmButtonText: "Ok",
        });
        console.log(Response);
      })
      .catch((e) => {
        setErrorMessage(e.response.data.error);
        console.log(e.response.data.error);
      });
  };
  useEffect(() => {
    localStorage.removeItem("user");
    dispatch({ type: ActionType.isLogin, payload: false });
  }, [dispatch]);

  const onLoginClicked = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/users/login", {
        username,
        password,
      });

      dispatch({
        type: ActionType.isLogin,
        payload: true,
      });

      let userData = response.data;
      axios.defaults.headers.common["Authorization"] = "Bearer " + userData;
      localStorage.setItem("user", JSON.stringify(userData));
      dispatch({
        type: ActionType.getUser,
        payload: username,
      });

      if (userData.userType === "ADMIN") {
        history.push("/admin/");
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        return;
      } else if (userData.userType === "USER") {
        history.push(`/vacations/${username}`);
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      } else if (userData.userType !== "USER" || userData.userType !== "ADMIN") {
        history.push("/login");
      }
    } catch (e) {
      setErrorMessage(e.response.data.error);
      console.error(e.response.data.error);
    }
  };

  return (
    <div>
      <div data-aos="fade-up">
        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-3">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3">
                    <span>Log In </span>
                    <span>Sign Up</span>
                  </h6>
                  <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center responsive">
                            <h4 className="mb-4 pb-3 text-light">Log In</h4>
                            <div className="form-group">
                              <Input
                                className="form-style"
                                type="text"
                                placeholder="Username"
                                onChange={(e: any) => {
                                  setUsername(e.target.value);
                                }}
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <Input
                                className="form-style"
                                type="password"
                                placeholder="Password"
                                onChange={(e: any) => {
                                  setPassword(e.target.value);
                                }}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <div
                              className="errorMessage"
                              onChange={(e: any) => {
                                setErrorMessage(e.target.value);
                              }}
                            >
                              {ErrorMessage}
                            </div>
                            <button className="btn btn1 mt-4 text-light" onClick={onLoginClicked}>
                              Login
                            </button>

                            <p className="mb-0 mt-4 text-center text-secondary">
                              <a href="#0" className="link">
                                Forgot your password?
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3 text-light">Sign Up</h4>
                            <div className="form-group ">
                              <Input
                                className="form-style"
                                type="text"
                                placeholder="Username"
                                onChange={onUserNameChanged}
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>

                            <div className="form-group mt-2">
                              <Input
                                className="form-style"
                                type="password"
                                placeholder="Password"
                                onChange={onPasswordChanged}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <div className="form-group mt-2">
                              <Input
                                className="form-style"
                                type="password"
                                placeholder="Confirm Password"
                                onChange={onConfirmPasswordChanged}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <div className="form-group mt-2">
                              <Input
                                className="form-style"
                                type="email"
                                placeholder="Email"
                                onChange={onEmailChanged}
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <Input
                                className="form-style"
                                type="text"
                                placeholder="First Name"
                                onChange={onFirstNameChanged}
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group mt-2">
                              <Input
                                className="form-style"
                                type="text"
                                placeholder="Last Name"
                                onChange={onLastNameChanged}
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>

                            <button
                              className="btn btn1 mt-4 text-light"
                              onClick={onRegisterClicked}
                            >
                              Sign up
                            </button>
                            <div
                              className="errorMessage"
                              onChange={(e: any) => {
                                setErrorMessage(e.target.value);
                              }}
                            >
                              {ErrorMessage}
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
      </div>
    </div>
  );
}

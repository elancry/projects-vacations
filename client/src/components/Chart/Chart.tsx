import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { ActionType } from "../../redux/action-type";
import "./Chart.css";

const Chart = () => {
  const [chartDetails, setChartDetails] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    let userData: any = localStorage.getItem("user");
    if (!userData) {
      history.push("/login");
    } else {
      let parsedToken = JSON.parse(userData);
      let token = parsedToken.token;
      let userType = parsedToken.userType;
      let username = parsedToken.userName;
      console.log(parsedToken.userType);
      console.log(parsedToken.userName);

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
      } else  {
        history.push("/");
      }

      graph();
    }
  }, [dispatch]);

  const graph = async () => {
    axios.get("http://localhost:3001/vacations/").then((response) => {
      let vacationArr = response.data;
      let chartVacationLocation = [];
      let chartAmountOfFollowers = [];

      let i = 0;
      while (i < vacationArr.length && vacationArr[i].amountOfFollowers > 0) {
        chartVacationLocation[i] = vacationArr[i].destination;
        chartAmountOfFollowers[i] = vacationArr[i].amountOfFollowers;
        i++;
      }
      
      setChartDetails({
        labels: chartVacationLocation,
        datasets: [
          {
            label: "Number of follower ",
            data: chartAmountOfFollowers.map((data) => data),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 163, 235, 0.575)",
              "rgba(255, 207, 86, 0.575)",
              "rgba(75, 192, 192, 0.575)",
              "rgba(153, 102, 255, 0.575)",
              "rgba(255, 159, 64, 0.575)",
              "rgba(145, 207, 0, 0.2)",
              "rgba(15, 77, 117, 0.575)",
              "rgba(206, 5, 5, 0.575)",
              "rgba(0, 109, 109, 0.575)",
              "rgba(28, 0, 83, 0.575)",
              "rgba(7, 218, 0, 0.575)",
              "rgba(4, 0, 255, 0.575)",
            ],
            borderWith: 1,
          },
        ],
      });
    });
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div data-aos="zoom-in-up">
      <div className="chart">
        <div className="chart-div container">
          <Bar data={chartDetails} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Chart;

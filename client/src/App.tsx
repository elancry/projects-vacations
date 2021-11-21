import "./App.css";
import Layout from "./components/layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <Layout />
      <div>
        <div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
}

export default App;

import Main from "./Main";
import "./input.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verify from "./components/Verify";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Preview from "./components/Preview";
import Dashboard from "./pages/Dasboard";
import TourRequest from "./pages/TourRequest";
import { useState } from "react";
import TourGuide from "./pages/TourGuide";
import Payment from "./pages/Payment";
import Withdraw from "./components/Withdraw";
import SupportUser from "./pages/SupportUser";
import ProductFeedback from "./pages/ProductFeedback";
import {
  // createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase/firebase-config";
import PageNotFound from "./pages/PageNotFound";
import { useEffect } from "react";

function App() {
  //to save reg form input
  const [regForm, setRegForm] = useState({
    companyName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // console.log(regForm);

  //to handle form input change chnage
  function handleRegChange(event) {
    const { id, value } = event.target;
    setRegForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  //to save login form input
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  //to handle form input change chnage
  function handleLoginChange(event) {
    const { id, value } = event.target;
    setLoginForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  const [showLoader, setShowLoader] = useState(false);

  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  // console.log(user);

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );
  // console.log(isLoggedIn);

  const [invalidCred, setInvalidCred] = useState(false);

  const navigate = useNavigate();

  //to handle reg form data submit to firebase
  // const register = async (e) => {
  //   e.preventDefault();
  //   setShowLoader(true);

  //   createUserWithEmailAndPassword(auth, regForm.email, regForm.password)
  //     .then((res) => {
  //       setShowLoader(false);
  //       navigate("/dashboard");
  //       setIsLoggedIn(true);
  //       localStorage.setItem("isLoggedIn", true);
  //     })
  //     .catch((err) => {
  //       setShowLoader(false);
  //       console.log(err.message);
  //     });
  // };

  const [userExists, setUserExists] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  function closeUserMod() {
    setUserExists(false);
    setRegisterSuccess(false);
  }

  //to send reg data to endpoint
  const regGo = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    try {
      const res = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regForm),
      });
      const data = await res.json();
      if (data.message === "Existing Account, Go to the Login page") {
        console.log("User Exists!", data);
        window.scrollTo(0, 0);
        setUserExists(true);

        setTimeout(() => {
          navigate("/login");
        }, 5000);
        setTimeout(() => {
          setUserExists(false);
        }, 12000);
      } else {
        setRegisterSuccess(true);
        navigate("/login");
        console.log("Sign up success!", data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setShowLoader(false);
    }
  };

  //to log in users with firebase
  const login = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
      .then((res) => {
        setShowLoader(false);
        navigate("/dashboard");
        setIsLoggedIn(true);
        setInvalidCred(false);
        localStorage.setItem("isLoggedIn", true);
      })
      .catch((err) => {
        setShowLoader(false);
        console.log(err.message);
        setInvalidCred(true);
      });
  };

  //to log out users
  const logout = async () => {
    signOut(auth).then(() => {
      localStorage.setItem("isLoggedIn", false);
      navigate("/");
    });
  };

  //to handle the link highlight of current page
  const location = useLocation();
  let currentPage = location.pathname;

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route
          path="/login"
          element={
            <Login
              handleLoginChange={handleLoginChange}
              showLoader={showLoader}
              login={login}
              invalidCred={invalidCred}
              registerSuccess={registerSuccess}
              closeUserMod={closeUserMod}
              userExists={userExists}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              regForm={regForm}
              handleRegChange={handleRegChange}
              showLoader={showLoader}
              userExists={userExists}
              regGo={regGo}
              closeUserMod={closeUserMod}
            />
          }
        />

        {isLoggedIn && user && (
          <>
            <Route
              path="/dashboard"
              element={<Dashboard currentPage={currentPage} logout={logout} />}
            />
            <Route
              path="/tour-request"
              element={
                <TourRequest currentPage={currentPage} logout={logout} />
              }
            />
            <Route
              path="/tour-guide"
              element={<TourGuide currentPage={currentPage} logout={logout} />}
            />
            <Route
              path="/payment"
              element={<Payment currentPage={currentPage} logout={logout} />}
            />
            <Route
              path="/withdraw"
              element={<Withdraw currentPage={currentPage} logout={logout} />}
            />
            <Route
              path="/support-user"
              element={
                <SupportUser currentPage={currentPage} logout={logout} />
              }
            />
            <Route
              path="/product-feedback"
              element={
                <ProductFeedback currentPage={currentPage} logout={logout} />
              }
            />
            <Route path="/verify" element={<Verify />} />
            <Route path="/step1" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/preview" element={<Preview />} />
          </>
        )}

        {/* user will be redirected to this page if they input invalid URL  */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

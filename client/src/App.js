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
  // onAuthStateChanged,
  // signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase/firebase-config";
import PageNotFound from "./pages/PageNotFound";
import axios from "axios";
// import { useEffect } from "react";

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

  // const [user, setUser] = useState({});
  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  // }, []);
  // console.log(user);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(isLoggedIn);

  // const [invalidCred, setInvalidCred] = useState(false);

  const navigate = useNavigate();

  const [userExists, setUserExists] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  function closeUserMod() {
    setUserExists(false);
    setRegisterSuccess(false);
    setLoginSuccess(false);
  }

  async function regGo(e) {
    e.preventDefault();
    setShowLoader(true);
    try {
      const response = await axios.post("/api/register", regForm);
      if (response.ok) {
        setRegisterSuccess(true);
        setTimeout(() => {
          setRegisterSuccess(false);
        }, 10000);
        navigate("/login");
        console.log(response.status, response.statusText);
        console.log(response.data);
      } else if (response.seeother) {
        window.scrollTo(0, 0);
        setUserExists(true);

        setTimeout(() => {
          navigate("/login");
        }, 5000);
        setTimeout(() => {
          setUserExists(false);
        }, 12000);
        console.log(response.status, response.statusText);
        console.log(response.data);
      }
      // return response.data;
    } catch (error) {
      console.error(error);
    } finally {
      setShowLoader(false);
    }
  }

  //to send reg data to endpoint
  // const regGo = async (e) => {
  //   e.preventDefault();
  //   setShowLoader(true);
  //   // console.log(regForm);

  //   const res = await fetch("/api/register", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(regForm),
  //   });

  //   console.log("register func response : ", res);

  //   try {
  //     if (res.ok) {
  //       setRegisterSuccess(true);
  //       setTimeout(() => {
  //         setRegisterSuccess(false);
  //       }, 10000);
  //       navigate("/login");
  //       console.log("Sign up success, status : ", res.status, res.statusText);
  //       console.log(await res.json());
  //     } else if (res.seeother) {
  //       console.log("ERROR, status : ", res.status);
  //       window.scrollTo(0, 0);
  //       setUserExists(true);

  //       setTimeout(() => {
  //         navigate("/login");
  //       }, 5000);
  //       setTimeout(() => {
  //         setUserExists(false);
  //       }, 12000);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setShowLoader(false);
  //   }
  // };

  // const [userData, setUserData] = useState({});

  // async function loginGo(e) {
  //   e.preventDefault();
  //   setShowLoader(true);
  //   try {
  //     const response = await axios.post("/api/login", loginForm);
  //     if (response.ok) {
  //       setIsLoggedIn(true);
  //       setLoginSuccess(true);
  //       setTimeout(() => {
  //         setLoginSuccess(false);
  //       }, 5000);
  //       navigate("/dashboard");
  //       window.scrollTo(0, 0);
  //       console.log("Success... status : ", res.status, res.statusText);
  //       console.log(response.data);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setIsLoggedIn(false);
  //     window.scrollTo(0, 0);
  //   } finally {
  //     setShowLoader(false);
  //   }
  // }

  //to login users with go
  const loginGo = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    console.log(loginForm);

    const res = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginForm),
    });

    try {
      if (res.ok) {
        setIsLoggedIn(true);
        setLoginSuccess(true);
        setTimeout(() => {
          setLoginSuccess(false);
        }, 5000);
        navigate("/dashboard");
        window.scrollTo(0, 0);
        console.log("Log in success... status : ", res.status, res.statusText);
        console.log(await res.json());
      }
    } catch (err) {
      console.log("Error: ", err);
      setIsLoggedIn(false);
      window.scrollTo(0, 0);
    } finally {
      setShowLoader(false);
    }
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
              // invalidCred={invalidCred}
              registerSuccess={registerSuccess}
              closeUserMod={closeUserMod}
              userExists={userExists}
              loginGo={loginGo}
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

        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard
                currentPage={currentPage}
                logout={logout}
                loginSuccess={loginSuccess}
                closeUserMod={closeUserMod}
              />
            ) : (
              <Login
                handleLoginChange={handleLoginChange}
                showLoader={showLoader}
                // invalidCred={invalidCred}
                registerSuccess={registerSuccess}
                closeUserMod={closeUserMod}
                userExists={userExists}
                loginGo={loginGo}
              />
            )
          }
        />
        <Route
          path="/tour-request"
          element={<TourRequest currentPage={currentPage} logout={logout} />}
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
          element={<SupportUser currentPage={currentPage} logout={logout} />}
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

        {/* {isLoggedIn && user && (
          <>
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  currentPage={currentPage}
                  logout={logout}
                  loginSuccess={loginSuccess}
                  closeUserMod={closeUserMod}
                />
              }
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
        )} */}

        {/* user will be redirected to this page if they input invalid URL  */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

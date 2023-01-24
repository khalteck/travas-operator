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
import { useEffect, useState } from "react";
import TourGuide from "./pages/TourGuide";
import Payment from "./pages/Payment";
import Withdraw from "./components/Withdraw";
import SupportUser from "./pages/SupportUser";
import ProductFeedback from "./pages/ProductFeedback";
import PageNotFound from "./pages/PageNotFound";

function App() {
  //to save reg form input
  const [regForm, setRegForm] = useState({
    company_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  // console.log(regForm);

  //to handle form input change chnage
  function handleRegChange(event) {
    const { id, value } = event.target;
    setLoginErrorMessage("");
    setRegErrorMessage("");
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
    setLoginErrorMessage("");
    setNetworkError(false);
    setRegErrorMessage("");
    setLoginForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  const [showLoader, setShowLoader] = useState(false);

  const navigate = useNavigate();

  const [regErrorMessage, setRegErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  function closeUserMod() {
    setRegisterSuccess(false);
    setLoginSuccess(false);
    setRegErrorMessage("");
    setLoginErrorMessage("");
  }

  async function regGo(e) {
    e?.preventDefault();
    setShowLoader(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: new URLSearchParams(regForm), //to send as form encoded
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      const data = await response.json();

      if (response.ok) {
        setRegisterSuccess(true);
        setTimeout(() => {
          setRegisterSuccess(false);
        }, 10000);
        navigate("/login");
      } else if (!response.ok) {
        window.scrollTo(0, 0);
        setRegErrorMessage(data.message);
      }
    } catch (error) {
      setNetworkError(true);
    } finally {
      setShowLoader(false);
    }
  }

  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {}
  );

  async function loginGo(e) {
    e.preventDefault();
    setShowLoader(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: new URLSearchParams(loginForm), //to send as form encoded
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      const data = await response.json();
      setUserData(data);

      if (response.ok) {
        setIsLoggedIn(true);
        setLoginSuccess(true);
        setTimeout(() => {
          setLoginSuccess(false);
        }, 10000);
        navigate("/dashboard");
        window.scrollTo(0, 0);
        console.log(response.status, response.statusText);
      } else if (!response.ok) {
        setLoginErrorMessage(data.message);
        console.log(response.status, response.statusText);
        setIsLoggedIn(false);
        window.scrollTo(0, 0);
      }
    } catch (error) {
      setNetworkError(true);
      console.log(error);
    } finally {
      setShowLoader(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  //to log out users
  const logout = async () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("userData");
    navigate("/");
    setIsLoggedIn(false);
  };

  //to handle the link highlight of current page
  const location = useLocation();
  let currentPage = location.pathname;

  useEffect(() => {
    setLoginErrorMessage("");
    setRegErrorMessage("");
    setNetworkError(false);
    setpasswordDoNotMatch(false);
  }, [currentPage]);

  const [passwordDoNotMatch, setpasswordDoNotMatch] = useState(false);
  function retypePassword() {
    setpasswordDoNotMatch(true);
  }
  //to show and hide password
  const [showPassword, setShowPassword] = useState(false);
  function togglePassword() {
    setShowPassword((prev) => !prev);
  }
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Main isLoggedIn={isLoggedIn} logout={logout} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route
          path="/login"
          element={
            <Login
              handleLoginChange={handleLoginChange}
              showLoader={showLoader}
              registerSuccess={registerSuccess}
              closeUserMod={closeUserMod}
              loginGo={loginGo}
              loginErrorMessage={loginErrorMessage}
              showPassword={showPassword}
              togglePassword={togglePassword}
              networkError={networkError}
              isLoggedIn={isLoggedIn}
              logout={logout}
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
              regGo={regGo}
              closeUserMod={closeUserMod}
              regErrorMessage={regErrorMessage}
              isLoggedIn={isLoggedIn}
              logout={logout}
              passwordDoNotMatch={passwordDoNotMatch}
              retypePassword={retypePassword}
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
                isLoggedIn={isLoggedIn}
                loginSuccess={loginSuccess}
                closeUserMod={closeUserMod}
                userData={userData}
              />
            ) : (
              <Login
                handleLoginChange={handleLoginChange}
                showLoader={showLoader}
                registerSuccess={registerSuccess}
                closeUserMod={closeUserMod}
                loginGo={loginGo}
                loginErrorMessage={loginErrorMessage}
                showPassword={showPassword}
                togglePassword={togglePassword}
                networkError={networkError}
                isLoggedIn={isLoggedIn}
                logout={logout}
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

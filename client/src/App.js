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
  createUserWithEmailAndPassword,
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

  //to send reg data to endpoint
  const regGo = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regForm),
    })
      .then((res) => {
        navigate("/dashboard");
        console.log("User data sent!", res.json());
        setShowLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setShowLoader(false);
      });
  };

  //to handle reg form data submit to firebase
  const register = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    createUserWithEmailAndPassword(auth, regForm.email, regForm.password)
      .then((res) => {
        setShowLoader(false);
        navigate("/dashboard");
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
      })
      .catch((err) => {
        setShowLoader(false);
        console.log(err.message);
      });
  };

  //to log in users
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
              register={register}
              regGo={regGo}
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

// *home page route
//       <Route path="/">
//         <Header />
//         <Main />
//         <Footer />
//       </Route>
//       {/**home page route */}

//       {/**about page route */}
//       <Route path="/about">
//         <Header />
//         <About />
//         <Footer />
//       </Route>
//       {/**about page route */}

//       {/**pricing page route */}
//       <Route path="/pricing">
//         <Header />
//         <Pricing />
//         <Footer />
//       </Route>
//       {/**pricing page route */}

//       {/**support page route */}
//       <Route path="/support">
//         <Header />
//         <Support />
//         <Footer />
//       </Route>
//       {/**support page route */}

//       {/* Login Page Route */}
//       <Route path="/login">
//         <Header />
//         <Login />
//         <Footer />
//       </Route>
//       {/* Login Page Route */}

//       {/* Register Page Route */}
//       <Route path="/register">
//         <Header />
//         <Register
//           regForm={regForm}
//           handleRegChange={handleRegChange}
//           showLoader={showLoader}
//           register={register}
//         />
//         <Footer />
//       </Route>
//       {/* Register Page Route */}

//       {/* user will be redirected to this page if they input invalid URL  */}
//       <Route path="*">
//         <PageNotFound />
//       </Route>

//       {userState && (
//         <>
//           {/* Dashboard Route */}
//           <Route path="/dashboard">
//             <Dashboard
//               currentPage={currentPage}
//               handleCurrentPage={handleCurrentPage}
//             />
//           </Route>

//           {/* Tour request Route */}
//           <Route path="/tour-request">
//             <TourRequest
//               currentPage={currentPage}
//               handleCurrentPage={handleCurrentPage}
//             />
//           </Route>

//           {/* Tour guide Route */}
//           <Route path="/tour-guide">
//             <TourGuide
//               currentPage={currentPage}
//               handleCurrentPage={handleCurrentPage}
//             />
//           </Route>

//           {/* Payment Route */}
//           <Route path="/payment">
//             <Payment
//               currentPage={currentPage}
//               handleCurrentPage={handleCurrentPage}
//             />
//           </Route>

//           {/* Withdraw Route */}
//           <Route path="/withdraw">
//             <Withdraw
//               currentPage={currentPage}
//               handleCurrentPage={handleCurrentPage}
//             />
//           </Route>

//           {/* Support user Route */}
//           <Route path="/support-user">
//             <SupportUser
//               currentPage={currentPage}
//               handleCurrentPage={handleCurrentPage}
//             />
//           </Route>

//           {/* Product feedback Route */}
//           <Route path="/product-feedback">
//             <ProductFeedback
//               currentPage={currentPage}
//               handleCurrentPage={handleCurrentPage}
//             />
//           </Route>

//           {/* verify identity Route */}
//           <Route path="/verify">
//             <Verify />
//             <Footer />
//           </Route>
//           {/* Verify identity Route */}

//           {/* Step1 Route */}
//           <Route path="/step1">
//             <Step1 />
//             <Footer />
//           </Route>
//           {/* Step1 Route */}

//           {/* Step2 Route */}
//           <Route path="/step2">
//             <Step2 />
//             <Footer />
//           </Route>
//           {/* Step2 Route */}

//           {/* Step3 Route */}
//           <Route path="/step3">
//             <Step3 />
//             <Footer />
//           </Route>
//           {/* Step3 Route */}

//           {/* Preview Route */}
//           <Route path="/preview">
//             <Preview />
//             <Footer />
//           </Route>
//         </>
//       )}

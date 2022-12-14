import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "./input.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {
  //to handle the link highlight of current page
  const [currentPage, setCurrentPage] = useState({
    dashboard: true,
    tourRequest: false,
    tourGuide: false,
    payment: false,
    support: false,
    product: false,
  });

  //to handle click of nav links
  function handleCurrentPage(event) {
    const { id } = event.target;
    setCurrentPage((prevState) => {
      return {
        dashboard: false,
        tourRequest: false,
        tourGuide: false,
        payment: false,
        support: false,
        product: false,
        [id]: true,
      };
    });
  }

  return (
    <Router>
      <div className="content-per-page">
        <Switch>
          {/**home page route */}
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
          {/**home page route */}

          {/**about page route */}
          <Route exact path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          {/**about page route */}

          {/**pricing page route */}
          <Route exact path="/pricing">
            <Header />
            <Pricing />
            <Footer />
          </Route>
          {/**pricing page route */}

          {/**support page route */}
          <Route exact path="/support">
            <Header />
            <Support />
            <Footer />
          </Route>
          {/**support page route */}

          {/* Login Page Route */}
          <Route exact path="/login">
            <Header />
            <Login />
            <Footer />
          </Route>
          {/* Login Page Route */}

          {/* Register Page Route */}
          <Route exact path="/register">
            <Header />
            <Register />
            <Footer />
          </Route>
          {/* Register Page Route */}

          {/* verify identity Route */}
          <Route exact path="/verify">
            <Verify />
            <Footer />
          </Route>
          {/* Verify identity Route */}

          {/* Step1 Route */}
          <Route exact path="/step1">
            <Step1 />
            <Footer />
          </Route>
          {/* Step1 Route */}

          {/* Step2 Route */}
          <Route exact path="/step2">
            <Step2 />
            <Footer />
          </Route>
          {/* Step2 Route */}

          {/* Step3 Route */}
          <Route exact path="/step3">
            <Step3 />
            <Footer />
          </Route>
          {/* Step3 Route */}

          {/* Preview Route */}
          <Route exact path="/preview">
            <Preview />
            <Footer />
          </Route>

          {/* Dashboard Route */}
          <Route exact path="/dashboard">
            <Dashboard
              currentPage={currentPage}
              handleCurrentPage={handleCurrentPage}
            />
          </Route>

          {/* Tour request Route */}
          <Route exact path="/tour-request">
            <TourRequest
              currentPage={currentPage}
              handleCurrentPage={handleCurrentPage}
            />
          </Route>

          {/* Tour guide Route */}
          <Route exact path="/tour-guide">
            <TourGuide
              currentPage={currentPage}
              handleCurrentPage={handleCurrentPage}
            />
          </Route>

          {/* Payment Route */}
          <Route exact path="/payment">
            <Payment
              currentPage={currentPage}
              handleCurrentPage={handleCurrentPage}
            />
          </Route>

          {/* Withdraw Route */}
          <Route exact path="/withdraw">
            <Withdraw
              currentPage={currentPage}
              handleCurrentPage={handleCurrentPage}
            />
          </Route>

          {/* Support user Route */}
          <Route exact path="/support-user">
            <SupportUser
              currentPage={currentPage}
              handleCurrentPage={handleCurrentPage}
            />
          </Route>

          {/* Product feedback Route */}
          <Route exact path="/product-feedback">
            <ProductFeedback
              currentPage={currentPage}
              handleCurrentPage={handleCurrentPage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

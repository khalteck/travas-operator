import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "./input.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Support from "./components/Support";
import Login from "./components/Login";
import Register from "./components/Register";
import Verify from "./components/Verify";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Preview from "./components/Preview";

function App() {
  return (
    <Router>
      <div className="content-per-page">
        <Header />
        <Switch>
          {/**home page route */}
          <Route exact path="/">
            <Main />
          </Route>
          {/**home page route */}

          {/**about page route */}
          <Route exact path="/about">
            <About />
          </Route>
          {/**about page route */}

          {/**pricing page route */}
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          {/**pricing page route */}

          {/**support page route */}
          <Route exact path="/support">
            <Support />
          </Route>
          {/**support page route */}

          {/* Login Page Route */}
          <Route exact path="/login">
            <Login />
          </Route>
          {/* Login Page Route */}

          {/* Register Page Route */}
          <Route exact path="/register">
            <Register />
          </Route>
          {/* Register Page Route */}

          {/* verify identity Route */}
          <Route exact path="/verify">
            <Verify />
          </Route>
          {/* Verify identity Route */}

          {/* Step1 Route */}
          <Route exact path="/step1">
            <Step1 />
          </Route>
          {/* Step1 Route */}

          {/* Step2 Route */}
          <Route exact path="/step2">
            <Step2 />
          </Route>
          {/* Step2 Route */}

          {/* Step3 Route */}
          <Route exact path="/step3">
            <Step3 />
          </Route>
          {/* Step3 Route */}

          {/* Preview Route */}
          <Route exact path="/preview">
            <Preview />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

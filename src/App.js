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

function App() {
  return (
    <Router>
      <div className="content-per-page">
        <Switch>
          {/**home page route */}
          <Route exact path="/">
            <Header />
            <Main />
          </Route>
          {/**home page route */}

          {/**about page route */}
          <Route exact path="/about">
            <Header />
            <About />
          </Route>
          {/**about page route */}

          {/**pricing page route */}
          <Route exact path="/pricing">
            <Header />
            <Pricing />
          </Route>
          {/**pricing page route */}

          {/**support page route */}
          <Route exact path="/support">
            <Header />
            <Support />
          </Route>
          {/**support page route */}

          {/* Login Page Route */}
          <Route exact path="/login">
            <Header />
            <Login />
          </Route>
          {/* Login Page Route */}

          {/* Register Page Route */}
          <Route exact path="/register">
            <Header />
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

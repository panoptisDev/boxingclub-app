import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import AboutPage from "./pages/about";
import ClassesPage from "./pages/classes";
import MembershipPage from "./pages/membership";
import CoachesPage from "./pages/coaches";
import RegisterPage from "./pages/register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/classes" component={ClassesPage} exact />
        <Route path="/membership" component={MembershipPage} exact />
        <Route path="/coaches" component={CoachesPage} exact />
        <Route path="/register" component={RegisterPage} exact />
      </Switch>
    </Router>
  );
}

export default App;

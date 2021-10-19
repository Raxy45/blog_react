import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              {/* if exact isn't given then for /create also
              tht path / will be served.
              eg: path was /c then even though the path in url was ...../create
                  ,still /c page would be served. TO AVOID THIS USE exact 
                  The logic is same as switch case*/}
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              {/* the id will be passed as param to the BlogDetails component */}
              <BlogDetails />
            </Route>
            <Route path="*">
              {/* this route acts as default in switch case, for undefined routes
              this route would be served */}
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

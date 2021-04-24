import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PostPage from "./components/PostPage";
import NewPost from "./components/NewPost";
import NotFound from "./components/NotFound";

const App = () => {
  return ( 
    <>
    <Router>
      <Navbar />
      <div className="container">
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:id">
            <PostPage />
          </Route>
          <Route path="/new">
            <NewPost />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
      </Switch>
      </div>
    </Router>
    </>
   );
}
 
export default App;

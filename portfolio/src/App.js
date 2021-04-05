import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import SinglePost from "./pages/SinglePost.js";
import Post from "./pages/Post.js";
import Project from "./pages/Project.js";
import Navbar from './pages/Navbar'
import './index.css'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={SinglePost} exact path="/post/:slug" />
        <Route component={Post} exact path="/post" />
        <Route component={Project} exact path="/project" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

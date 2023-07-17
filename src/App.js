import logo from "./logo.svg";
import "./App.css";
import PostList from "./PostList";
import AddPost from "./AddPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPost from "./EditPost";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "black", color: "white", padding: "10px" }}>
        {" "}
        MERN Stack CRUD Applciation
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" component={PostList} exact />
          <Route path="/addpost" component={AddPost} exact />
          <Route path="/editpost" component={EditPost} />
        </Routes>
      </BrowserRouter>

      <AddPost />
    </div>
  );
}

import logo from "./logo.svg";
import "./App.css";
import PostList from "./PostList";
import AddPost from "./AddPost";
import {BrowserRouter, Router} from 'react-router-dom'


export default function App() {
  return (
    <div className="App">
      <h1> MERN Stack CRUD Applciation</h1>
      <PostList />
      <AddPost />
    </div>
  ); 
}
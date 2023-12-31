import React, { useState } from "react";
import axios from "axios";
import uniqid from "uniqid";
export default function AddPost() {
  const [title, settitle] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [description, setdescription] = useState("");

  function addpost() {
    var post = {
      title: title,
      imageurl: imageurl,
      description: description,
      postid: uniqid(),
    };
    
    axios.post('/api/post/addnewpost',post).then(res=>{
      alert(res.data)
    }).then(err=>{
      console.log(err)
    })
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div>
          <input
            type="text"
            placeholder="title"
            className="form-control"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="imageurl"
            className="form-control"
            value={imageurl}
            onChange={(e) => {
              setimageurl(e.target.value);
            }}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Description"
            className="form-control"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
        </div>
      </div>
      <button onClick={addpost} className="btn btn-success float-left">
        Add Post
      </button>
    </div>
  );
}

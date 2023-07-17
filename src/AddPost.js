import React from "react";
import Button from "react-bootstrap/Button";
export default function AddPost() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div>
          <input type="text" placeholder="title" className="form-control" />
          <input type="text" placeholder="imageurl" className="form-control" />
          <textarea
            cols="30"
            rows="10"
            placeholder="Description"
            className="form-control"
          />
        </div>
      </div>
      <button className="btn btn-success float-right">Boostrap Button</button>
    </div>
  );
}
